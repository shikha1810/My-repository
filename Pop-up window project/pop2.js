var parent = document.querySelector(".class-1"),
    btn = document.querySelector("button");
    x = document.querySelector(".close"),
    section = document.querySelector("section")
    md = document.querySelector(".Modal")

btn.addEventListener("click" , appear);

function appear()
{
    parent.style.display = "block";
    section.style.filter = "blur(10px)";
}

x.addEventListener("click", disappear);
function disappear()
{
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
}
parent.addEventListener("click", disappearblur);
function disappearblur(e)
{
    if (e.target.className== "Modal")
    {
        parent.style.display = "none";
        section.style.filter = "blur(0px)";
    }
}