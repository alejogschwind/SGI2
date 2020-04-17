import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config =  {
  apiKey: "AIzaSyCUPIH0VEklGUgmKKuCwJVrVfPWmXfaPs8",
  authDomain: "sgi2-9b666.firebaseapp.com",
  databaseURL: "https://sgi2-9b666.firebaseio.com",
  projectId: "sgi2-9b666",
  storageBucket: "sgi2-9b666.appspot.com",
  messagingSenderId: "441816602410",
  appId: "1:441816602410:web:92cb6f353787068e46f053",
  measurementId: "G-2SWDCNDVB2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        loginWithGoogle: true,
        ...additionalData
      });
    } catch(err) {
      console.log('Error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  const { user } = await auth.signInWithPopup(provider);
  const { displayName, photoURL } = user;
  try {
    await createUserProfileDocument(user,{
      displayName: displayName,
      photoURL: photoURL,
      loginWithGoogle: true,
      profileCompletePercentage: 0,
      personal: {
        percentage: 0,
        name: {
          first: '',
          last: ''
        },
        birth: null,
        gender: null,
        passport: null,
        contry: '',
        state: '',
        city: '',
        phone: null
      },
      medical: {
        percentage: 0,
        healthInsurance: '',
        affiliateNumber: '',
        bloodType: '',
        havePeriodicTreatment: '',
        obsPeriodicTreatment: '',
        haveAllergy: '',
        obsAllergy: '',
        haveSpecialDiet: '',
        obsSpecialDiet: '',
        haveSurgery: '',
        obsSurgery: '',
        takeMedication: '',
        obsMedication: '',
        havePhysicalLimitations: '',
        obsPhysicalLimitations: '',
        obsMedicalData: ''
      },
      institutional: {
        percentage: 0,
        weel: '',
        district: '',
        club: '',
      },
      contact: {
        percentage: 0,
        fullName: '',
        relation: '',
        phone: ''
      }
    })

  } catch(err) {
    console.log('Error trying to create user profile',err)
  }
}
export default firebase;