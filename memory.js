  let storedUsername = null;

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let usernameInput = document.getElementById("username").value;
    let usernameNum = parseInt(usernameInput, 10);

    if (!isNaN(usernameNum) && usernameNum >= 17300 && usernameNum <= 18380) {
      storedUsername = usernameNum; 
      localStorage.setItem("username", storedUsername); // ✅ save to localStorage
      console.log("Valid username:", storedUsername);
      
      window.location.href = "mainpage.html"; // go to main page
    } else {
      alert("NIS tidak ditumakn");
    }
  });

  function goBack() {
    window.history.back();

  }
