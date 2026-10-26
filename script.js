
function changeHeading() {
  document.getElementById("mainHeading").textContent =
    "Welcome to the Campus Club Portal!";
}

function changeCardColor() {
  document.getElementById("card1").style.backgroundColor = "#fff3b0";
}

function toggleFeatured() {
  document.getElementById("featuredSection").classList.toggle("hidden");
}



function interested1() {
  document.getElementById("btn1").textContent = "Interest Noted";
  document.getElementById("msg1").textContent =
    "Thank you! Your interest in Photography Walk has been noted.";
}

function interested2() {
  document.getElementById("btn2").textContent = "Interest Noted";
  document.getElementById("msg2").textContent =
    "Thank you! Your interest in Coding Workshop has been noted.";
}

function interested3() {
  document.getElementById("btn3").textContent = "Interest Noted";
  document.getElementById("msg3").textContent =
    "Thank you! Your interest in Football Match has been noted.";
}

function interested4() {
  document.getElementById("btn4").textContent = "Interest Noted";
  document.getElementById("msg4").textContent =
    "Thank you! Your interest in Debate Competition has been noted.";
}


function showActivity() {
  let activityName = document.getElementById("activityInput").value;

  if (activityName === "") {
    document.getElementById("activityResult").textContent =
      "Please type an activity name first.";
    document.getElementById("searchMsg").textContent = "";
  } else {
    document.getElementById("activityResult").textContent =
      "Activity: " + activityName;
    document.getElementById("searchMsg").textContent =
      "Activity shown successfully.";
  }
}



function changeActivityCard() {
  document.getElementById("act2").style.backgroundColor = "#d9f2d9";
  document.getElementById("act2").style.border = "2px solid green";
}




function changeFormHeadingSize() {
  document.getElementById("formHeading").style.fontSize = "34px";
}

function toggleForm() {
  document.getElementById("formSection").classList.toggle("hidden");
}

function submitForm() {
  let name = document.getElementById("studentName").value;
  let club = document.getElementById("clubName").value;
  let interest = document.getElementById("areaOfInterest").value;
  let year = document.getElementById("yearOfStudy").value;

  if (name === "" || club === "" || interest === "" || year === "") {
    document.getElementById("formMessage").textContent =
      "Error: Please fill in all the fields.";
    document.getElementById("formMessage").style.color = "red";
  } else {
    document.getElementById("formMessage").textContent =
      "Thank you " + name + "! You have shown interest in joining " +
      club + " (" + interest + ", " + year + ").";
    document.getElementById("formMessage").style.color = "green";
  }
}