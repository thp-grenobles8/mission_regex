

window.onload = function () {
  function colorMatches (consoleId) {
    try {
      var regex = new RegExp (
        document.getElementById(consoleId+"_input").textContent,
        "g");
      document.getElementById(consoleId+"_input").style.color="#076"
    } catch (e) {
      document.getElementById(consoleId+"_input").style.color="#c02"
    }
    document.getElementById(consoleId+"_text").innerHTML =
      document.getElementById(consoleId+"_text").textContent
      .replace(/<\/?span>/g,"") // remove previous highlights
      .replace(
        regex,
        function(str){
      return "<span>"+str+"</span>"
    });
  };
  var count = 0;
  Array.from(document.getElementsByClassName("rexConsole"))
    .forEach(el=>{
      var id = "rex"+count;
      count ++;
      el.id = id;
      el.getElementsByTagName("code")[0]
        .setAttribute("unselectable", "on");
      el.getElementsByTagName("span")[0]
        .id = id + "_input";
      el.getElementsByTagName("div")[0]
        .id = id + "_text";
      el.onkeyup = function () {
        colorMatches(id);
      };
      colorMatches(id);
    })
};
