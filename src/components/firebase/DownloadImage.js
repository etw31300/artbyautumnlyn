import firebase from "./Firebase";

export default async function DownloadImage(imageUrl, callback) {
    await firebase.storage().refFromURL(imageUrl).getDownloadURL()
        .then((downloadUrl) => {
            callback(null, downloadUrl);
        })
        .catch((err) => {
            callback(err);
        })
}