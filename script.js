$(document).ready(function(){
    $("form").submit(function(event) {
      event.preventDefault();

    var gender =document.forms["vform"]["gender"] 
    var fname = document.forms["vform"]["fname"];
    var lname = document.forms["vform"]["lname"];
    var email = document.forms["vform"]["email"];
    var phonenumber = document.forms["vform"]["phonenumber"];
    var errors = document.getElementById('form-message')

    var gender_error =document.getElementById("gender_error");
    var fname_error =document.getElementById("fname_error");
    var lname_error =document.getElementById("lname_error");
    var email_error =document.getElementById("email_error");
    var phonenumber_error =document.getElementById("phonenumber_error");
        // ---- JS validation 

        if (gender.value == "NULL") {
        gender.style.border = "1px solid red";
        gender_error.textContent = "First Name is Required";
        gender.focus();
        return false ;
        }else{
        gender.style.border = "1px solid #5e6e66";
        gender_error.innerHTML = "";
        }

        if (fname.value == "") {
        fname.style.border = "1px solid red";
        fname_error.textContent = "First Name is Required";
        fname.focus();
        return false ;
        }else{
        fname.style.border = "1px solid #5e6e66";
        fname_error.innerHTML = "";
        }

        if (lname.value == "") {
        lname.style.border = "1px solid red";
        lname_error.textContent = "Last Name is Required";
        lname.focus();
        return false;
        }else{
        lname.style.border = "1px solid #5e6e66";
        lname_error.innerHTML = "";
        }

        var x = email.value;
        var atpos=x.indexOf('@');
        var dotpos=x.lastIndexOf('.');

    if (atpos<1 || dotpos<atpos+2 || dotpos+2 >= x.length) {
        email.style.border = "1px solid red";
        email_error.textContent = "Email is Required";
        email.focus();
        return false ;
        }else{
        email.style.border = "1px solid #5e6e66";
        email_error.innerHTML = "";
        }
        
        var stripped = phonenumber.value.replace(/[\(\)\.\-\ ]/g, '');

        if (phonenumber.value == "") {
        phonenumber.style.border = "1px solid red";
        phonenumber_error.textContent = "Phone Number is Required\n";
        phonenumber.focus();
        ;
        }else if (isNaN(parseInt(stripped))) {
        phonenumber.style.border = "1px solid red";
        phonenumber_error.textContent = "\nThe phone number contains illegal characters.\n";
        phonenumber.focus();
        
        } else if (!(stripped.length == 12)){
        phonenumber.style.border = "1px solid red";
        phonenumber_error.textContent = "\nThe phone number is the wrong length. Make sure you included an area code.\n";
        phonenumber.focus();
        return false;
        }
        else{
        phonenumber.style.border = "1px solid #5e6e66";
        phonenumber_error.innerHTML = "";
        }       
      //js validation shutayda gutoryar

    // shutayda men kelle agyrym bashlayar!!!!
    // nadip php text infolary ugratmaly yada ol nadip barlap bilyar?
    //  
        $.ajax({
        type: 'POST',
        url: 'success.php',
        data: new FormData ({
            gender: gender,
            fname: fname,
            lname: lname,
            email: email,
            phonenumber: phonenumber,
        }),
        contentType: "json",
        cache: false,
        processData: false,
        success: function(result) {
            alert(result);
            console.log("dogry" ,result);  
        },
        error: function(err) {
            console.log('YALNYS', );
            alert('yalnysh', err )
        }
         });    
    });
 });