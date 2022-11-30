function start_Check()
{
    var login = (localStorage.getItem("Remember me") === 'true' || sessionStorage.getItem("Remember me") === 'true');
    console.log(login);
    if(login==true)
    {
        console.log("ready to add data");

    }
    else
    {

            location.href = "login.html";
    }
}

function log_check()
{
    var login_LC = (localStorage.getItem("Remember me") === 'true');
    var login_SC=(sessionStorage.getItem("Remember me") === 'true');
    if(login_LC==true || login_SC==true)
    {
        if(confirm("You are alrady Logged in \n\n would you like to logout"))
        {
            localStorage.setItem("Remember me", false);
            localStorage.setItem("who", null);
            sessionStorage.setItem("Remember me", false);
            sessionStorage.setItem("who", null);
            location.href = "signup.html";
        }
        else
        {
            location.href = "home.html";
        }
        
    }
}
function signup() 
{

        console.log("signup process started");
        var name = document.forms.form_signup.t1.value;
        var pw = document.forms.form_signup.t2.value

        var lcl = /[a-z]/g;
        var UCL = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if (name.length == 0) {
            console.log("if check");
            var msg1 = document.getElementById("msg1");
            msg1.style.display="block";
            alert("Please fill in email");
            
        } else if (pw.length == 0) {
            alert("Please fill in password");
        } else if (name.length == 0 && pw.length == 0) {
            alert("Please fill in email and password");
        } else if (pw.length > 8) {
            alert("Max of 8");
        } else if (!pw.match(numbers)) {
            alert("please add 1 number");
        } else if (!pw.match(UCL)) {
            alert("please add 1 uppercase letter");
        } else if (!pw.match(lcl)) {
            alert("please add 1 lovercase letter");
        } else {
            localStorage.setItem(name, pw);
            alert("Your account has been created");
            console.log("signup process Completed");

            if(confirm("Remember me"))
            {
                localStorage.setItem("Remember me", true);
                localStorage.setItem("who",name);
                location.href = "home.html";
                console.log("redirected to home") 
            }
            else
            {
                sessionStorage.setItem("Remember me", false);
                sessionStorage.setItem("who",null);
                location.href = "login.html";
            }
        }
    
}

function login()
{
    console.log("Login process started");
    var c;
    var name = document.forms.form_login.t1.value;
    var pw = document.forms.form_login.t2.value;
    var check=localStorage.getItem(name);

    if(pw==check)
    {
        console.log("Login process Completed");
        alert("Login process Completed");
        if(confirm("Remember me"))
        {
            localStorage.setItem("Remember me", true);
            localStorage.setItem("who",name);
            sessionStorage.setItem("Remember me", true);
            sessionStorage.setItem("who",name);
            location.href = "home.html";
            console.log("redirected to home") 
            
        }
        else
        {
            sessionStorage.setItem("Remember me", true);
            sessionStorage.setItem("who",name);
            location.href = "home.html";
        }

    }
    else
    {
        alert("Error");
    }
}

function show_pwd()
{
    var x = document.getElementById("my_PW");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function logout()
{
    localStorage.setItem("Remember me", false);
    localStorage.setItem("who", null);
    sessionStorage.setItem("Remember me", false);
    sessionStorage.setItem("who", null);
    location.href = "home.html";
}

function Admin_check()
{
    if(localStorage.getItem("who")=="Admin" ||sessionStorage.getItem("who")=="Admin")
    {
        location.href = "admin.html";
    }
}