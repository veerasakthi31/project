
      
         function validateForm() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
        
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
        
            // Form is valid
            return true;
          }
          