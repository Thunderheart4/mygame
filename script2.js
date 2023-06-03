let find=0
let y=[40, 280, 500]
let buy=document.querySelector('.buy')
let bg=document.querySelector('.bg')
let bg2=document.querySelector('.bg2')

let lv2=function(){
	buy.style.display='block'
	bg2.style.display='block'
	for(i=0; i<5; i++){
		let right=document.createElement('div')
		document.body.appendChild(right)
		right.classList.add('energetik')
		let randY1=Math.round(Math.random()*(y.length-1))
		right.style.top=y[randY1]+'px'
		let randX1=Math.round(Math.random()*1230)
		right.style.left=randX1+'px'
		right.onclick=function(){
			right.style.opacity='0%'
			find++
			if(find==5){
				let end=function(){
					bg.style.display='block'
					buy.style.opacity='0%'
				}
				setTimeout(end, 2000)
			}
		}
	}
	
	for(i=0; i<15; i++){
		let wrong=document.createElement('div')
		document.body.appendChild(wrong)
		wrong.classList.add('water')
		let randY2=Math.floor(Math.random()*y.length)
		wrong.style.top=y[randY2]+'px'
		let randX2=Math.round(Math.random()*1250)
		wrong.style.left=randX2+'px'
	}
}