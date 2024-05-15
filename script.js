const oneangle = document.querySelector(".angle")
const ample = document.querySelector("#this")
amplelove = 1
oneangle.addEventListener("click",()=>{
  if(amplelove === 1){
    ample.style.display = "flex"
     amplelove = 0
  }else{
    ample.style.display = "none"
    amplelove = 1
  }
})

const ampleone =document.querySelector("#thisone")
const angleone = document.querySelector(".angleone")
const closeone = document.querySelector(".closeone")
const closetwo = document.querySelector(".closetwo")

ampleloveone = 1
angleone.addEventListener("click",()=>{
  if(ampleloveone === 1){
    ampleone.style.display = "block"
    ampleloveone = 0
    closeone.style.display = "block"
    closetwo.style.display = "none"
  }else{
    ampleone.style.display = "none"
    closeone.style.display = "none"
    closetwo.style.display = "block"
    ampleloveone = 1
  }
})

const closethree = document.querySelector(".closethree")
const closefour = document.querySelector(".closefour")
const ampletwo =document.querySelector("#thistwo")
const angletwo = document.querySelector(".angletwo")
amplelovetwo = 1
angletwo.addEventListener("click",()=>{
  if(amplelovetwo === 1){
    ampletwo.style.display = "block"
    amplelovetwo = 0
    closethree.style.display = "block"
    closefour.style.display = "none"
  }else{
    ampletwo.style.display = "none"
    amplelovetwo = 1
    closethree.style.display = "none"
    closefour.style.display = "block"
  }
})
const closefive = document.querySelector(".closefive")
const closesix = document.querySelector(".closesix")
const amplethree =document.querySelector("#thisthree")
const anglethree = document.querySelector(".anglethree")
amplelovethree = 1
anglethree.addEventListener("click",()=>{
  if(amplelovethree === 1){
    amplethree.style.display = "block"
    amplelovethree = 0
    closefive.style.display = "block"
    closesix.style.display = "none"
  }else{
    amplethree.style.display = "none"
    amplelovethree = 1
    closefive.style.display = "none"
    closesix.style.display = "block"
  }
})
const closeseven = document.querySelector(".closeseven")
const closeeight = document.querySelector(".closeeight")
const amplefour =document.querySelector("#thisfour")
const anglefour = document.querySelector(".anglefour")

amplelovefour = 1
anglefour.addEventListener("click",()=>{
  if(amplelovefour === 1){
    amplefour.style.display = "block"
    amplelovefour = 0
    closeseven.style.display = "block"
    closeeight.style.display = "none"
  }else{
    amplefour.style.display = "none"
    amplelovefour = 1
    closeseven.style.display = "none"
    closeeight.style.display = "block"
  }
})
const closenine = document.querySelector(".closenine")
const closeten = document.querySelector(".closeten")
const amplefive =document.querySelector("#thisfive")
const anglefive = document.querySelector(".anglefive")
amplelovefive = 1
anglefive.addEventListener("click",()=>{
  if(amplelovefive === 1){
    amplefive.style.display = "block"
    amplelovefive = 0
    closenine.style.display = "block"
    closeten.style.display = "none"
  }else{
    amplefive.style.display = "none"
    amplelovefive = 1
    closenine.style.display = "none"
    closeten.style.display = "block"
  }
})