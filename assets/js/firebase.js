'use strict';

//grab a form
const form = document.querySelector('#contactForm');

//grab an input
const inputEmail = form.querySelector('#email');
const inputName = form.querySelector('#name');
const inputMessage = form.querySelector('#message');

var responseCaptcha = undefined;

//put your firebase config here
firebase.initializeApp(config);

//create a functions to push
function firebasePush(inputName, inputEmail, inputMessage) {
    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('formsubmit').push().set(
        {
            name: inputName.value,
            mail: inputEmail.value,
            message: inputMessage.value
        }
    );

}

//push on form submit
if (form) {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
        'callback': (response) => {
            responseCaptcha = response;
        },
        'expired-callback': () => {
            // Fail message
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
            $('#success > .alert-danger').append($("<strong>").text("Captcha validation has expired, you need to validate again the captcha!"));
            $('#success > .alert-danger').append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
            responseCaptcha = undefined;
        }
    })
    window.recaptchaVerifier.render();

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        if(responseCaptcha != undefined){
            firebasePush(inputName, inputEmail, inputMessage);
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
            $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
            $('#success > .alert-success').append('</div>');
            //clear all fields
            $('#contactForm').trigger("reset");
        }
        else{
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
            $('#success > .alert-danger').append($("<strong>").text("You need to validate the captcha!"));
            $('#success > .alert-danger').append('</div>');
        }
    })
}

 /*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});