var user_name = "";
var user_exists = false

var firebaseConfig = {
   apiKey: "AIzaSyBKNOtDuOiu4pXc0a4skXHcRvWF9sT-dBQ",
   authDomain: "diaryapp-86cd9.firebaseapp.com",
   databaseURL: "https://diaryapp-86cd9-default-rtdb.firebaseio.com",
   projectId: "diaryapp-86cd9",
   storageBucket: "diaryapp-86cd9.appspot.com",
   messagingSenderId: "770488242012",
   appId: "1:770488242012:web:bb42b995b95a9456067b99",
   measurementId: "G-E2NW02TY07"
 };

 firebase.initializeApp(firebaseConfig)


function SignIn()
 {
   user_name = document.getElementById("user_name").value;
   checkUserName()
   //if(user_exists == false)
   // window.alert("User does not exist")
 }

 function checkUserName() {firebase.database().ref("/").on('value', 
  function(snapshot) {
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

         firebase.database().ref("/").child(childSnapshot.key).on('value',
          function(snapshot) {
            snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            if( user_name == childSnapshot.val()) {
                 user_exists = true
                 console.log("User exists " + user_exists)
                 window.location = "Diary.html";
                 localStorage.setItem('user',user_name)
                 
                 }
               } 
            )
          }
         )
         //user_name = childKey
        //console.log("User Name -  " + user_name);
      });});
    return false
    }

      




 