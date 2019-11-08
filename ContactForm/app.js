console.log('js is running..');
// Your web app's Firebase configuration
// here ..........................
// Initialize Firebase
var firebaseConfig = {}
firebase.initializeApp(firebaseConfig);
//reference messages collection .
var messagesRef = firebase.database().ref('messages');
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
// Submit form
function submitForm(e) {
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    // save messages
    saveMessage(name, company, email, phone, message);
    // clear the form after submit
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}
//Save the message to firebase...
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}