
//Reference for form collection(3)
let formMessage = firebase.database().ref('register');


document.querySelector("#contactform").addEventListener('submit', formSubmit);

//Submit form

function formSubmit(e) {
  e.preventDefault();
  
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let message = document.querySelector('#message').value;

    
    setTimeout(function() {
    document.querySelector('.thankyou').style.display = 'none';
  }, 7000);
  
  //Form Reset After Submission
  //document.getElementById('contactform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, phone, message) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}



//console.log(formSubmit());

// Popup Triger

  //Display alert box
    let alert = document.querySelector('.thankyou');
    
    document.querySelector('#submit').addEventListener('click', displayAlertBox);
    
    function displayAlertBox() {
    alert.style.display = "block";
      
    }
    