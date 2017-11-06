
  const config = {
    apiKey: "AIzaSyB4fqM_33tlRM-i68ouSMTPbu_cs-OpnbM",
    authDomain: "comanda-4072e.firebaseapp.com",
    databaseURL: "https://comanda-4072e.firebaseio.com",
    projectId: "comanda-4072e",
    storageBucket: "comanda-4072e.appspot.com",
    messagingSenderId: "15242261041"
  }
 const Rebase = require('re-base')
 const firebase = require('firebase/app')
 require('firebase/database')

 const app = firebase.initializeApp(config)
 const base = Rebase.createClass(app.database())

 export default base