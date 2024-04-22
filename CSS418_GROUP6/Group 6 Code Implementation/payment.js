let paymentStatus = 'false'
const paymentMessage = document.querySelector('.payment-message')

// const confirmPayment = () => {
//     sessionStorage.setItem('paymentStatus', 'true');

//     paymentMessage.textContent = 'Processing Payment, Please Wait...'
//     paymentMessage.style.color = 'green'
        
//     setTimeout(() => {
//         paymentCompleted();
//         getData(); // Refresh payment status
//     }, 3000);
// }


const payBtn = document.getElementById('payNowBtn')

payBtn.addEventListener('click', function(){
    // if(sessionStorage.getItem('paymentStatus') === 'true') {
    //     paymentMessage.textContent = 'You have already paid. Rich Kid!!'
    //     paymentMessage.style.color = 'green'
    // } else {
    //     confirmPayment()
    // }
// paymentStatus = 'true'


// if(paymentStatus === 'true') {
//     paymentMessage.textContent = 'You have already paid. Rich Kid!!'
//     paymentMessage.style.color = 'green'

//     window.location.href = 'course_reg.html'

    
// } else {
    // paymentMessage.textContent = 'You have already paid. Rich Kid!!'
    // paymentMessage.style.color = 'green'


    const proceed = document.querySelector('.proceed')
    proceed.style.display = 'flex'
    
    const paymentArea = document.querySelector('.payment-area')
    paymentArea.style.display = 'none'

// }
})




// Function to handle payment processing
function paymentCompleted() {
    var level = document.getElementById('level').value;
    var amount;

    // Calculate amount based on the selected level
    switch (level) {
    case '100':
        amount = 71500;
        break;
    case '200':
        amount = 39900;
        break;
    case '300':
        amount = 39900;
        break;
    case '400':
        amount = 39900;
        break;
    case '500':
        amount = 39900;
        break;
    default:
        amount = 0;
    }

    const proceed = document.querySelector('.proceed')
    proceed.style.display = 'flex'
    
    const paymentArea = document.querySelector('.payment-area')
    paymentArea.style.display = 'none'        
}


// Function to calculate and display the amount based on the selected level
function calculateAmount() {
    var level = document.getElementById('level').value;
    var amountInput = document.getElementById('amount');
    var amount;

    // Calculate amount based on the selected level
    switch (level) {
    case '100':
        amount = 71500;
        break;
    case '200':
        amount = 39900;
        break;
    case '300':
        amount = 39900;
        break;
    case '400':
        amount = 39900;
        break;
    case '500':
        amount = 39900;
        break;
    default:
        amount = 0;
    }

    // Display the calculated amount in the input field
    amountInput.value = '₦' + amount.toFixed(2);
}


// Event listener for the level select input
document.getElementById('level').addEventListener('change', function() {
// Show the amount input field when a level is selected
document.getElementById('amountGroup').style.display = 'block';
// Calculate and display the amount
calculateAmount();
// Enable the "Pay Now" button when a level is selected
document.getElementById('payNowBtn').removeAttribute('disabled');
});
calculateAmount();



// Rest of your JavaScript code...

// Function to handle course registration button click
var course = document.getElementById('course')
course.addEventListener('click', function(){
// Check if payment is confirmed
// if (sessionStorage.getItem('paymentStatus') === 'false') {
//     alert('Please make payment before proceeding....')
// } else {
    // Proceed to course registration page with level parameter
    var selectedLevel = document.getElementById('level').value;
    
    sessionStorage.setItem('level', selectedLevel);

    window.location.href = "course_reg.html"
    // }
})

const toDashboard = document.querySelector('.dash-btn')
toDashboard.addEventListener('click', function(){
    window.location.href = 'dashboard.html'
})
