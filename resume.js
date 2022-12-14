function resume(){
    let firstname;
    firstname=document.getElementById('firstname').value;
    let middlename;
    middlename=document.getElementById('middlename').value;
    let lastname;
    lastname=document.getElementById('lastname').value;
    document.getElementById('name').innerHTML=firstname+middlename+lastname;
    let email;
    email=document.getElemenyById('mail').value;
    document.getElementById('email').innerHTML=email;
}
