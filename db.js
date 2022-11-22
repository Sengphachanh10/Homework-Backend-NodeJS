const admin = require("firebase-admin")
const config = require("./config")
const serviceAccount = require("./backend-intern-7d21f-firebase-adminsdk-utma5-cc119e6a2b.json")
const { credential } = require("firebase-admin")
const firebaseConfig = config.firebaseConfig

const database = admin.initializeApp({
    firebaseConfig,
    credential: admin.credential.cert(serviceAccount)
    
})

module.exports = {
    database
}