
      
         function validateForm() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
        
            // Check if email is valid
            const emailCheck = /^veerasakthi7737@gmail\.com$/;
            
            
            if (!emailCheck.test(email)) {
              alert("Please enter a valid email address.");
              return false;
            }
          
            // Check if password is valid
            const passwordCheck = /^sakthi$/;
            if (!passwordCheck.test(password)) {
              alert("your password is incorrect");
              return false;
            }
        
            // Form is valid
            return true;
          }
          