const form = document.getElementById("form");
const studentsList = document.querySelector(".students");
const nameInput = form["name"];
const ageInput = form["age"];
const rollInput = form["roll"];

// Array
const students = JSON.parse(localStorage.getItem("students")) || [];

// Add student Function
const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });

  localStorage.setItem("students", JSON.stringify(students));
  return { name, age, roll };
};
// addStudent(`Kashif Shaikh`, 22, 49); // Dummy Data

// Create Student Element
const createStudentElement = ({ name, age, roll }) => {
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h1");
  const studentAge = document.createElement("h3");
  const studentRoll = document.createElement("h3");
  const studentHr = document.createElement("Hr");

  studentName.innerText = `Student Name : ${name}`;
  studentAge.innerText = `Student Age : ${age}`;
  studentRoll.innerText = `Student Roll No. : ${roll}`;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentsList.append(studentDiv, studentHr);

  studentsList.style.display = students.length === 0 ? "none" : "flex";
};

studentsList.style.display = students.length === 0 ? "none" : "flex";

// for each loop for every student
students.forEach(createStudentElement);

// On Submit
form.onsubmit = (e) => {
  e.preventDefault();

  const createNewStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );
  createStudentElement(createNewStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};
console.log(`Total no. of students registered is ${students.length}`);

// Failed
// const students = [
//   {
//     name: `Kashif`,
//     age: 22,
//     roll: 49,
//   },
//   {
//     name: `Mezab`,
//     age: 21,
//     roll: 36,
//   },
// ];

// const addStudents = (name, age, roll) => {};

// const createStudentElement = ({ name, age, roll }) => {
//   let studentContainer = document.createElement("div");
//   let studentName = document.createElement("h1");
//   let studentAge = document.createElement("h3");
//   let studentRoll = document.createElement("h3");
//   let hr = document.createElement("hr");

//   studentName.innerText = `Student Name : ${name}`;
//   studentAge.innerText = `Student Age : ${age}`;
//   studentRoll.innerText = `Student Roll No : ${roll}`;
//   studentContainer.append(studentName, studentAge, studentRoll, hr);

//   studentsList.appendChild(studentContainer);
// };
// students.forEach(createStudentElement);

// form.onsubmit = (e) => {
//   e.preventDefault();

//   nameInput.value = "";
//   ageInput.value = "";
//   rollInput.value = "";
// };
