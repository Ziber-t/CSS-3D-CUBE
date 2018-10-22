
document.addEventListener("mousemove",mMove);
function mMove(e){
    let cube = document.getElementById("cube");
    cube.style.transform = 'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)';
}