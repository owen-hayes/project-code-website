const { initializeApp } = require('firebase-admin/app');

const { getAuth } = require('firebase-admin/auth');

initializeApp();

const auth = getAuth();

function getUserCustomClaims(uid) {
  auth.getUser(uid).then((userRecord) => {
    return userRecord;
  });
}

console.log(getUserCustomClaims('Ip3pyrTREheENcs9k9xDEe5dEKS2'));

auth.setCustomUserClaims('Ip3pyrTREheENcs9k9xDEe5dEKS2', { admin: true });

// console.log(getUserCustomClaims('j2QWiUyaDFYHD37FUiMGBUrv5Bm1'));
