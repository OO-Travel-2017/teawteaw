window.onload=function(){
    //to see who is login now
    initApp();
}

function initApp(){
    //check that account is exist
    firebase.auth().onAuthStateChanged(function(user) {
        document.getElementById("quickstart-verify-email").disabled = true;
        if (user){
            //login complete and still in web
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnnoymous = user.isAnnoymous;
            var uid = user.uid;
            var providerData =user.providerData;
            document.getElementById("quickstart-sign-in-status").textContent="Signed in";
            document.getElementById("quickstart-sign-in").textContent= "Sign out";
            document.getElementById("quickstart-account-details").textContent=JSON.stringify(user,null," ");
            if (!emailVerified){
                document.getElementById("quickstart-verify-email").disabled=false;
            }
        }else{
                document.getElementById("quickstart-sign-in-status").textContent="Signed out";
                document.getElementById("quickstart-sign-in").textContent="Sign in";
                document.getElementById("quickstart-account-details").textContent="null";
            }
            document.getElementById("quickstart-sign-in").disabled=false;
        });
    }
function signUp(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if (reg.test(email) == false){
        alert('Invalid Email Address');
        return;
    }
    if (password.length<7){
        alert("Invalid password");
        return;
    }
    //add user account to firebase authentication
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode=="auth/weak-password"){
            alert("Weak password");
        }
        else{
            alert(errorMessage);
        }
        console.log(error);
    });
    initApp();
}

function toggleSignIn(){
    if (firebase.auth().currentUser){
        //already login and signout
        firebase.auth().signOut();
    }
    else{
        //not a first time to login, perform login
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        
        if (reg.test(email) == false){
            alert('Invalid Email Address');
            return;
        }
        if (password.length<7){
            alert("Invalid password");
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode=="auth/wrong-password"){
                alert("wrong password");
            }
            else{
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById("quickstart-sign-in").disabled = false;
        });
    }
    document.getElementById("quickstart-sign-in").disabled=true;
}

function verifyEmail(){
    firebase.auth().currentUser.sendEmailVerification().then(function(){
        alert("Email Sent!");
    });
}

function passwordReset(){
    var email = document.getElementById("email").value;
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        alert("Re-Password sent!");
    }).catch(function (error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode=="auth/user-not-found"){
            alert("User not found");
        }
        else{
            alert(errorMessage);
        }
        console.log(error);
    });
}

//facebook login
function loginFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result){
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(token);
    console.log(user);
  }).catch(function(error){
    console.log(error.code);
    console.log(error.message);
  })
}

//facebook lockout
function logoutFacebook(){
    firebase.auth().signOut()
    .then(function() {
        console.log("signout success");
    }, function(error) {
        console.log("signout failed");
    });
}