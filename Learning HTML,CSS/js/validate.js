function validateForm(){

    let firstName = document.forms['signForm']['fname'].value;
    let lastName = document.forms['signForm']['lname'].value;
    let mobNo = document.forms['signForm']['mob'].value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.forms['signForm']['mail'].value;
    let gen = document.forms['signForm']['gender'].value;
    let userNameFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userName = document.forms['signForm']['uname'].value;
    passPattern = /^[A-Za-z]\w{7,14}$/;
    passWord = document.forms['signForm']['pass'].value;
    let conPass = document.forms['signForm']['conPass'];

    if(firstName == ""){
        window.alert('First Name must be filled out');
        return false;
    }
    if(lastName == ""){
        window.alert('Last Name must be filled out');
        return false;
    }
    // validating mobile number
    if(mobNo.length != 10){
        window.alert('Mobile no. must be of 10 digits');
        return false;
    }
    // validating email
    if(email == ""){
        window.alert('Email must be filled out');
        return false;
    }
    if(mailFormat.test(email)){
        return true;
    }
    if(!mailFormat.test(email)){
        window.alert('Invalid email format');
        return false;
    }
    // checking for gender
    if(gen == ""){
        window.alert('please select your gender');
        return false;
    }
    // chekcing for username
    if(userName == ""){
        window.alert('username must be filled out');
        return false;
    }
    if(userNameFormat.test(userName)){
        return true;
    }
    if(!userNameFormat.test(userName)){
        window.alert('Invalid username');
        return false;
    }
    // password validation
    if(passWord == ""){
        window.alert('password must be filled out');
    }
    if(passWord.match(passPattern)){
        return true;
    }
    if(!passWord.match(passPattern)){
        window.alert('a password between 7 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter.');
        return false;
    }
    // confirm password 
    if(conPass == ""){
        window.alert('this field must be filled out')
        return false;
    }
    if(password ==  conPass){
        return true
    }
    else{
        window.alert("password doesn't match");
        return false;
    }
}