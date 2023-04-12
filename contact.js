function sendEmail()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aditya.bhattacharjee706@gmail.com",
        Password : "869330F392A4A4BEC94984ECE0EE340013A4",
        To : 'aditya.bhattacharjee706@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "Name :" + document.getElementById("name").value + 
        "<br>Email :" + document.getElementById("email").value + 
        "<br>Contact Number:" + document.getElementById("phone") . value + 
        "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert("Message sent")
    );
}
//869330F392A4A4BEC94984ECE0EE340013A4-smtp password