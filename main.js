function inicioReloj(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    ap=(hr < 12) ? "<span>A.M</span>": "<span>P.M</span>";
    hr=(hr==0)? hr -12 : hr;

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("hora").innerHTML=hr;
    document.getElementById("minutos").innerHTML=min;
    document.getElementById("segundos").innerHTML=sec;
    document.getElementById("ampm").innerHTML=ap;

    var tiempo =setTimeout(function(){inicioReloj()},500)
}
function checkTime(i){
    if(i < 10){
        i="0" + i;
    }
    return i;
}