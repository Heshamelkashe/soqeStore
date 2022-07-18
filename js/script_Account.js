


window.onload = function () {
    setTimeout(() => {
        document.querySelector('.loading_page').style.display = "none";
    },2000)
    document.querySelector('#email_sign').focus()
}


// chang from signIn of create account 
const sign_in = document.querySelector('.Account .sign_in')
const create_Account = document.querySelector('.Account .create_account')

function open_signIn_account() {
    document.querySelector('.loading_page').style.display="flex";
    create_Account.style.display = "none";
    sign_in.style.display = "block";
    document.querySelector('#email_sign').focus()
    setTimeout(()=> {
        document.querySelector('.loading_page').style.display="none"
    },3000)
}

function open_create_account() {
    document.querySelector('.loading_page').style.display="flex"
    sign_in.style.display = "none";
    create_Account.style.display = "block";
    document.querySelector('.massage_successfully').style.display = "none"; 
    document.querySelector('.Error_Massage').style.display = "none";
    document.querySelector('#create_userName').focus()
    setTimeout(()=> {
        document.querySelector('.loading_page').style.display="none"
    },3000)
}



const test_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// the test from Email signIn and password
document.querySelector('#submit_sign').addEventListener("click", function () {

    const Email_sign = document.querySelector('#email_sign').value
    const password_sign = document.querySelector('#UserPassword').value

    //  check from Email
    if (Email_sign.match(test_pattern))
    {
        document.querySelector('#email_sign').style.border = "2px solid green"
    } else {
        document.querySelector('#email_sign').style.border = "2px solid red";
    }

    //  check from password user
    if( password_sign != '' &&
        password_sign.length >= 6 &&
        password_sign.length < 16 )
    {
        document.querySelector('#UserPassword').style.border = "2px solid green";
    } else {
        document.querySelector('#UserPassword').style.border = "2px solid red";
    }

    // check they are email and password 
    if (Email_sign.match(test_pattern) &&
            password_sign != '' &&
            password_sign.length >= 6 &&
            password_sign.length < 16
        )
    {
        document.querySelector('.massage_successfully').style.display = "flex"; 
        document.querySelector('.Error_Massage').style.display = "none";
        setTimeout(() => {
            location.href="../index.html"
        },1500)
    } else {
        document.querySelector('.Error_Massage').style.display = "block"; 
        document.querySelector('.Error_Massage p').textContent =
            "We can`t find an Account with those Email Addresses or password"
        document.querySelector('.massage_successfully').style.display = "none"; 
    }

})
;



//  The test from  create Account
document.querySelector('#submit_create_account').addEventListener("click", function () {

    const userName = document.querySelector('#create_userName').value;
    const Create_Email = document.querySelector('#create_email').value;
    const create_password = document.querySelector('#create_password').value;
    const Rn_password = document.querySelector('#Rn_password').value;

    // Check Create User Name
    if (userName != "")
    {
        document.querySelector('#create_userName').style.border = "2px solid green";
        document.querySelector('.good_userName').style.display = "block";
        document.querySelector('.bad_userName').style.display = "none";
        document.querySelector('.span_user').textContent ="";
    } else {
        document.querySelector('#create_userName').style.border = "2px solid red";
        document.querySelector('.good_userName').style.display = "none";
        document.querySelector('.bad_userName').style.display = "block";
        document.querySelector('.span_user').textContent =
            "Enter Your Name";
    };

    // Check Create Email Address
    if (Create_Email.match(test_pattern))
    {
        document.querySelector('#create_email').style.border = "2px solid green";
        document.querySelector('.good_EmailAddress').style.display = "block";
        document.querySelector('.bad_EmailAddress').style.display = "none";
        document.querySelector('.span_email').textContent = "";
    } else {
        document.querySelector('#create_email').style.border = "2px solid red";
        document.querySelector('.good_EmailAddress').style.display = "none";
        document.querySelector('.bad_EmailAddress').style.display = "block";
        document.querySelector('.span_email').textContent =
            "Wrong or invalid Email Address please correct and try again";
    };

    // Check Create Password
    if (create_password != "" && create_password.length >= 6)
    {
        document.querySelector('#create_password').style.border = "2px solid green";
        document.querySelector('.good_password').style.display = "block";
        document.querySelector('.bad_password').style.display = "none";
        document.querySelector('.span_password').textContent = "";
        
    } else {
        document.querySelector('#create_password').style.border = "2px solid red";
        document.querySelector('.good_password').style.display = "none";
        document.querySelector('.bad_password').style.display = "block";
        document.querySelector('.span_password').textContent =
            " Minimum characters 6 Required";
    };

    // Check Create Rn Password
    if (Rn_password != "" && Rn_password === create_password)
    {
        document.querySelector('#Rn_password').style.border = "2px solid green";
        document.querySelector('.good_RnPassword').style.display = "block";
        document.querySelector('.bad_RnPassword').style.display = "none";
        document.querySelector('.span_RnPassword').textContent = "";
        
    } else {
        document.querySelector('#Rn_password').style.border = "2px solid red";
        document.querySelector('.good_RnPassword').style.display = "none";
        document.querySelector('.bad_RnPassword').style.display = "block";
        document.querySelector('.span_RnPassword').textContent =
            " Wrong the Rn password with creating a password ";
    };

    // check All true 
    if (userName != "" &&
        Create_Email.match(test_pattern) &&
        create_password != "" && create_password.length >= 6 &&
        Rn_password != "" && Rn_password === create_password )
    {
        document.querySelector('.massage_successfully').style.display = "flex"; 
        setTimeout(() => {
            location.href = "../index.html";
        },1500)
    }
})



