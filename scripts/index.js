function loadHome() {
  $(document).ready(function () {
    $("#content-area").load("../pages/Home.html");
  });
}

function loadRohs() {
  $(document).ready(function () {
    $("#content-area").load("../pages/RoHS.html");
  });
}

function loadReach() {
  $(document).ready(function () {
    $("#content-area").load("../pages/REACH.html");
  });
}

function loadProp65() {
  $(document).ready(function () {
    $("#content-area").load("../pages/Prop65.html");
  });
}

function switchShowHide(element) {
  if (document.getElementById(element).innerHTML === "hide") {
    document.getElementById(element).innerHTML = "show";
  } else {
    document.getElementById(element).innerHTML = "hide";
  }
}

$(document).ready(function () {
  $("#content-area").load("../pages/Home.html");
});
