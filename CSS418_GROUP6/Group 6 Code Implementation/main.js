const loginBtn = document.querySelector('.login-btn')


loginBtn.addEventListener('click', function(e){
    e.preventDefault()
    
    const name = document.querySelector('.name').value
    const password = document.querySelector('.password').value

    if(name === '' || password === ''){
        alert('Please complete your details')
    } 
    else {
        if(!password.toUpperCase().endsWith('CS')){
            alert('Incorrect password!')
        } 
        else {
            if(password.length < 14){
                alert('Does not meet minimum password requirement!')
            } 
            else {

                sessionStorage.setItem('name', name);
                sessionStorage.setItem('matric', password);


                // Redirect to dashboard page with name and password included in the URL
                window.location.href = "dashboard.html";

            }
        }
    }
})

const forgotPassword = document.querySelector('.forgot-btn')
    forgotPassword.addEventListener('click', function(){
        alert('Hint: your matric number is your password. As a cybersecurity student, ensure it ends with CS\n\n e.g; 2019/1/75540CS')
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

