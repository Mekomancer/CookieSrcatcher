var x=0
function Bisclick() {
    x++;
    document.getElementById("NumOfBiscuts").innerHTML = x;
    document.getElementById("biscut").style.width = "256px";
    document.getElementById("biscut").style.height = "256px";
    setTimeout('shrink()', 100);
}
function shrink() {
    document.getElementById("biscut").style.width = "248px";
    document.getElementById("biscut").style.height = "248px";
}