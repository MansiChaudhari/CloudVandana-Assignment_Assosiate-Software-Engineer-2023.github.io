document.getElementById("submitBtn").addEventListener("click", function () {
    // Validate the form
    if (validateForm()) {
        // Display the entered values in a popup
        var popupMessage = "First Name: " + document.getElementById("firstName").value + "\n" +
                           "Last Name: " + document.getElementById("lastName").value + "\n" +
                           "Date of Birth: " + document.getElementById("dob").value + "\n" +
                           "Country: " + document.getElementById("country").value + "\n" +
                           "Gender: " + document.querySelector('input[name="gender"]:checked').value + "\n" +
                           "Profession: " + document.getElementById("profession").value + "\n" +
                           "Email: " + document.getElementById("email").value + "\n" +
                           "Mobile: " + document.getElementById("mobile").value;
        alert(popupMessage);

        // Reset the form
        document.getElementById("surveyForm").reset();
    }
});

function validateForm() {
    // Basic validation (you can add more complex validation)
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || country === "" || !gender || !profession || !email || !mobile) {
        alert("All fields are required. Please fill in all fields.");
        return false;
    }

    return true;
}