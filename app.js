
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form behavior

    var UserName = document.getElementById("UserName").value;
    var phone  = document.getElementById("phone").value;
    var email  = document.getElementById("email").value;
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var row1   = table1.insertRow();
    var row2   = table2.insertRow();
    var cell1  = row1.insertCell(0);
    var cell2  = row1.insertCell(1);
    var cell3  = row1.insertCell(2);
    var cell4  = row1.insertCell(3);
    var cell5  = row2.insertCell(0);
    var cell6  = row2.insertCell(1);
    var cell7  = row2.insertCell(2);
    var cell8  = row2.insertCell(3) ;
    // var pattern = /^[a-zA-Z]+[0-9]+[a-zA-Z0-9]*$/;

if(UserName.length>1 && phone.length==13){
  cell1.innerHTML = UserName;
  cell2.innerHTML = phone;
   cell3.innerHTML = email;
   cell4.innerHTML = "All ok";
}
else{
  // alert("UserName or PhoneNumber is Invalid");
  cell4.innerHTML = "";
}
   

cell5.innerHTML = UserName;
cell6.innerHTML = phone;
cell7.innerHTML = email;

       if(phone.length <=12 && UserName=="" && email==""){
        cell8.innerHTML = "incomplete UserName, PH.number and Email";  
       }
       else if (phone.length <=12 && UserName==""){
        cell8.innerHTML = "incomplete UserName and PH.number ";  
       }
       else if (phone.length <=12 && email==""){
        cell8.innerHTML = "incomplete PH.Number and Email ";  
       }
       else if(UserName=="" && email==""){
          cell8.innerHTML = "incomplete UserName and Email "; 
        }
       
       else if(UserName==""){
        cell8.innerHTML = "incomplete UserName";
       }

       else if(phone.length <=12) {
        cell8.innerHTML = "incomplete PH.Number";
       }

       else if(email==""){
        cell8.innerHTML = "incomplete Email";
       }

       else{
        cell8.innerHTML = "All ok";
       }
    
});

