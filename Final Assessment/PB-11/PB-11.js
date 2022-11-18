// Array of Employeess 
// JS file for car srvices page


let arr = [{
    cId: "C1001",
    customerName: "Maria Anders",
    serviceName: "Car Care Service",
    serviceDate: "22-Jan-2020",
    cost: 4500
}, {
    cId: "C1002",
    customerName: "Albert Harry",
    serviceName: "Preventive Maintainence Service",
    serviceDate: "22-Jan-2020",
    cost: 5000
}, {
    cId: "C1003",
    customerName: "John Jacob",
    serviceName: "Preventive Maintainence Service",
    serviceDate: "23-Jan-2020",
    cost: 4500
}, {
    cId: "C1004",
    customerName: "Alia chough",
    serviceName: "Preventive Maintainence Service",
    serviceDate: "24-Jan-2020",
    cost: 5000
}, {
    cId: "C1005",
    customerName: "David James",
    serviceName: "Car Care Service",
    serviceDate: "24-Jan-2020",
    cost: 6000
}, {
    cId: "C1006",
    customerName: "Melvin Jacob",
    serviceName: "Car Care Service",
    serviceDate: "25-Jan-2020",
    cost: 7000
}, {
    cId: "C1007",
    customerName: "Clara Satlin",
    serviceName: "Body Repair Service",
    serviceDate: "25-Jan-2020",
    cost: 4500
}, {
    cId: "C1008",
    customerName: "Maria Anders",
    serviceName: "Body Repair Service",
    serviceDate: "25-Jan-2020",
    cost: 4500
}, {
    cId: "C1009",
    customerName: "John Jacob",
    serviceName: "Body Repair Service",
    serviceDate: "26-Jan-2020",
    cost: 5000
}, {
    cId: "C1010",
    customerName: "John Jacob",
    serviceName: "Preventive Maintainence Service",
    serviceDate: "26-Jan-2020",
    cost: 4500
}, {
    cId: "C1011",
    customerName: "Arav Satya",
    serviceName: "Body Repair Service",
    serviceDate: "26-Jan-2020",
    cost: 5000
}, {
    cId: "C1012",
    customerName: "Steves Jacob",
    serviceName: "Preventive Maintainence Service",
    serviceDate: "26-Jan-2020",
    cost: 4500
}];


  var customers = "";
  customers += `
                        <table class="table table-striped table-bordered">
                               <th>C.Id</th>
                                <th>Customer Name</th>
                                <th>Service Name</th>
                                <th>Service Date</th>
                                <th>Cost</th>`;
  arr.map((i) => {
      customers += `
                                <tr>
                                    <td>${i.cId}</td>
                                    <td>${i.customerName}</td>
                                    <td>${i.serviceName}</td>
                                    <td>${i.serviceDate}</td>
                                    <td>${i.cost}</td>
                                </tr>`;
  });
  customers += `
                        </table>`;
  document.querySelector(".table-info").innerHTML = customers;