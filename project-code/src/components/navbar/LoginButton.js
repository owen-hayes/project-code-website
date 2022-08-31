import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@mui/material';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  setPersistence,
  // browserSessionPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { UserContext } from '../context/user-context';

const firebaseConfig = {
  apiKey: 'AIzaSyD3mE1fklTL_1Fwu0QWDcSHyKLGHgLVwGw',
  authDomain: 'project-code-uiuc.firebaseapp.com',
  // authDomain: 'owenhay.es',
  projectId: 'project-code-uiuc',
  storageBucket: 'project-code-uiuc.appspot.com',
  messagingSenderId: '52610850303',
  appId: '1:52610850303:web:a2cf0e268ec21d83931bca'
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

// const provider = new GoogleAuthProvider();

function LoginButton(props) {
  const userContext = useContext(UserContext);
  // const [errorThing, setErrorThing] = useState();

  return (
    <>
      <Button
        variant='contained'
        onClick={() => {
          if (userContext.user) {
            signOut(auth).then((result) => {
              console.log(result);
              userContext.setUser(undefined);
              props.handleSnackbarOpen();
            });
            return;
          }
          setPersistence(getAuth(), browserLocalPersistence).then(() => {
            const provider = new GoogleAuthProvider();
            // In memory persistence will be applied to the signed in Google user
            // even though the persistence was set to 'none' and a page redirect
            // occurred.
            return signInWithPopup(getAuth(), provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const signedInUser = result.user;
                // ...
                console.log(credential);
                console.log(token);
                console.log(signedInUser);

                console.log(result);
                props.handleSnackbarOpen();
                userContext.setUser(signedInUser);
                // getAuth()
                //   .currentUser.getIdTokenResult()
                //   .then((idTokenResult) => {
                //     // Confirm the user is an Admin.
                //     if (idTokenResult.claims.admin) {
                //       // Show admin UI.
                //       // showAdminUI();
                //       console.log('admin');
                //       props.setUserRole('admin');
                //     } else {
                //       // Show regular user UI.
                //       // showRegularUI();
                //       console.log('not admin');
                //     }
                //   })
                //   .catch((error) => {
                //     console.log(error);
                //   });

                // // console.log(auth.currentUser.getIdToken(true));
              })
              .catch((error) => {
                // setErrorThing(error.code);
                // // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The AuthCredential type that was used.
                // const credential =
                //   GoogleAuthProvider.credentialFromError(error);
                // // ...
                console.log(error);
              });
          });
        }}
      >
        {/* {getAuth().currentUser ? 'Logout' : 'Login'} */}
        {props.user ? 'Logout' : 'Login'}
      </Button>
      {/* {errorThing} */}
    </>
  );
}

LoginButton.propTypes = {
  user: PropTypes.object,
  handleSnackbarOpen: PropTypes.func,
  setUserRole: PropTypes.func
};

export default LoginButton;
