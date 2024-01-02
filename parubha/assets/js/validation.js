$( document ).ready(function() {

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $(document).on("click","#submit",function() {
        
        if ($("#name").val() == "") {
            $("#name").css("background-color","#ffb3b3");
        }
        if ($("#email").val() == "") {
            $("#email").css("background-color","#ffb3b3");
        }
        if ($("#phone").val() == "") {
            $("#phone").css("background-color","#ffb3b3");
        }
        if ($("#message").val() == "") {
            $("#message").css("background-color","#ffb3b3");
        }
        
        if (isEmail($("#email").val()) == false) {
            $("#email").css("background-color","#ffb3b3");
        }
        
        if ($.isNumeric($("#phone").val()) == false) {
            $("#phone").css("background-color","#ffb3b3");
        }
        
        else {
            console.log("Validation Ok");

            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var message = $('#message').val();
            var Body='Name: '+name+'<br>Email: '+email+'<br>Phone No.: '+phone+'<br>Message: '+message;
            
            Email.send({
                SecureToken : "a2a97aea-b709-45a8-9f36-1f39ff351461",
                To : 'pdodia9522@gmail.com',
                From : "hostingwork.space@gmail.com",
                Subject : "New message on contact from "+name,
                Body : Body
            }).then(
                message =>{
                    if(message=='OK'){
                        console.log("Send Mail");
                        responseMessage('Your Messege is Send!', 'success');
                        $(".js-email-form") .trigger("reset");
                    }
                    else{
                        console.log("Not Send Mail");
                        responseMessage('Your Messege is Not Send!', 'fail');
                        $(".js-email-form").trigger("reset");
                    }
                }
            );
        }
        
    });
});