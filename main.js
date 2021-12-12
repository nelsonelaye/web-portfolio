//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

//import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDugma6wvlWsqimbtomrJAs3-qL5wViw6A",
    authDomain: "portfolio-website-contac-a98ec.firebaseapp.com",
    databaseURL: "https://portfolio-website-contac-a98ec-default-rtdb.firebaseio.com",
    projectId: "portfolio-website-contac-a98ec",
    storageBucket: "portfolio-website-contac-a98ec.appspot.com",
    messagingSenderId: "506404393694",
    appId: "1:506404393694:web:eb2379e26e5ebc656f684f",
    measurementId: "G-Y7NJL4F9JW"
  };
  
  // Initialize Firebase
  
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
//const database = getDatabase(app);

//Create Firebase Reference for form collection(3)
 var database = firebase.database().ref('Contact');

//let formMessage = firebase.database().ref('contact');

// Listen for event - submit action
document.getElementById('contactform').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();
  
    // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let message = document.querySelector('#message').value;

  //calling the sendMessagefuction to save to Firebase
  sendMessage(name, email, phone, message);
  
  //display alert Box
  document.querySelector('.thankyou').style.display = "block";
  
  //Remove alert box after 5 seconds
  setTimeout(function() {
    document.querySelector('.thankyou').style.display = 'none';
  }, 5000);
  
document.querySelector('#contactform').reset();

}

//Send Message to Firebase(4)

function sendMessage(name, email, phone, message) {
  let newFormMessage = database.push();
  newFormMessage.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}

