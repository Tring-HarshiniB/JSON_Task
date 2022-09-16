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

let row = null;
let index = -1;

function submitFun(){
    if(row == null && index == -1){
        if((document.getElementById("terms").checked))
        {
            let id = data.length + 1;
            let email = document.getElementById('email').value;
            let fname = document.getElementById('fname').value;
            let lname = document.getElementById('lname').value;
            let mobnum = document.getElementById('mobnum').value;
            let dob = document.getElementById('dob').value;
            let gender;
            if (document.getElementById('male').checked) {
                gender = document.getElementById('male').value;
            } 
            else if(document.getElementById('female').checked) {
                gender = document.getElementById('female').value;
            }

            data.push({
                id: id,
                email: email,
                fname: fname,
                lname: lname,
                mobnum: mobnum,
                dob: dob,
                gender: gender
            });
            localStorage.userdata = JSON.stringify(data);
            displayTable(id, email, fname, lname, mobnum, dob, gender);

            document.getElementById('email').value = "";
            document.getElementById('fname').value = "";
            document.getElementById('lname').value = "";
            document.getElementById('mobnum').value = "";
            document.getElementById('dob').value = "";
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
        }
    }
    else{

    }
}

function initial() {
    if(!(localStorage.userdata))
    {
      localStorage.userdata = JSON.stringify(data);
    }
    if (localStorage.userdata) {
       data = JSON.parse(localStorage.userdata);
       for (let i in data) {
         displayTable(data[i].id, data[i].email, data[i].fname, data[i].lname, data[i].mobnum, data[i].dob, data[i].gender);
       }
    }
}

function displayTable(id, email, fname, lname, mobnum, dob, gender){
    let table = document.getElementById("table2");
    let row = table.insertRow();
    let cell_1 = row.insertCell(0);
    let cell_2 = row.insertCell(1);
    let cell_3 = row.insertCell(2);
    let cell_4 = row.insertCell(3);
    let cell_5 = row.insertCell(4);
    let cell_6 = row.insertCell(5);
    let cell_7 = row.insertCell(6);
    let cell_8 = row.insertCell(7);

    cell_1.innerHTML = id;
    cell_2.innerHTML = email;
    cell_3.innerHTML = fname;
    cell_4.innerHTML = lname;
    cell_5.innerHTML = mobnum;
    cell_6.innerHTML = dob;
    cell_7.innerHTML = gender;
    cell_8.innerHTML = "<button id=edit onclick=editData(this,"+(id-1)+")>edit</button><button id=delete onclick=deleteData(this,"+(id-1)+")>delete</button>";
}

  //   function addData() {
//     getData();
//     let gender;
//     if (document.getElementById("male").checked) {
//       gender = document.getElementById("male").value;
//     } else if (document.getElementById("female").checked){
//       gender = document.getElementById("female").value;
//     }
//     data.push({
//       id: data.length + 1,
//       email: document.getElementById("email").value,
//       fname: document.getElementById("fname").value,
//       lname: document.getElementById("lname").value,
//       mobnum: document.getElementById("mobnum").value,
//       dob: document.getElementById("dob").value,
//       gender: gender,
//     });
//     localStorage.setItem("Data", JSON.stringify(data));
//     // showData();
//   }
  
//   function getData() {
//     let str = localStorage.getItem("Data");
//     if (str != null) {
//       data = JSON.parse(str);
//     }
//   }

// function showData() {
//     getData();
//     let table = document.getElementById("table2");
//     for (let i = 0; i < data.length; i++) {
//       let row = table.insertRow();
//       let cell_1 = row.insertCell(0);
//       let cell_2 = row.insertCell(1);
//       let cell_3 = row.insertCell(2);
//       let cell_4 = row.insertCell(3);
//       let cell_5 = row.insertCell(4);
//       let cell_6 = row.insertCell(5);
//       let cell_7 = row.insertCell(6);
//       let cell_8 = row.insertCell(7);

//       cell_1.innerHTML = data[i].id;
//       cell_2.innerHTML = data[i].email;
//       cell_3.innerHTML = data[i].fname;
//       cell_4.innerHTML = data[i].lname;
//       cell_5.innerHTML = data[i].mobnum;
//       cell_6.innerHTML = data[i].dob;
//       cell_7.innerHTML = data[i].gender;
//       cell_8.innerHTML = '<button id=edit onclick=editData(this,${data[i].id})>Edit</button><br><button id="delete" onclick=deleteData(this,${data[i].id})>Delete</button>';
//     }
// }

// function deleteData(td,id){
//     dataarray.splice(id,1);
//     localStorage.userdata = JSON.stringify(data);
//     if(alert('Are you sure to delete this record?')){
//         deleteid = td.parentElement.parentElement;
//         document.getElementById("table2").deleteRow(delete_Id.rowIndex);
        
//     }
//  }