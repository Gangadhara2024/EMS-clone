const tbody = document.querySelector("tbody");
const form = document.querySelector(".form");

function deleteRecord(event) {
  const reference = event.target;
  const row = reference.parentNode.parentNode;
  row.remove();
}

function addEmployee(employee) {
  const tr = document.createElement("tr");

  for (let i in employee) {
    const td = document.createElement("td");
    td.innerText = employee[i];
    tr.appendChild(td);
  }
  const option = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";

  const editButton = document.createElement("button");
  editButton.innerText = "edit";

  deleteButton.addEventListener("click", deleteRecord);
  editButton.addEventListener("click", editRecord);

  option.appendChild(deleteButton);
  option.appendChild(editButton);
  
  tr.appendChild(option);

  tbody.appendChild(tr);
}

function onsubmit(event) {
    event.preventDefault();
    let employeeForm = {
      name : form.name.value,
      companyname : form.companyname.value,
      salary : form.salary.value,
      gender : form.gender.value,
      role : form.role.value,
      email : form.email.value
    }
    addEmployee(employeeForm);
    // form.reset();
}

form.addEventListener("submit", onsubmit);

