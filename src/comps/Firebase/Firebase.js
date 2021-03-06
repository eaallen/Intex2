import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react' 
import produce from 'immer'
import axios from 'axios'
export const AppContext = React.createContext()

    const config = {
        apiKey: "AIzaSyDcnvbjnEzH9DbXmHokhh0mfqFMIFE-oVY",
        authDomain: "gofundmecovid.firebaseapp.com",
        databaseURL: "https://gofundmecovid.firebaseio.com",
        projectId: "gofundmecovid",
        storageBucket: "gofundmecovid.appspot.com",
        messagingSenderId: "458165374679",
        appId: "1:458165374679:web:d6bcaceabb642ee5836a92", 
        measurementId: "G-E4QL32GR86"
    };
   
    class Firebase extends React.Component {
        constructor(props) {
          super(props)
          this.actions={
            updateUserAuth: this.updateUserAuth,
            getApiToken: this.getApiToken,
            getQueryData: this.getQueryData,
            getQueryDataAll: this.getQueryDataAll,
            setModal: this.setModal,
            getDataFromTextArea: this.getDataFromTextArea,
            loader: this.loader,
            doCreateUserWithEmailAndPassword:this.doCreateUserWithEmailAndPassword,
            doSignInWithEmailAndPassword:this.doSignInWithEmailAndPassword,
            doSignInWithGoogle:this.doSignInWithGoogle,
            doSignInWithRedirect:this.doSignInWithRedirect,
            doGetRedirectResult:this.doGetRedirectResult,
            doSignOut:this.doSignOut,
            doPasswordReset:this.doPasswordReset,
            doPasswordUpdate:this.doPasswordUpdate,
            doAddRecord:this.doAddRecord,
            doGetQueryRecord:this.doGetQueryRecord,
            getOneRecord:this.getOneRecord,
            checkState: this.checkState,
            user: this.user,
          }
          this.state = {
            dataQuerySingle: {},
            key: null,
            dataQueryAll: null,
            f1:window.f1,
            f3:window.f3,
            dom1: document.getElementById('msg'),
            dom2: document.getElementById('msg2'),
            showModal: false,
            sql: "SELECT * FROM covid_dataset LIMIT 10",
            loading: null,
            // user: null
          }
          
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.firestore()
          this.googleProvider =new app.auth.GoogleAuthProvider();
          this.auth.onAuthStateChanged(function(user) {
            if (user){
            }else{
            }    
          });
        }

        
        updateUserAuth = (userInfo) =>{
          // this.state.auth_user = userInfo
          // // this.state.auth_user = userInfo          
          // // this.setState({auth_user: userInfo})
        }
        getApiToken = async() => {
            const key = await this.getOneRecord('startup','exMEUpW9TkwEs0Tu5plh').get().then(doc =>{ return doc.data()}) 
            return key.api
        }

        doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
        
        doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
        
        //////////////////GOOGLE OAUTH2 REDIRECT/////////////////////
        doSignInWithRedirect = () => this.auth.signInWithRedirect(this.googleProvider);
        doGetRedirectResult = () => this.auth.getRedirectResult();

        doSignOut = () => this.auth.signOut();
        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
        doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
        doAddRecord = (_collection) => this.db.collection(_collection).doc();
        doGetQueryRecord = (_collection, item_looking_for,filtering_item) => this.db.collection(_collection).where(item_looking_for, '==',filtering_item).get();
        getOneRecord = (_collection, item_wanted) => this.db.collection(_collection).doc(item_wanted)
        checkState = async() =>{ await
          this.auth.onAuthStateChanged(function(user) {
            if (user){
              console.log('user accorfing to firebase')
            }else{
              console.log('according to firebase: no user info')
            }    
          });
        }
        user = () => this.auth.currentUser
    
        //=======================================================================
        //                    QUERY DATA.WORLD FUNCTIONS
        //=======================================================================
        getDataFromTextArea=(e)=>{
          this.setState({...this.state, sql:e.target.value})
        }
        setModal=()=>{
          if(this.state.showModal){
            this.setState({...this.state, showModal:false})
          }else{
            this.setState({...this.state, showModal:true})
          }
        }
        getQueryData = async(sql) =>{
          let resp = null          
          resp = await axios({data: {query: sql,},headers:{Authorization:await this.getApiToken()}});
          // this.setState({...this.state, dataQuerySingle:resp.data[0]})
          this.setState(state=> produce(state, draft=>{
            draft.dataQuerySingle = resp.data[0]
            draft.loading = false
        }))
        

      }
        getQueryDataAll = async(sql) =>{
            try{
              let resp = null
            
              resp = await axios({data: {query: sql,},headers:{Authorization: await this.getApiToken()}});
  
              this.setState({...this.state, dataQueryAll:resp.data, loading:false})
            }catch(e){
              alert('SQL is invalid')
            }
            
            // this.state.dataQuerySingle= resp.data[0]
        }
        loader=()=>{          
          this.setState({...this.state, loading:true})
        }
      async componentDidMount(){
          axios.defaults.headers.post['Content-Type'] = 'application/json';
          axios.defaults.baseURL = 'https://api.data.world/v0/sql/eaallen/cleancovid';
          axios.defaults.method= 'post'    
          this.setState({...this.state, key: await this.getApiToken()})
        }
        render(){
          if(!this.state.key){
            return(
                <>
                    Loading...                    
                </>
            ) 
    
          }      

          return(
            <AppContext.Provider value={{...this.state, ...this.actions }}>
              {this.props.children}
            </AppContext.Provider>
          )
        }
        
    }
export default Firebase;