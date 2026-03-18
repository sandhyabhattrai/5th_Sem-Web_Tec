fetch("employee.json")
  .then((res) => res.json())
  .then((data) => {
    let table = document.getElementById("empTable");

    data.employee.forEach((emp) => {
      let row = table.insertRow();

      row.insertCell(0).innerHTML = emp.name;
      row.insertCell(1).innerHTML = emp.address;
      row.insertCell(2).innerHTML = emp.email;
      row.insertCell(3).innerHTML = emp.salary;
      row.insertCell(4).innerHTML = emp.pan;
    });
  });
