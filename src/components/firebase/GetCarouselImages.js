import firebase from "./Firebase";

export default async function GetCarouselImages(callback) {
    await firebase.firestore().collection('featured').doc('carousel').get()
        .then((snap) => {
            callback(null, snap.data().images);
        })
        .catch(err => {
            callback(err);
        })
}