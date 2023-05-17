var button_get_day = document.getElementById("getDay");
button_get_day.onclick = function (){
    var value = document.getElementById("day").value;	
    var days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    var today = new Date();
    var result = document.getElementById("result_day");
    result.textContent =days[value];
    result.style.color = 'red';
};