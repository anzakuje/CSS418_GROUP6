  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"
  import { getDatabase, ref, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js"
  

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
  const app = initializeApp(firebaseConfig);
  const db = getDatabase()

  

const registerBtn = document.querySelector('.register-btn')

//REGISTER NEW USER
async function register(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullname = document.getElementById('fullname').value;
    const matric = document.getElementById('matric').value;

    // Check if any input field is empty
    if (!email || !password || !fullname || !matric) {
        alert('Please fill in all the required fields.');
        return;
    }

    const auth = getAuth();
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed up 
        const user = userCredential.user;
        const userId = user.uid; // Obtain the user ID

        sessionStorage.setItem('userId', userId);

        alert('Creating Account...');
        
        addData(userId, email, fullname, matric) // Pass the userId to addData function
    } 
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        if(errorCode === 'auth/missing-password') {
            alert('Please enter your password!');
        } else if(errorCode === 'auth/email-already-in-use') {
            alert('Account already exists. Please Login!');
        } else {
            alert(errorMessage);
        }
    }
}
registerBtn.addEventListener('click', register);



//SAVE NEW USER DETAILS TO DATABASE
function addData(userId, email, fullname, matric) {
    set(ref(db, 'StudentDetails/' + userId), {
        studentName: fullname,
        matric: matric,
        email: email, 
    })
    .then(() => {
        alert('Registration Successful!');
    })
    .then(() => {
        window.location.href = 'dashboard.html'; // Navigate to dashboard page after data is added
    })
    .catch((error) => {
        alert('Unsuccessful');
        console.error(error);
    });
}




  const toLogin = document.querySelector('.to_login')
  toLogin.addEventListener('click', function(){
    window.location.href = 'index.html'
  })


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



