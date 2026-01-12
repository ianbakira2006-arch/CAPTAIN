
    // Logic for Eligibility Checker
    function checkEligibility() {
        const age = document.getElementById('age').value;
        const height = document.getElementById('height').value;
        const gender = document.getElementById('gender').value;
        const resultDiv = document.getElementById('result');
        
        let message = "";
        let isEligible = true;

        if (age < 18 || age > 26) {
            message += "• Age must be between 18 and 26. <br>";
            isEligible = false;
        }

        if (gender === "male" && height < 160) {
            message += "• Minimum height for men is roughly 160cm (5'3\"). <br>";
            isEligible = false;
        } else if (gender === "female" && height < 152) {
            message += "• Minimum height for women is roughly 152cm (5'0\"). <br>";
            isEligible = false;
        }

        resultDiv.style.display = "block";
        if (isEligible) {
            resultDiv.innerHTML = "✅ You meet the basic physical criteria! Prepare your documents.";
            resultDiv.style.color = "green";
        } else {
            resultDiv.innerHTML = "⚠️ Points to check: <br>" + message;
            resultDiv.style.color = "red";
        }
    }
