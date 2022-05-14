var selectedMonthValue = "Messages for Month: ";
var monthMessages = []

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

function checkUserMessages(selectedMonth) {
  monthMessages = []
  document.getElementById('monthMessages').innerHTML = ''
  firebase.database().ref("/").child(localStorage.getItem('user')).child(selectedMonth).on('value', 
  function(snapshot) {
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        
        firebase.database().ref("/").child(localStorage.getItem('user')).child(selectedMonth).child(childKey).on('value',
        function(snapshot1) {
          snapshot1.forEach(function(childSnapshot1) {childKey1  = childSnapshot1.key;
            document.getElementById('monthMessages').innerHTML = document.getElementById('monthMessages').innerHTML + 
            childSnapshot1.val()+"<br>"
            //monthMessages.push(childSnapshot1.val()+"<br>")
          
          //document.getElementById('monthMessages').innerHTML = monthMessages
            } 
          )
        })
         
      });});
    return false
    }

  
function MonthSelected(selectedMonth) 
  {
    selectedMonthValue = "Messages for Month: " + selectedMonth;
    localStorage.setItem("month",selectedMonth)
    document.getElementById('lblSelectedMonth').innerHTML = selectedMonthValue;

    checkUserMessages(selectedMonth)
   
  }

function AddDiaryEntry()
{
    window.location = "DiaryWriting.html";
}
