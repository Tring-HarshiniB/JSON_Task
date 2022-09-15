let data = [
    {
      id: 1,
      email: "jeeva@gmail.com",
      fname: "Jeeva",
      lname: "J",
      mobnum: 2356722155,
      dob: "30-12-2002",
      gender: "Female",
    },
    {
      id: 2,
      email: "swamy@gmail.com",
      fname: "Swamy",
      lname: "P",
      mobnum: 9034562389,
      dob: "01-02-2003",
      gender: "Male",
    },
  ];

  function addData() {
    getData();
    let gender;
    if (document.getElementById("male").checked) {
      gender = document.getElementById("male").value;
    } else if (document.getElementById("female").checked){
      gender = document.getElementById("female").value;
    }
    data.push({
      id: data.length + 1,
      email: document.getElementById("email").value,
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      mobnum: document.getElementById("mobnum").value,
      dob: document.getElementById("dob").value,
      gender: gender,
    });
    localStorage.setItem("Data", JSON.stringify(data));
  }
  
  function getData() {
    let str = localStorage.getItem("Data");
    if (str != null) {
      data = JSON.parse(str);
    }
  }

function showData() {
    getData();
    let table = document.getElementById("table2");
    for (let i = 0; i < data.length; i++) {
      let row = table.insertRow();
      let cell_1 = row.insertCell(0);
      let cell_2 = row.insertCell(1);
      let cell_3 = row.insertCell(2);
      let cell_4 = row.insertCell(3);
      let cell_5 = row.insertCell(4);
      let cell_6 = row.insertCell(5);
      let cell_7 = row.insertCell(6);
      let cell_8 = row.insertCell(7);

      cell_1.innerHTML = data[i].id;
      cell_2.innerHTML = data[i].email;
      cell_3.innerHTML = data[i].fname;
      cell_4.innerHTML = data[i].lname;
      cell_5.innerHTML = data[i].mobnum;
      cell_6.innerHTML = data[i].dob;
      cell_7.innerHTML = data[i].gender;
      cell_8.innerHTML = '<button id="edit">Edit</button><br><button id="delete">Delete</button>';
    }
}

// let arr= JSON.parse(localStorage.getItem("Data"));
// arr.splice(id,1);
// localStorage.setItem("Data",JSON.stringify(arr));
// let newData = JSON.parse(localStorage.getItem("Data"));