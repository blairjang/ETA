
const category = document.querySelector(".category")
const videos = document.querySelector(".video-area")
const video = document.querySelector(".video")
const group = document.querySelector(".button-group")
const title = document.querySelector(".title")
const json = {'phrases': {'How are you': '<iframe width="800" height="450" src="https://www.youtube.com/embed/1wvGNvkRtNY?si=riCtXF227ZPDxAJD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'My name  is Bill what is your name?': '<iframe width="800" height="450" src="https://www.youtube.com/embed/eyS1Mkrh5DQ?si=1Zf8z7MqSeyqGIcO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Nice to meet you': '<iframe width="800" height="450" src="https://www.youtube.com/embed/R-Xyy8iJEsU?si=RPdx8w8RvyvC98S0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'My mother name is Jane, My father name is Tom': '<iframe width="800" height="450" src="https://www.youtube.com/embed/-F0cmkhrs3Y?si=8VONMC-iaVUdn2ta" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Are you hungry?': '<iframe width="800" height="450" src="https://www.youtube.com/embed/yPb2a_UcRr4?si=lSnTluSNAskVCJc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
"don't want": '<iframe width="800" height="450" src="https://www.youtube.com/embed/m0IIdSY4-tI?si=L1I2bThMDATntLfy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'animal': {'Bear': '<iframe width="800" height="450" src="https://www.youtube.com/embed/ujMxbgtxhvE?si=ABzPyGMg3SO2SScB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Bird': '<iframe width="800" height="450" src="https://www.youtube.com/embed/Bibgy-yjgYE?si=qKTPs7zwTSuKNf9b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Cat': '<iframe width="800" height="450" src="https://www.youtube.com/embed/LzbVyRp_8Bg?si=r_kShDKkiaO5HNSp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Cow': '<iframe width="800" height="450" src="https://www.youtube.com/embed/Tp1xPjLHZUc?si=cIsWeamXZmqJ1gTL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Animal': '<iframe width="800" height="450" src="https://www.youtube.com/embed/IyMuDawJZu0?si=pJc-atL2P9W-V5iT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'elephant': '<iframe width="800" height="450" src="https://www.youtube.com/embed/0EYc8pG0F8s?si=o7Tq54oGEWez_XOt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'colors': {'Black': '<iframe width="800" height="450" src="https://www.youtube.com/embed/O5_4x8p5t4U?si=-XpnAmzgbkR7FiWp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Blue': '<iframe width="800" height="450" src="https://www.youtube.com/embed/JD2yYYdS4xg?si=01DkBSpD0DTF5J2Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'what is your favorite color': '<iframe width="800" height="450" src="https://www.youtube.com/embed/esaEnRd_poc?si=EIFkXLKzPT9J61D3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Pink': '<iframe width="800" height="450" src="https://www.youtube.com/embed/r2jlPLwy4So?si=67dEx1H12xNQobR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Red': '<iframe width="800" height="450" src="https://www.youtube.com/embed/pyW0OYYrZ7U?si=0_PHWoOp-nckL9qO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'white': '<iframe width="800" height="450" src="https://www.youtube.com/embed/uLjkLwFvFtw?si=LpAnQvKDotZtDdS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'color': '<iframe width="800" height="450" src="https://www.youtube.com/embed/Wzio7B5VT_I?si=Vu7U3jWSnF4X4KEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'feeling': {'Fine': '<iframe width="800" height="450" src="https://www.youtube.com/embed/p36SvJOPFEk?si=7UpoOi7mK0KdraDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Fun': '<iframe width="800" height="450" src="https://www.youtube.com/embed/hDYLTkXTSx4?si=w-2SsKWStx_fP-IH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Hungry': '<iframe width="800" height="450" src="https://www.youtube.com/embed/8ZOUoDZkAoQ?si=wrrxm4C_n5QrIT4z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Hot': '<iframe width="800" height="450" src="https://www.youtube.com/embed/a0robonALIk?si=ZhTl9p2evNhwlKNu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Happy': '<iframe width="800" height="450" src="https://www.youtube.com/embed/a0robonALIk?si=z1bqTAque_6BHyE2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Scared': '<iframe width="800" height="450" src="https://www.youtube.com/embed/OMEUC9FKU_k?si=PFR_7kG4SuzIcJPK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'SoSo': '<iframe width="800" height="450" src="https://www.youtube.com/embed/fhhBx_WQGAo?si=xTmoGgBKmlZg2qc5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'manners': {'Good morning': '<iframe width="800" height="450" src="https://www.youtube.com/embed/HWTOUetDsOk?si=QUoDmBOjb8jxmMhS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Help': '<iframe width="800" height="450" src="https://www.youtube.com/embed/VF-_ri_5Ua4?si=70R0aeGBVbXdmreH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'please': '<iframe width="800" height="450" src="https://www.youtube.com/embed/rnb9FxPO7is?si=6o9mvDPQSsdXtH93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Wait': '<iframe width="800" height="450" src="https://www.youtube.com/embed/YfwgS9ZsBVw?si=l1eQ3u9spR7j2xLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Sorry': '<iframe width="800" height="450" src="https://www.youtube.com/embed/jRHDjxWJma0?si=tbXqkbveItriK3HV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'people': {'Mother': '<iframe width="800" height="450" src="https://www.youtube.com/embed/4nGdzLPvoP4?si=lTleAqzv4jKVfD8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Father': '<iframe width="800" height="450" src="https://www.youtube.com/embed/UnAiMqWCzNs?si=f8yfs2hRFKjQZTa1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Baby': '<iframe width="800" height="450" src="https://www.youtube.com/embed/ljYpx7ee9zg?si=zKT68bq5lUWxXsbL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Doctor': '<iframe width="800" height="450" src="https://www.youtube.com/embed/IEVgcJA3JWk?si=83MbGBpVWryGFboK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Friend': '<iframe width="800" height="450" src="https://www.youtube.com/embed/6RRmIyhkMx0?si=hr7DLOknmuURMU__" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'time': {'Every Day': '<iframe width="800" height="450" src="https://www.youtube.com/embed/6f3CzewppcE?si=F2lnmHa3MTYPf5J8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Today': '<iframe width="800" height="450" src="https://www.youtube.com/embed/IlLRJ6jw4lY?si=n-iEBQjXHQNhXFnG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'weekend': '<iframe width="800" height="450" src="https://www.youtube.com/embed/o0D-dVMQr1E?si=6sj7qkM3XMKlGizJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Night': '<iframe width="800" height="450" src="https://www.youtube.com/embed/jNiRlzvjd5U?si=fb8t54TXcpomd_Iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Year': '<iframe width="800" height="450" src="https://www.youtube.com/embed/zTIJAgTai40?si=QeAsjNGvnC0VgAhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'month': '<iframe width="800" height="450" src="https://www.youtube.com/embed/YLuGuPS6NU8?si=LAH928xNCy1zlvc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'morning': '<iframe width="800" height="450" src="https://www.youtube.com/embed/iH8N44QMh7c?si=sSUxGEHlP0OnhKme" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'questions': {'How much': '<iframe width="800" height="450" src="https://www.youtube.com/embed/xqHh0rcmlcY?si=6Osuvx-kRV3C7xyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'What': '<iframe width="800" height="450" src="https://www.youtube.com/embed/1udGGPLkA-Q?si=isk6Rr_f5wDpdaCf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'When': '<iframe width="800" height="450" src="https://www.youtube.com/embed/YWxvqP__qos?si=NBTrzF3kwGaFIB3S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Who': '<iframe width="800" height="450" src="https://www.youtube.com/embed/wKl26BsEAoc?si=xpybtUgVjSI9YZCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Where': '<iframe width="800" height="450" src="https://www.youtube.com/embed/HS0SXS-GHYY?si=sAdx4uGu21a2f9f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'toys': {'Ball': '<iframe width="800" height="450" src="https://www.youtube.com/embed/vnmpdsQdbFc?si=oqFioE38pZML0LWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Airplane': '<iframe width="800" height="450" src="https://www.youtube.com/embed/9AUsuvqacho?si=vxggR2Xn8YFnDC2r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Boat': '<iframe width="800" height="450" src="https://www.youtube.com/embed/aDt-KNA-v04?si=0iQ7jg3M6dCXkt1S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Doll': '<iframe width="800" height="450" src="https://www.youtube.com/embed/-pmtb5ajCJQ?si=jdNZ0da2xdi_TvnC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Balloon': '<iframe width="800" height="450" src="https://www.youtube.com/embed/ymtzU09GfmU?si=Jev7_M0ULOCrm4YS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Football': '<iframe width="800" height="450" src="https://www.youtube.com/embed/jgfU7uDgV0k?si=-O0sViWbvIXh0VjF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},
'transportations': {'Bike': '<iframe width="800" height="450" src="https://www.youtube.com/embed/8yjqcyk-xwY?si=yDDLuPmnuz-0JXTf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'car': '<iframe width="800" height="450" src="https://www.youtube.com/embed/-NTyYtAyUPI?si=sN-8w_0ASM93nGUr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'train': '<iframe width="800" height="450" src="https://www.youtube.com/embed/yne0A8Z7ijU?si=gYiWk_HsDYVYKpfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Motorcycle': '<iframe width="800" height="450" src="https://www.youtube.com/embed/suzyI59Ryh0?si=S_32iNVaArYQKNSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
'Helicopter': '<iframe width="800" height="450" src="https://www.youtube.com/embed/hdiSoTueeN0?si=aQa0zCAtoUHWWiMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'}}



category.addEventListener("click",(e)=>{
    if(!e.target.className.includes("menu"))  return
    console.log("clicked");    
    const menu = e.target.className.split(" ")[1]    
    const keys = Object.keys(json[menu])    
    const values  = json[menu]
    console.log(menu, keys);
    title.textContent = menu

    group.innerHTML = ""
    keys.forEach(e => {        
        const button = document.createElement("div")
        button.textContent = e
        button.setAttribute("class", "button")
        group.appendChild(button)

    });
})
group.addEventListener("click",(e)=>{
    if(e.target.className != "button") return
    
    [...e.target.parentNode.querySelectorAll(".button")].map(e=>{
        e.className = "button"
    })
    e.target.className += " clicked"   
    
    
    const title = document.querySelector(".title").textContent
    const select = e.target.textContent        
    video.innerHTML = json[title][select]

})
const sticky = document.querySelector(".sticky")
window.onload = ()=>{
    let url = window.location.href
    url = url.substring(url.indexOf(":8000/")+6).split("/")    
    url = url.slice(url.length-2, url.length-1)[0]
    const e = sticky.querySelector("#"+url)
    console.log(url);
    sticky.removeChild(e)
}

sticky.addEventListener("mouseover",()=>{
    // sticky.style.height = "150px";
    
    [...sticky.querySelectorAll(".link")].map(e=>{
        e.classList.remove("hidden")
    })
})

sticky.addEventListener("mouseout",()=>{
    [...sticky.querySelectorAll(".link")].map(e=>{
        // sticky.style.height = "50px"
        e.classList.add("hidden")
    })
})