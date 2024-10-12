function validateForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (fname.trim() === "") {
        alert("First Name must be filled out");
        return false;
    }

    if (lname.trim() === "") {
        alert("Last Name must be filled out");
        return false;
    }

    if (email.trim() === "") {
        alert("Email must be filled out");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Invalid Email format");
        return false;
    }

    if (phone.trim() === "") {
        alert("Phone number must be filled out");
        return false;
    } else if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    alert("Form submitted successfully!");

    return true; 
}
