// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
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

const date = new Date()
const time = document.querySelector('.time')
time.textContent = date

const displayName = document.querySelector('.display-name');
const displayMatric = document.querySelector('.matric-number');
const email = document.querySelector('.display-email');
const paymentStatus = document.querySelector('.payment-status');

sessionStorage.setItem('paymentStatus', 'false');

function getData() {
    const dbRef = ref(db)

    get(child(dbRef, 'StudentDetails/' + sessionStorage.getItem('userId'))).then((snapshot) => {
        if(snapshot.exists()){
            displayName.textContent = `Name: ${snapshot.val().studentName}` 
            displayMatric.textContent = `Matric Number: ${(snapshot.val().matric).toUpperCase()}`
            email.textContent = `Student Email: ${(snapshot.val().email).toLowerCase()}`
            
        }
        else {
            alert('Student does not exist!')
        }
    })
    .catch((error) => {
        alert('Unsuccessful Request!');
        console.error(error);
    });

}
getData()


    // if(sessionStorage.getItem('paymentStatus') === 'false') {
    //     paymentStatus.textContent = 'Payment Status: NOT PAID'
    //     paymentStatus.style.color = 'red'
    // } else {
    //     paymentStatus.textContent = 'Payment Status: PAID'
    //     paymentStatus.style.color = 'green'
    // }



const toPayment = document.querySelector('.to-payment')
    toPayment.addEventListener('click', function() {
        window.location.href = "payment.html"
    })


// const toCourseReg = document.querySelector('.to-course')

// if (paymentStatus.textContent === 'Payment Status: PAID') {
//     toCourseReg.addEventListener('click', function() {
//         window.location.href = "course_reg.html";
//     });
// } else {
//     toCourseReg.addEventListener('click', function() {
//         alert('Please pay your registration fee first!');
//     });
// }

   
