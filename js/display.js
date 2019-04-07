
var d = {
  toggle: function (el) {
    let e=document.getElementById(el)
      .style;
    if (e.display == "") {
      e.display="block";
    } else {
      e.display="";
    }
  }
}
