const btnwidth=150;
const btnheight=50;
maxwidth=window.innerWidth-btnwidth;
maxheight=window.innerHeight-btnheight;
window.addEventListener('DOMContentLoaded', () =>  {
    const button=document.getElementById("button");
    button.addEventListener('click', ()=> alert("You Clicked Me"));
    button.addEventListener('mouseover',()=>{
       // console.log(`ypu hovered me`)});
       button.style.left = Math.floor(Math.random()*(maxwidth+1))+'px';
       button.style.top = Math.floor(Math.random()*(maxheight+1))+'px';
    })
});