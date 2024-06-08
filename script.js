
const showSidebar=()=>{
    console.log("clicked")
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display="flex"
    const navbar=document.querySelector(".navbar")
    navbar.style.display="none"

}
const hideSidebar=()=>{
    console.log("clicked hide")
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display="none"
    const navbar=document.querySelector(".navbar")
    navbar.style.display="flex"
}
const menu=document.getElementById("menu");
menu.addEventListener("click",showSidebar);

const cross=document.getElementById("cross");
cross.addEventListener("click",hideSidebar);

const navbar = document.querySelector('nav');

const handleScroll=()=>{
    const scrollPosition=window.scrollY;
    // console.log(scrollPosition)
    const scrollPercentage = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);
    // console.log(scrollPercentage)
    const startColor = [134, 161, 161]; 
    const endColor = [176, 165, 106];
    const currentColor = startColor.map((channel, index) => {
        return channel + scrollPercentage * (endColor[index] - channel);
      });
    const rgbColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
    navbar.style.backgroundColor = rgbColor;


}

window.addEventListener('scroll', handleScroll);

const changeColor=(event)=>{
    let stylevar=event.target.style;
    stylevar.backgroundColor='rgb(92, 71, 71)'
    stylevar.color='white'
}
const revertColor = (event) => {
    let stylevar=event.target.style;
    stylevar.backgroundColor=''
    stylevar.color=''

}

const nava=document.querySelectorAll('nav a');
nava.forEach((nav)=>{
    nav.addEventListener("mouseover",changeColor)
    nav.addEventListener('mouseout', revertColor);
});


