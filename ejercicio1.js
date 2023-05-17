var button_get_day = document.getElementById("getDay");
button_get_day.onclik = function (){
    var value = document.getElementById("day").value;
    var days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    var today = new Date();
    var result = document.getElementById("result_day");
    result.text.Contex = days[value];
    result.style.color = 'red';
};