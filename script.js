const students = [];

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const grade = parseFloat(document.getElementById("grade").value);

  if (grade < 1 || grade > 7 || !name || !lastName || isNaN(grade)) {
    alert("Error sl ingresar los datos");
    return;
  }

  const student = { name, lastName, grade };
  students.push(student);
  //console.log(students)
  addStudentToTable(student);
  calculateAverage();
  this.reset();
});
const tableBody = document.querySelector("#studentsTable tbody");
function addStudentToTable(student) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade}</td>
    <td>
      <button class="delete-btn">Eliminar</button>
    </td>
    `;

    row.querySelector(".delete-btn").addEventListener("click", function () {
       borrarEstudiante(student,row);
    })
  tableBody.appendChild(row);
}

function borrarEstudiante(student,row){
    const index = students.indexOf(student);
    if (index > -1) {
        students.splice(index, 1);
        row.remove();
        calculateAverage();
    }
}

const promedioDiv = document.getElementById("average");
const calculateAverage = () => {
  const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
  const average = totalGrades / students.length;
  promedioDiv.textContent = `El promedio es: ${average.toFixed(2)}`;
};

/*
function calcularPromedio(){
   let suma = 0;
   for (const student of students){
       suma += student.grade;
   }
   const count = students.length;
   const promedio = suma / count;
   console.log(promedio);
   averageDiv.textContent = "Promedio General del Curso :" +promedio;

}*/
