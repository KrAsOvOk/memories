var pass = prompt("Enter the Password:");
if (pass == null)  window.location = "wrong.html";
else if (pass.toLowerCase() == "37206072")  
      window.location = "./courses/list_courses.html";
else  window.location = "wrong.html";