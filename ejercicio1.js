var button_get_day = document.getElementById("getDay");
button_get_day.onclick = function (){
    var value = document.getElementById("day").value;	
    var days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    var today = new Date();
    var result = document.getElementById("result_day");
    result.textContent =days[value];
    result.style.color = 'red';
};



//Ejecicio 2
var button_get_reverse_string = document.getElementById("reverseString");
button_get_reverse_string.onclick = function (){
        var value = document.getElementById("string").value;
        var result = reverseString(value);
        var result_paragraf = document.getElementById("result_string");
        result_paragraf.textContent =result;
};

function reverseString(data){
    var result = "";
    var i = data.length;
    while (i>0) {
        result += data.substring(i-1,i);
        i--;
    }
    return result;
}
