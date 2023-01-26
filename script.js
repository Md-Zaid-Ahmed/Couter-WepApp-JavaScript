let c=0;

document.getElementById("dec").onclick = function()
{
    c-=1;
    document.getElementById("countvalue").innerHTML=c;
}
document.getElementById("inc").onclick = function()
{
    c+=1;
    document.getElementById("countvalue").innerHTML=c;
}
document.getElementById("res").onclick = function()
{
    c=0;
    document.getElementById("countvalue").innerHTML=c;
}