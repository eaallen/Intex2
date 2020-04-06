import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react' 
import produce from 'immer'

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
   
    class Firebase{
        constructor() {
          
          this.state = {
            auth_user: null,
          }
          
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.firestore()
          this.googleProvider =new app.auth.GoogleAuthProvider();
          // this.ui = new firebaseui.auth.AuthUI(firebase.auth());
          // console.log('GOOGLE PROVIDER',this.googleProvider)
          // console.log('-------UI------',this.ui)
        }

        
        updateUserAuth = (userInfo) =>{
          console.log('WE HAVE THE USER INFO/;;;!', userInfo)
          this.state.auth_user = userInfo
          // this.state.auth_user = userInfo          
          // this.setState({auth_user: userInfo})
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
        checkState = () =>{
          this.auth.onAuthStateChanged(function(user) {
            if (user){
              console.log('user accorfing to firebase',user) 
            }else{
              console.log('according to firebase: no user info')
            }    
          });
          console.log('checked state', this.state )
        }
        logUserOutOfState = () =>{
          this.state.auth_user = null
        }
      }
      // firestore = new Firebase()
      // console.log("_____>>___>>",firestore.googleProvider)
      // const db = config.firestore()
    
    export default Firebase;