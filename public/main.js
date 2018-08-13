// Initialize Firebase
var config = {
    apiKey: "AIzaSyBTdA_aMSq9Q-fPNfpdOCXm8gUNVYjq3vI",
    authDomain: "learning-6cf7b.firebaseapp.com",
    databaseURL: "https://learning-6cf7b.firebaseio.com",
    projectId: "learning-6cf7b",
    storageBucket: "learning-6cf7b.appspot.com",
    messagingSenderId: "1075740268290"
};
firebase.initializeApp(config);
var studentsRef = firebase.database().ref('students');
firebase.auth().onAuthStateChanged(function(user) {
    window.user = user; // user is undefined if no user signed in
    console.log(user.displayName);
    console.log(user.email);
    console.log(user.photoURL)


});


var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

var dataVaue = document.getElementById('data');

btn.addEventListener('click', myFunction);
btn2.addEventListener('click', getData);
btn3.addEventListener('click', updateData);

function myFunction() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    //send the data into database
    var newStudentRef = studentsRef.push();
    newStudentRef.set({
        name: name,
        age: age
    })
    studentsRef.once("value", function(snap) {
        console.log(snap.val());
        // console.log(snap.val()[0]);
        // console.log(snap.val()[1]);
        // console.log(snap.val()[2]);
        // console.log(snap.val()[3]);
        // var string1;
        // for (var property in snap.val()) {
        //     string1 = string1 + snap.val()[property].name;
        // }
        // console.log(string1);

        snap.forEach(function(childSnap) {
            console.log("name : " + childSnap.val().name + " age : " + childSnap.val().age);
            data.innerHTML += "name : " + childSnap.val().name + " Age :" + childSnap.val().age + "<br>";
        });
    });
}

function getData() {
    studentsRef.once("value", function(snap) {
        console.log(snap.val());
        // console.log(snap.val()[0]);
        // console.log(snap.val()[1]);
        // console.log(snap.val()[2]);
        // console.log(snap.val()[3]);
        // var string1;
        // for (var property in snap.val()) {
        //     string1 = string1 + snap.val()[property].name;
        // }
        // console.log(string1);

        snap.forEach(function(childSnap) {
            console.log("name : " + childSnap.val().name + " age : " + childSnap.val().age);
            data.innerHTML += "name : " + childSnap.val().name + " Age :" + childSnap.val().age + "<br>";
        });
    });
}

function updateData() {

    studentsRef.update({
        name: "Hello",
        age: "world"
    })
}
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
    firebase.auth()

    .signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code)
        console.log(error.message)
    });
}

function googleSignout() {
    firebase.auth().signOut()

    .then(function() {
        console.log('Signout Succesfull')
    }, function(error) {
        console.log('Signout Failed')
    });
}
var provider2 = new firebase.auth.FacebookAuthProvider();

function facebookSignin() {
    firebase.auth().signInWithPopup(provider2)

    .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
        console.log(user.displayName);

    }).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
    });
}

function facebookSignout() {
    firebase.auth().signOut()

    .then(function() {
        console.log('Signout successful!')
    }, function(error) {
        console.log('Signout failed')
    });
}