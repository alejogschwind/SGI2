const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello _CodeArmy!");
// });

const updateInscription = async (inscription, params) => {
  await admin.firestore().doc(`events/${params.eventId}/inscriptions/${params.inscriptionId}`)
    .update(inscription)
  return await admin.firestore().doc(`events/${params.eventId}`)
    .update({
      stats: {
        inscriptions: admin.firestore.FieldValue.increment(1)
      }
    })
} 

exports.inscriptionCreated = functions.firestore
  .document('events/{eventId}/inscriptions/{inscriptionId}')
  .onCreate((snap, context) => {
    let inscription = snap.data();

    const event = admin.firestore().doc(`events/${context.params.eventId}`).get()
      .then((snap) => {
        return snap.data()
      })
    
    inscription = {
      ...inscription,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      approved: !event.withApproved,
      status: event.withApproved ? 'pending' : 'finished'
    }

    return updateInscription(inscription, context.params)

})

const updateProfilePercentage = async (profileComplete, userId) => {
  return await admin.firestore().doc(`users/${userId}`)
    .set({
      stats: {
        profileComplete: profileComplete
      }
    }, {merge: true})
}

exports.profileUpdated = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const user = change.after.data()
    const profileComplete = (user.contact.percentage + user.institutional.percentage + user.medical.percentage + user.personal.percentage) / 4
    const userId = context.params.userId;
    return updateProfilePercentage(profileComplete, userId)
  })

// Update all the documents
  // const querySnapShot = await admin.firestore().collection('users').get();
    
  //   await querySnapShot.forEach(doc => {
  //     const user = doc.data()
  //     const profileComplete = (user.contact.percentage + user.institutional.percentage + user.medical.percentage + user.personal.percentage) / 4
  //     const userId = doc.id;
  //     updateProfilePercentage(profileComplete, userId)
  //   })
    
  //   return {}