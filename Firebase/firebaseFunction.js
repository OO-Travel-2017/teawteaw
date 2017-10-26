// onload is similar to constructor

window.onload=function(){
    showData();
}

//show data of User's child
function showData(){
    //sort by address of child or you can use .orderByKey()
    //to sort by Key
    var firebaseRef = firebase.database().ref("User").orderByChild("address");
    firebaseRef.once('value').then(function(dataSnapshot){
        //split key and value
        dataSnapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childData)
        })
    }); 
}

//add new child namely "Admin" with value "Root"
function createChild(){
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("Admin").set("Root");
    afterCreateChild();
}

//add subchild of name namely fname and lname
function afterCreateChild(){
    var firebaseRef = firebase.database().ref("Admin");
    firebaseRef.child("name/fname").set("Pongsakorn");
    firebaseRef.child("name/lname").set("Jirachan");
}

//get value from textbox
function saveData(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var address = document.getElementById("address");
    insertData(email.value,password.value,address.value);
}

//insert data to database
function insertData(email,password,address){
    var firebaseRef = firebase.database().ref("User");
    //push in JSON format
    firebaseRef.push({
        email:email,
        password:password,
        address:address
    });
    //show log of success in browser's inspection
    console.log("insert success")
    showData();
}

//delete User2 from database
function deleteData(){
    var firebaseRef = firebase.database().ref("User/User2");
    firebaseRef.remove()
    .then(function(){
        console.log("remove success");
    })
    .catch(function(error){
        console.log("remove failed: "+ error.message);
    })
}

//updata data of user4
function updateData(){
    var firebaseRef = firebase.database().ref("User/User4");
    //if there are exist "Key", it will be updated,
    //otherwise it will be added
    firebaseRef.update({address:"Tokyo", Email:"P.Sokkendai@gmail.com"});
    console.log("success");
}