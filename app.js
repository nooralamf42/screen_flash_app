function toggleFlash(){
    document.getElementsByTagName("body")[0].classList.toggle("bodyFlash");
    document.getElementById("btn").classList.toggle("btnOff");
    if (document.getElementById("btn").innerText == "OFF")
       document.getElementById("btn").innerText = "ON";
    else
        document.getElementById("btn").innerText = "OFF";
}
