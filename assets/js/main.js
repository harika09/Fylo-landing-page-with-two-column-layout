function validate(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   

    if(email.match(pattern)){

        form.classList.add("valid");
        form.classList.remove("invalid");
        
    }

    else{

        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = ("Please Check your email");
        text.style.color = "red";
        document.getElementById("email").style.borderColor = "red";

    }
}

function validates(){
    var form = document.getElementById("emailform");
    var email = document.getElementById("validateEmail").value;
    var text = document.getElementById("errorText");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   

    if(email.match(pattern)){

        form.classList.add("valid");
        form.classList.remove("invalid");
        
    }

    else{

        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = ("Please Check your email");
        text.style.color = "red";
        document.getElementById("validateEmail").style.borderColor = "red";

    }
}

/* Prevent the button going to top */
document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
}); 