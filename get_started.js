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

 
 firebase.initializeApp(firebaseConfig);



function Next()
{
   
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").push({
      user_name
   }).then(() => {
      localStorage.setItem('user', user_name)
      window.location = "Diary.html";
      }
   )
   
}










