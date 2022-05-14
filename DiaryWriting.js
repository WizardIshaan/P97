var Message = '';
var MsgDate = '';

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

  function Save()
{
   MsgDate = document.getElementById("Date").value;
   Msg = document.getElementById("Message").value;
   
   var Message = MsgDate + " : " +  Msg
   
   var user_name = localStorage.getItem('user')
   var month = localStorage.getItem('month')
   console.log("Your Entry Has Been Saved!")
   document.getElementById("labelMessage").innerHTML= "Your Entry Has Been Saved!"

   document.getElementById('Date').value = ''
   document.getElementById('Message').value = ''


   firebase.database().ref("/").child(user_name).child(month).push({
    Message
   }).then(() => {
      //window.location = "Diary.html";
      }
   )

}

function Logout() {
   localStorage.removeItem("user");
   localStorage.removeItem("month");
       window.location = "index.html";
   }
   