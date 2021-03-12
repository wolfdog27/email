
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// function validate() {
//     const $result = $("#result");
//     const email = $("#reply_to").val();
//     $result.text("");

//     if (validateEmail(email)) {
//         $result.text(email + " is valid :)");
//         $result.css("color", "green");
//     } else {
//         $result.text(email + " is not valid :(");
//         $result.css("color", "red");
//     }
//     return false;
// }

// $("#validate").on("click", validate);



// This is for EmailJS
const btn = document.getElementById('button');
const email = document.getElementById('reply_to')
const emailE = document.getElementById('emailError')

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        emailE.textContent = ""

        const validEmail = validateEmail(email.value)
        if (!validEmail) {
            emailE.textContent = "Please enter a valid e-mail"
            return
        }
        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'contact_form';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                $('#success_message').show();
                window.setTimeout(function () { location.reload() }, 3000)
            }, (err) => {
                btn.value = 'Send Email';
                $('#error_message').show();
                window.setTimeout(function () { location.reload() }, 3000)
            });
    });

