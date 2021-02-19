function openContent(pageName, element) {
  let i, btncontent, navlinks;
  btncontent = document.getElementsByClassName("btn-content");
  for (i = 0; i < btncontent.length; i++) {
    btncontent[i].style.display = "none";
  }
  navlinks = document.getElementsByClassName("nav-btn");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[0].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  console.log(element)
  element.className += " active"
}

document.getElementById("defaultopen").click();  // TODO: Seems Like Bad Convention