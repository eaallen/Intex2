import React from 'react';
import {AppContext} from './Firebase'
// const FirebaseContext = React.createContext(null);

// export  const withFirebase = Component => props => (
//     <FirebaseContext.Consumer>
//       {firebase => <Component {...props} firebase={firebase} />}
//     </FirebaseContext.Consumer>
//   );



// export default FirebaseContext;


export default function withFirebase(Component) {
	return function contextComponent(props) {
		return (
			<AppContext.Consumer>
				{(context) => <Component {...props} context={context} />}
			</AppContext.Consumer>
		)
	}
}