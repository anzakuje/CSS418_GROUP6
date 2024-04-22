  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"
  


  const firebaseConfig = {
    apiKey: "AIzaSyDu9OnOGfADv2SfxRcyrZDuEK8qx_SduXQ",
    authDomain: "login-7e51f.firebaseapp.com",
    databaseURL: "https://login-7e51f-default-rtdb.firebaseio.com",
    projectId: "login-7e51f",
    storageBucket: "login-7e51f.appspot.com",
    messagingSenderId: "17687546968",
    appId: "1:17687546968:web:1094748905fde0f1d58e2d",
    measurementId: "G-7D1Q1QYJNK"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const loginBtn = document.querySelector('.login-btn')

  //Signup  
  async function login(event) {
    event.preventDefault();
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
        const userId = user.uid; // Obtain the user ID
        sessionStorage.setItem('userId', userId);

        alert('Logging in...');
        window.location.href = 'dashboard.html';
    } 
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/invalid-credential') {
            alert('Incorrect email or password. Please try again.');
        } else if (errorCode === 'auth/missing-password') {
            alert('Please enter your password!');
        } else {
            alert(errorMessage);
        }
    }
}

loginBtn.addEventListener('click', login);


const toRegister = document.querySelector('.to_register');
toRegister.addEventListener('click', function () {
    window.location.href = 'register.html';
});


function forgetPassword(event) {
    event.preventDefault();

    const email = document.getElementById('email').value; // Get the email from the input field

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('A password reset link has been sent to your email');
        })
        .catch((error) => {
            alert(error.code);
        });
}

const forget = document.querySelector('.forgot-btn');
forget.addEventListener('click', forgetPassword);




// Change background dynamically
function changeBackground(imageURL) {
    const container = document.getElementById('container');
    container.style.backgroundImage = `url('${imageURL}')`;
}

// Array of image URLs
const imageUrls = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg'];
let currentIndex = 0;

// Function to rotate background images
function rotateBackground() {
    changeBackground(imageUrls[currentIndex]);
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Initial call to rotate background
rotateBackground();

// Set interval to rotate background every 3 seconds
setInterval(rotateBackground, 3000);



