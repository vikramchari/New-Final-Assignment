let arr = [{
    cId: "C1001",
    customerName: "Maria Anders",
    serviceName: "Mumbai",
    serviceDate: "Male",
    
}, {
    cId: "C1002",
    customerName: "Albert Harry",
    serviceName: "Delhi",
    serviceDate: "Female",
    
}, {
    cId: "C1003",
    customerName: "John Jacob",
    serviceName: "Hyderabad",
    serviceDate: "Male",
   
}, {
    cId: "C1004",
    customerName: "Alia chough",
    serviceName: "Agra",
    serviceDate: "Male",
   
}, {
    cId: "C1005",
    customerName: "David James",
    serviceName: "Banglore",
    serviceDate: "Female",
    
}, {
    cId: "C1006",
    customerName: "Melvin Jacob",
    serviceName: "Goa",
    serviceDate: "Female",
    
}, {
    cId: "C1007",
    customerName: "Clara Satlin",
    serviceName: "Kurnool",
    serviceDate: "Female",
   
}, ];


  var customers = "";
  customers += `
                        <table class="table table-striped table-bordered">
                               <th>C.Id</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Gender</th>
                                <th>Action</th>`;
  arr.map((i) => {
      customers += `
                                <tr>
                                    <td>${i.cId}</td>
                                    <td>${i.customerName}</td>
                                    <td>${i.serviceName}</td>
                                    <td>${i.serviceDate}</td>
                                    <td><button onclick="myFunction()">Delete</button></td>
                                </tr>`;
  });
  customers += `
                        </table>`;
  document.querySelector("#table-info").innerHTML = customers;
  function myFunction() {
    document.querySelector(".table-striped ").deleteRow(1)
  }

//   var onDelete=document.queryCommandValue(".table-info").deleteRow(0);