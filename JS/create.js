
      
         function validateForm() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const retypepassword=document.getElementById("retype password").value;
            const firstname=document.getElementById("firstname").value;
            const lastname=document.getElementById("lastname").value;
            const gender = document.getElementsByName("gender");
  let isChecked = false;
            const country=document.getElementById("country").value;
            const terms=document.getElementById("terms").checked;
            // Check if email is valid
            const emailCheck =  /^[a-zA-Z0-9\._]+@[a-zA-Z0-9]+.([a-z]+)*$/;
            if (!emailCheck.test(email)) {
              alert("Please enter a valid email address.");
              return false;
            }
        
            // Check if password is valid
            const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
            if (!passwordCheck.test(password)) {
              alert("Please enter a valid password. Password must have at least 8 characters including at least one uppercase letter, one lowercase letter, and one digit.");
              return false;
            }
        
           if(password!==retypepassword){
           alert("please make sure your passwords  match");
           return false;
           }
           if(!firstname.trim()||!lastname.trim()){
            alert("please enter your full name");
           return false;
           }
          //check if gender is selected
           for (let i = 0; i < gender.length; i++) {
             if (gender[i].checked) {
               isChecked = true;
               break;
             }
           }
         
      
           if (!isChecked) {
             alert("Please select your gender.");
             return false;
           }
if(country==="select"){
    alert("Please select a country");
             return false;
           }

           if(!terms){
            alert("Please accept to terms and conditions");
             return false;
           }
            // Form is valid
            return true;
}
          