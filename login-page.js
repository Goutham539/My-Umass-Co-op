function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="divya" && password=="1234"){
        window.location.href="dashboard.html";
    } else if(username=="kevin" && password=="4567"){
        window.location.href="dashboard-student.html";
    } else{
        alert("Username or Password incorrect.")
    }

}