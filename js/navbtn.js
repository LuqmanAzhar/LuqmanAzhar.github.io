function openContent(id, element) {
  let i, btncontent, navlinks;
  btncontent = document.getElementsByClassName("content");
  for (i = 0; i < btncontent.length; i++) {
    btncontent[i].className = btncontent[i].className.replace(" h-show", "");
  }
  navlinks = document.getElementsByClassName("navbar__btn");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(" navbar__btn_active", "");
  }
  document.getElementById(id).className += " h-show";
  element.className += " navbar__btn_active"
}

document.getElementById("defaultopen").click();  // TODO: Seems Like Bad Convention