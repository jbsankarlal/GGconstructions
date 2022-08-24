var nameError=document.getElementById('vname');
var mailError=document.getElementById('vmail');
var messageError=document.getElementById('vmessage');


function ValidateName(){
    var name = document.getElementById('ckname').value;

    if(name.length == 0){

        nameError.innerHTML = 'Name is required';
        return false;

    }

    if(!name.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){

        nameError.innerHTML = 'Invalid name';
        return false;
    }
    else{
    nameError.innerHTML = '' ;
    return true ;
    }
}

function ValidateEmail(){

    var email = document.getElementById('ckmail').value;

    if(email.length == 0){
        mailError.innerHTML = 'E-mail is required'
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){

        mailError.innerHTML = 'Invalid e-mail'
        return false;

    }

    mailError.innerHTML = '';
    return true;
}

function ValidateMessage(){

    var message = document.getElementById('ckmessage').value;

        if(message.length==0){
        messageError.innerHTML='Some message is required'
        return false;
    }

    messageError.innerHTML = '';
    return true

}