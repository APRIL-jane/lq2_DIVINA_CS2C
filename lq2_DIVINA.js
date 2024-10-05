// Collecting user input
let name = prompt ("Enter your name:");
let address = prompt ("Enter your address:");
let age = parseInt (prompt("Enter your age:")); //Converting age to an integer
let classRole = prompt ("Enter your Class Role (Officer, Student, Teacher:");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

// Conditional statements to detect course
if (course === "Officer") {
    // Conditional for BSCS course based on classRole
    if (classRole === "Officer") {
        alert("Welcome, Officer of BSCS");
} else if (classRole === "Student") {
    alert("Welcome, Student of BSCS");
} else if (classRole === "Teacher") {
    alert("Welcome, Teacher of BSCS");
} else {
    alert("Unknown Role for BSCS");
}
    } else if (course === "BSM") {
        // Conditional for BSM course based on classRole
        if (classRole === "Officer") {
            alert("Welcome, Officer of BSM");
        } else if (classRole === "Student") {
            alert("Welcome, Student of BSM");
        } else if (classRole === "Teacher") {
            alert("Welcome, Teacher of BSM");
        } else {
            alert("Unknown Role for BSM");
        }
    } else if (course === "BAEL") {
        // Conditional for BAEL course based on classRole
        if (classRole === "Officer") {
            alert("Welcome, Officer of BAEL");
        } else if (classRole === "Student") {
            alert ("Welcome, Student of BAEL");
        } else if (classRole === "Teacher") {
            alert ("Welcome, Teacher of BAEL");
        } else {
            alert("Unknown Role for BAEL");
        }
    } else {   
            // Fallback code for unknown course
            alert("Course not recognized.");
        }

        // Loop statement to print the user's name (1/4 of the age)
        let iterations = Math.floor(age / 4); // Calculating 1/4 of the age
        for (let i = 0; i < iterations; i++) {
            console.log(name); //Printing the user's name

        }
    
