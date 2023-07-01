const arrows = document.querySelectorAll(".arrows>*")
const gallery = document.querySelector(".gallery")

const header = document.querySelector(".productName")
const para = document.querySelector(".productDesc")

const headers = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
]
const paras = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. ",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]


let x;
let i = 0
let curr = 0

arrows.forEach(e=>{
    e.addEventListener("click", ()=>{
        if(e.classList.contains("right")){
            i<gallery.childElementCount-1
            ?i++
            :i=gallery.childElementCount-1

            x = (gallery.scrollWidth/3)*i
        } else if(e.classList.contains("left")){
            i!==0
            ?i--
            :i=0
            x = (gallery.scrollWidth/3)*i
        }
        gallery.scroll({
            top: 0,
            left: x,
            behavior: "smooth",
        })
        
        if(curr!==i){
            header.className = "productName changing"
            para.className = "productDesc changing"

            setTimeout(()=>{
                header.className = "productName"
                para.className = "productDesc"
                header.textContent= headers[i]
                para.textContent=paras[i]
            }, 300)

            curr=i
        }


    })

})

setInterval(e=>{
    i<gallery.childElementCount-1
    ?i++
    :i=0
    x = (gallery.scrollWidth/3)*i
    gallery.scroll({
        top: 0,
        left: x,
        behavior: "smooth",
    })

    if(curr!==i){
        header.className = "productName changing"
        para.className = "productDesc changing"

        setTimeout(()=>{
            header.className = "productName"
            para.className = "productDesc"
            header.textContent= headers[i]
            para.textContent=paras[i]
        }, 300)

        curr=i
    }
}, 3000)


const btn = document.querySelector(".navBtn")
const nav = document.querySelector(".mobNav")

btn.addEventListener("click", ()=>{
    if(nav.dataset.state==="close"){
        nav.dataset.state="open"
        btn.style.insetBlock="50% auto"
    }else{
        nav.dataset.state="close"
        btn.style.insetBlock="auto -5%"
    }
})