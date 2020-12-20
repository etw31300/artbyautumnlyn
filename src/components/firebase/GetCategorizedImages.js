import firebase from "./Firebase";
import DownloadImage from "./DownloadImage";

export default async function GetImagesByType(type, callback) {
    let promise;
    const docsWithDownload = [];
    if (!type)
        promise = GetAllImages();
    else
        promise = GetImages(type);

    // promise.then((artworkSnap) => {
    //     const docData = artworkSnap.docs.map(doc => doc.data());
    //     docData.forEach(async (doc) => {
    //         const downloadDoc = doc;
    //         downloadDoc.downloadUrl = "";
    //         await DownloadImage(downloadDoc.uri, (err, downloadUrl) => {
    //             if (err)
    //                 console.error(err);
    //             else {
    //                 downloadDoc.downloadUrl = downloadUrl;
    //                 docsWithDownload.push(downloadDoc);
    //             }
    //         })
    //     })
    //     callback(null, docsWithDownload);
    // })
    promise.then((artworkSnap) => {
        callback(null, artworkSnap.docs.map(doc => doc.data()));
    })
        .catch((err) => {
            callback(err);
        })
        // .finally(() => {
        //     callback(null, docsWithDownload);
        // });
}

async function GetAllImages() {
    return await firebase.firestore().collection('artwork').orderBy('type', 'desc').get();
}

async function GetImages(type) {
    return await firebase.firestore().collection('artwork').where('type', '==', type).orderBy('type', 'desc').get();
}

export const ArtworkType =  {
    ALL: null,
    ANIMATION: "animation",
    ILLUSTRATION: "illustration",
    PAPER_ART: "paper_art",
    SKETCHES: "sketches"
};