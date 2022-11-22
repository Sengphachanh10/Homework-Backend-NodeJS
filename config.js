require("dotenv").config()

const {
    PORT,
    URL,
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGDENDERID,
    APPID
} = process.env

module.exports = {
    port: PORT,
    url: URL,
    firebaseConfig :{
        apiKey: APIKEY,
        authDomain: AUTHDOMAIN,
        projectId: PROJECTID,
        storageBucket: STORAGEBUCKET,
        messagingSenderId: MESSAGINGDENDERID,
        appId: APPID
    }
}