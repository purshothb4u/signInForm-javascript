        let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");

        signinBtn.onclick = function(){
            nameField.style.maxHeight = "0";
            title.innerHTML = "Sign In"
            signupBtn.classList.add("disable");
            signinBtn.classList.remove("disable");
        }

         signupBtn.onclick = function(){
            nameField.style.maxHeight = "60px";
            title.innerHTML = "Sign Up"
            signupBtn.classList.remove("disable");
            signinBtn.classList.add("disable");
        }

        //Form Validation
        const form = document.getElementById('signupForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        form.addEventListener('submit', function(event) {
          let isValid = true;

          // Name validation
          const nameValue = nameInput.value.trim();
          const nameError = document.getElementById("nameError");
          const nameRegex = /^[a-zA-Z\s]*$/; // Regular expression to allow only letters and spaces

          if (nameValue === "") {
            nameError.textContent = "*Name is required";
            isValid = false;
          } else if (nameValue.length < 3) {
            nameError.textContent = "*Name must be at least 3 characters long";
            isValid = false;
          } else if (!nameRegex.test(nameValue)) {
            nameError.textContent = "*Name must contain only letters";
            isValid = false;
          } else {
            nameError.textContent = "";
          }

          // Email validation
          if (emailInput.value.trim() === "") {
            document.getElementById("emailError").textContent =
              "*Email is required";
            isValid = false;
          } else if (!isValidEmail(emailInput.value)) {
            document.getElementById("emailError").textContent =
              "*Invalid email format";
            isValid = false;
          } else {
            document.getElementById("emailError").textContent = "";
          }

          // Password validation
          if (passwordInput.value.trim() === "") {
            document.getElementById("passwordError").textContent =
              "*Password is required";
            isValid = false;
          } else if (passwordInput.value.length < 8) {
            document.getElementById("passwordError").textContent =
              "*Password must be at least 8 characters long";
            isValid = false;
          } else {
            document.getElementById("passwordError").textContent = "";
          }

          // Prevent form submission if there are errors
          if (!isValid) {
            event.preventDefault();
          }
           else{
            alert("Validation Successfull.....!")
           }
        });

        // Email validation function
        function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
          return emailRegex.test(email);
        }


    