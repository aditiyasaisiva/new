// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyBYZNtJHqr7KRsoha6p_Va4pfaSrkOK-jo",
    authDomain: "fir-ver2021.firebaseapp.com",
    projectId: "fir-ver2021",
    storageBucket: "fir-ver2021.appspot.com",
    messagingSenderId: "870874950498",
    appId: "1:870874950498:web:ae5a4f7ddaf6c38d57da3b",
    measurementId: "G-W2RQDF9G3V"
};

//Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
}
function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed In  :" + email);
}

function signOut(){
    auth.signOut;
    alert("Sign Out")
}


auth.onAuthStateChanged(function(user){
    if (user) {
        var email = user.email;
        alert("Active user is :" + email);
    } else {
        alert("No active user")
    }
})
