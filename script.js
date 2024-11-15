// Show data in Table table.html Fetching data
async function fetch_Data() {
  let sdata = await fetch("http://localhost:3000/customer");
  let res = await sdata.json();

  let data_store = res
    .map(
      (e) => `
        <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.branch}</td>
            <td>${e.email}</td>
            <td>${e.phone}</td>
            <td>${e.smarks}</td>
            <td>${e.imarks}</td>
            <td>${e.address}</td>
            <td><i class="fa-solid fa-trash" onclick="mydelete('${e.id}')"></i></td>
            <td><i class="fa-solid fa-pen-to-square" onclick="myedit('${e.id}')"></i></td>
        </tr>
    `
    )
    .join("");
  document.getElementById("showdata").innerHTML = data_store;
}
fetch_Data();

// Insert Data in Table  insdata.html

function insData() {
  
  let name1 = document.getElementById("name").value;
  let branch1 = document.getElementById("branch").value;
  let email1 = document.getElementById("email").value;
  let phone1 = document.getElementById("phone").value;
  let smarks1 = document.getElementById("smarks").value;
  let imarks1 = document.getElementById("imarks").value;
  let address1 = document.getElementById("address").value;

  

  if (name1 == "") {
    alert("Please enter Name");
    document.getElementById("name").focus();
    return false;
  } 
  else if (branch1 == "" ) {
    alert("Please enter Branch Name");
    document.getElementById("branch").focus();
    return false;
  } 
  else if (email1 == "" ) {
    alert("Please enter valid email");
    document.getElementById("email").focus();
    return false;
  } 
  else if (phone1 == "") {
    alert("Please enter Contact Number");
    document.getElementById("phone").focus();
    return false;
  } 
  else if (smarks1 == "") {
    alert("Please enter Standard Marks");
    document.getElementById("smarks").focus();
    return false;
  } 
  else if (imarks1 == "" ) {
    alert("Please enter Intermediate Marks");
    document.getElementById("imarks").focus();
    return false;
  } 
  else if (address1 == "") {
    alert("Please enter Address");
    document.getElementById("address").focus();
    return false;
  }

  let frmdata = {
    
    name: name1,
    branch: branch1,
    email: email1,
    phone: phone1,
    smarks: smarks1,
    imarks: imarks1,
    address: address1,
  };

  fetch("http://localhost:3000/customer", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(frmdata),
  })
    .then((re) => alert("Data Inserted Successfully!!!..."))
    .catch((t) => alert("Data not inserted........."));
}

// TO DELETE

function mydelete(id) {
  fetch(`http://localhost:3000/customer/${id}`, {
    method: 'DELETE'
  })
  .then((r) => alert("Deleted........"));
}



// to edit

async function myedit(id){
    
    let r=await fetch(`http://localhost:3000/customer/${id}`)
    let d=await r.json()

    let frm=`
    <form action="" class="form" onsubmit="return finalupdate('${d.id}')">
                    <h1>Edit Data</h1>
                    <label for="oid0" read>OrderId</label>
                    <input type="text" value="${d.id}" id="oid0" readonly><br>

                    <label for="name0">Student Name</label>
                    <input type="text" value="${d.name}" id="name0" ><br>

                    <label for="branch0">Branches</label>
                    <input type="text" value="${d.branch}" id="branch0" ><br>

                    <label for="email0">Email</label>
                    <input type="text" value="${d.email}" id="email0" ><br>

                    <label for="phone0">Contact Number</label>
                    <input type="text" value="${d.phone}" id="phone0" ><br>

                    <label for="smarks0">Standard Marks</label>
                    <input type="text" value="${d.smarks}" id="smarks0" ><br>

                    <label for="imarks0">Intermediate Marks</label>
                    <input type="text" value="${d.imarks}" id="imarks0" ><br>

                    <label for="address0">Address</label>
                    <input type="text" value="${d.address}" id="address0" ><br>
                    <div class="btn">
                    <button type="submit">Update Data</button>
                    </div>
                </form>

    `
    document.getElementById('editform').innerHTML=frm
}


function finalupdate(id){

    name2=document.getElementById("name0").value
    branch2=document.getElementById("branch0").value
    email2=document.getElementById("email0").value
    phone2=document.getElementById("phone0").value
    smarks2=document.getElementById("smarks0").value
    imarks2=document.getElementById("imarks0").value
    address2=document.getElementById("address0").value



    if (name2 == "") {
        alert("Please enter Student Name");
        document.getElementById("name0").focus();
        return false;
      } 
      else if (branch2 == "" ) {
        alert("Please enter Branch Name");
        document.getElementById("branch0").focus();
        return false;
      } 
      else if (email2 == "" ) {
        alert("Please enter Valid Email");
        document.getElementById("email0").focus();
        return false;
      } 
      else if (phone2 == "") {
        alert("Please enter Contact Number");
        document.getElementById("phone0").focus();
        return false;
      } 
      else if (smarks2 == "") {
        alert("Please enter Standard Marks");
        document.getElementById("smarks0").focus();
        return false;
      } 
      else if (imarks2 == "" ) {
        alert("Please enter Intermediate Marks");
        document.getElementById("imarks0").focus();
        return false;
      } 
      else if (address2 == "") {
        alert("Please enter Address");
        document.getElementById("address0").focus();
        return false;
      }


      let frm={
        name:name2,
        branch:branch2,
        email:email2,
        phone:phone2,
        smarks:smarks2,
        imarks:imarks2,
        address:address2
    }

    fetch(`http://localhost:3000/customer/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(frm)
    })
    .then(r=>alert("Updated....."))

 }