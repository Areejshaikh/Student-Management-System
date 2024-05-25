import inquirer from "inquirer";
console.log("*".repeat(50));
console.log("Student Management System");
let myId = Math.floor(10000 + Math.random() * 9000);
let myBalance = 0;
// Student Name input 
while (true) {
    let studentAnswer = await inquirer.prompt([
        {
            name: "nameInput",
            message: "Enter Student Name Here?",
            type: "input",
            // Declear function for validation
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return " Please Enter Valid Name";
            },
        },
    ]);
    // console student name and id
    console.log(`Student Name: ${studentAnswer.nameInput} | Student ID: ${myId}`);
    // Collect course input in Users
    let coursesData = await inquirer.prompt([
        {
            name: "courseInput",
            message: "Select to Enroled Corses",
            type: "list",
            choices: ["C++", "Javascript", "Python", "Typescript"],
        },
    ]);
    console.log(`Selected Course: ${coursesData.courseInput} | Student ID: ${myId}`);
    // // Define Course Tuition fee
    const tuitionFee = {
        "C++": 2000,
        "Javascript": 2500,
        "Python": 5500,
        "Typescript": 3500,
    };
    console.log(`Tuition Fee Paid:$${tuitionFee[coursesData.courseInput]}`);
    console.log(`Balance is $${myBalance}`);
    // // Define Payment Input
    let studentPayment = await inquirer.prompt([
        {
            name: "paymentInput",
            message: "Enter Tuition Fee Here!",
            type: "input",
            // Declear function for validation
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
                return " Please Enter Valid Amount";
            },
        },
    ]);
    const tuitionFees = tuitionFee[studentAnswer.courseInput];
    const studentPay = parseFloat(studentPayment.paymentInput);
    if (tuitionFees === studentPay) {
        console.log(`Congratualation, SuccessFully enrolle in ${studentAnswer.courseInput}}`);
    }
    const statusCheck = await inquirer.prompt([
        {
            name: "statusInput",
            message: "Do you want to Check Status?",
            type: "input",
            default: "yes"
        },
    ]);
    console.log(`Student Stutus ${statusCheck.statusInput}`);
    console.log(`Student Name: ${studentAnswer.nameInput}`);
    console.log(`Student ID: ${myId}`);
    console.log(`Student Balance: $${(myBalance += studentPay)}`);
    console.log(`Enrolled Course: ${coursesData.courseInput}`);
    console.log(`Course Fee: $${studentPay}`);
    const exitProgram = await inquirer.prompt([
        {
            name: "exitInput",
            message: "Do you want to Exit?",
            type: "input",
        },
    ]);
    console.log("*".repeat(50));
    console.log(`Good Bye ${exitProgram.exitInput}`);
    console.log("Exiting Student Management System");
    break;
}
