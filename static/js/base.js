const sticky = document.querySelector(".sticky")
window.onload = ()=>{
    let url = window.location.href
    url = url.substring(url.indexOf(":8000/")+6).split("/")    
    url = url.slice(url.length-2, url.length-1)[0]
    const e = sticky.querySelector("#"+url)
    console.log(url);
    sticky.removeChild(e)
    if(window.innerWidth < 784){
        [...sticky.querySelectorAll(".link")].map(e=>{
            e.classList.remove("hidden")
        })
    }
}

// sticky.addEventListener("mouseover",()=>{
//     // sticky.style.height = "150px";
//     if(window.innerWidth > 784)
//     {
//         console.log("pc");
//         [...sticky.querySelectorAll(".link")].map(e=>{
//             e.classList.remove("hidden")
//         })
//     }    
    
// })

// sticky.addEventListener("mouseout",()=>{
//     if(window.innerWidth > 784){        
//         console.log("?");
//         [...sticky.querySelectorAll(".link")].map(e=>{
//             // sticky.style.height = "50px"
//             e.classList.add("hidden")
//         })
//     }
// })

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// document.querySelector('h1').textContent = window.innerHeight
// function a(){
//     document.querySelector('h1').textContent = window.innerHeight
// }
// a()
// resize
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});