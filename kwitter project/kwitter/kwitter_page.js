//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCOz5q4HbDFPWqYd_rJ6q5434-MES1F420",
      authDomain: "kwitter-81261.firebaseapp.com",
      databaseURL: "https://kwitter-81261-default-rtdb.firebaseio.com",
      projectId: "kwitter-81261",
      storageBucket: "kwitter-81261.appspot.com",
      messagingSenderId: "831474300951",
      appId: "1:831474300951:web:411e7fde7d05be76f68452"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebaseConfig.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData()
 {
        firebase.database().ref("/"+room_name).on('value', function(snapshot) 
        {
               document.getElementById("output").innerHTML = "";
                snapshot.forEach(function(childSnapshot) 
                {
                       childKey  = childSnapshot.key;
                        childData = childSnapshot.val();
                         if(childKey != "purpose") 
                         {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      }
 });
  });
 }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}