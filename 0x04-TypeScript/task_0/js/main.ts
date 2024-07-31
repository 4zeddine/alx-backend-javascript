interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const alex: Student = {
  firstName: "Alex",
  lastName: "Hayes",
  age: 21,
  location: "LA,US",
};
const sarah: Student = {
  firstName: "Sarah",
  lastName: "smith",
  age: 23,
  location: "NewYork,US",
};
const studentsList: Array<Student> = [alex, sarah];

// Function to render the table
function renderTable() {
  const tableBody = document.getElementById("studentTableBody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    row.appendChild(nameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderTable);
