// font-family: 'IBM Plex Mono', monospace; 400 600
// font-family: 'Poppins', sans-serif; 300 400 500 
// font-family: 'Roboto', sans-serif; 300 400 500

const senderName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit_btn');

const alertModal = document.getElementById('alert_modal');
const alertTitle = document.getElementById('alert_title');
const alertBody = document.getElementById('alert_body');
const alertCloseBtn = document.getElementById('alert_close');
const alertBox = document.getElementById('alert_box');




submitBtn.addEventListener('click', (e) => {
   e.preventDefault();
   // alertModal.style.display = 'block';
   const body = `Name: ${senderName.value} 
    Email: ${email.value}
    Message: ${message.value} `;

   Email.send({
      SecureToken: "9c6b9d25-d4b5-4a3c-8b17-3c45d6e014a3",
      To: 'arslankhan863345@gmail.com',
      From: "arslankhan863345@gmail.com",
      Subject: "Email From Website",
      Body: body
   }).then(
      res => {
         alertTitle.innerText = 'Thank you for reaching me out'
         alertBody.innerText = "I'll get back to you shortly."
         alertBox.style.display = 'block';
         // alert(message);
         
         senderName.value = '';
         email.value = '';
         message.value = '';
      }

   ).catch(er =>{
      alertTitle.innerText = 'Something went wrong'
         alertBody.innerText = "Try again later.."
         alertBox.style.display = 'block';
   });
})


alertCloseBtn.addEventListener('click', (e)=>{
   e.target.parentNode.style.display = 'none'
})


