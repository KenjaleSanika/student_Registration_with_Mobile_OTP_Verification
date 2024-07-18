// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYOcj6ZM95qjS_gGyxvX9BhRk9FlWKOI8",
    authDomain: "second-attempt-83563.firebaseapp.com",
    projectId: "second-attempt-83563",
    storageBucket: "second-attempt-83563.appspot.com",
    messagingSenderId: "1037274668482",
    appId: "1:1037274668482:web:c888c898d4e61dd0ffca5b",
    measurementId: "G-PVBSEBFJLG"
};

firebase.initializeApp(firebaseConfig);
render();

function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

function phoneAuth() {
    var number = document.getElementById('phone').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult) {
        window.confirmationResult = confirmationResult;
        document.querySelector('button[type="submit"]').disabled = true;
    }).catch(function(error) {
        alert(error.message);
    });
}

function codeverify() {
    var code = document.getElementById('otp').value;
    confirmationResult.confirm(code).then(function() {
        document.querySelector('.p-conf').style.display = 'block';
        document.querySelector('.n-conf').style.display = 'none';
        document.querySelector('button[type="submit"]').disabled = false;
    }).catch(function() {
        document.querySelector('.p-conf').style.display = 'none';
        document.querySelector('.n-conf').style.display = 'block';
    });
}
