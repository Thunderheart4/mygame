var player=document.querySelector('.player')
var player_ch={
	hp: 100,
	atk: [10, 20, 30],
}
var shuichi=document.querySelector('.shuichi')
var shuichi_ch={
	atk: 5,
	gu: 0,
}

let btn=document.querySelector('.btn')
let btn_fight=document.querySelector('.btn-fight')
let btn_act=document.querySelector('.btn-act')
let btn_gu=document.querySelector('.btn-gu')
let btns_act=document.querySelector('.btns-act')
let btn_bescared=document.querySelector('.btn-bescared')
let btn_bescary=document.querySelector('.btn-bescary')

let loc1=document.querySelector('.loc1')
let staff=document.querySelector('.staff')
let bg_fight=document.querySelector('.bg-fight')
let dia=document.querySelector('.dialogue')
let txt=document.querySelector('.txt')
let hp_span=document.querySelector('.hp-span')
let gu_span=document.querySelector('.gu-span')
let try_bescared=0
let try_bescary=0
let ms_death=document.querySelector('.ms-death')
let gen_txt=document.querySelector('.gen-txt')

let pass=0

let dmg=function(){
	player_ch.hp=player_ch.hp-shuichi_ch.atk
	hp_span.innerHTML=player_ch.hp
}

document.addEventListener('keydown', function(go){
	if(go.code=='KeyW'){
		player.style.top='200px'
		shuichi.style.top='150px'
		let fight=function(){
			loc1.style.opacity='0%'
			staff.style.display='none'
			bg_fight.style.opacity='50%'
			player.style.left='200px'
			shuichi.style.opacity='100%'
			shuichi.style.left='1000px'
			shuichi.style.top='200px'
			dia.style.opacity='100%'
			txt.innerHTML='Вы столкнулись с Шюичи!'

// атака

			btn_fight.onclick=function(){
					let ran=Math.floor(Math.random()*player_ch.atk.length)
					btn.style.display='none'
					if(player_ch.atk[ran]==10){
						txt.innerHTML='Вы нанесли слабый удар. Зеркало немного потрескалось. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								console.log('dmg')
								btn.style.display='block'
								txt.innerHTML='Продавец что-то громко обсуждает по телефону на мальдивском.'
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%'
									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}

					else if(player_ch.atk[ran]==20){
						txt.innerHTML='Вы нанесли средний удар. Зеркало потрескалось. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								console.log('dmg')
								btn.style.display='block'
								txt.innerHTML='Вы ищите скотч, чтобы заклеить трещины.'
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%'
									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}

					else if(player_ch.atk[ran]==30){
						txt.innerHTML='Вы нанесли сильный удар. Зеркало разбилось. >>'
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								bg_fight.style.opacity='0%'
								dia.style.opacity='0%'
								loc1.style.opacity='100%'
								shuichi.style.display='none'
								player.style.left='600px'
								player.style.top='200px'
								document.addEventListener('keydown', function(buy){
								if(buy.code='KeyD'){
									player_ch.hp=100
									dmg=null
									console.log(player_ch.hp)
									player.style.left='900px'
									player.style.opacity='0%'
									loc1.style.opacity='0%'
									gen_txt.innerHTML='Вы спокойно купили зеркало. Продавец был так увлечен разговором по телефону, что не заметил происходившего. После этого вы пошли за продуктами. >>'
									gen_txt.style.opacity='100%'
									document.addEventListener('keydown', function(next){
										if(next.code='KeyE'){
											gen_txt.style.opacity='0%'
											setTimeout(lv2, 1000)
										}
									})
								}
							})
							}
						})
					}
			}

// действие

			btn_act.onclick=function(){
				btn.style.display='none'
				btns_act.style.display='block'
				btn_bescared.onclick=function(){
					if(try_bescared==0){
						try_bescared++
						shuichi_ch.gu=shuichi_ch.gu+20
						gu_span.innerHTML=shuichi_ch.gu+'%'
						btns_act.style.display='none'
						txt.innerHTML='Вы в "страхе" прижались к стене. Шюичи улыбнулся. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								btn.style.display='block'
								btns_act.style.display='none'
								txt.innerHTML='Вы стоите у стены.'
								console.log('dmg')
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%';									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}
					else if(try_bescared==1){
						try_bescared++
						shuichi_ch.gu=shuichi_ch.gu+20
						gu_span.innerHTML=shuichi_ch.gu+'%'
						btns_act.style.display='none'
						txt.innerHTML='Вы в "страхе" забились в угол. Шюичи улыбнулся. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								btn.style.display='block'
								txt.innerHTML='Вы стоите в углу.'
								console.log('dmg')
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%'
									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}
					else if(try_bescared>=2){
						try_bescared++
						shuichi_ch.gu=shuichi_ch.gu+20
						gu_span.innerHTML=shuichi_ch.gu+'%'
						btns_act.style.display='none'
						txt.innerHTML='Вы дрожите от "страха". Шюичи улыбнулся. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								btn.style.display='block'
								txt.innerHTML='Вы стоите в углу.'
								console.log('dmg')
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%'
									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}
				}



				btn_bescary.onclick=function(){
					if(try_bescary==0){
						try_bescary++
						shuichi_ch.gu=shuichi_ch.gu+20
						gu_span.innerHTML=shuichi_ch.gu+'%'
						btns_act.style.display='none'
						txt.innerHTML='Вы угрожающе качаете своим оружием. Шюичи понравилось. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								btn.style.display='block'
								btns_act.style.display='none'
								txt.innerHTML='Вы стоите.'
								console.log('dmg')
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%'
									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}
					else if(try_bescary==1){
						try_bescary++
						shuichi_ch.gu=shuichi_ch.gu+20
						gu_span.innerHTML=shuichi_ch.gu+'%'
						btns_act.style.display='none'
						txt.innerHTML='Вы проводите пальцем у шеи. Шюичи понравилось. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								btn.style.display='block'
								txt.innerHTML='Вы вжились в роль.'
								console.log('dmg')
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%'
									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}
					else if(try_bescary>=2){
						try_bescary++
						shuichi_ch.gu=shuichi_ch.gu+20
						gu_span.innerHTML=shuichi_ch.gu+'%'
						btns_act.style.display='none'
						txt.innerHTML='Вы смотрите исподлобья. Шюичи понравилось. >>'
						setTimeout(dmg, 1000)
						document.addEventListener('keydown', function(skip){
							if(skip.code='KeyE'){
								btn.style.display='block'
								txt.innerHTML='Вы жутко стоите.'
								console.log('dmg')
								let death=function(){
									bg_fight.style.opacity='0%'
									dia.style.opacity='0%'
									player.style.display='none'
									shuichi.style.display='none'
									ms_death.style.display='block'
								}
								if(player_ch.hp<=0){
									setTimeout(death, 1000)
								}	
							}
						})
					}
				}
			}

// сдаться

			btn_gu.onclick=function(){
				btn.style.display='none'
				txt.innerHTML='Вы пропустили ход. >>'
				setTimeout(dmg, 1000)
				document.addEventListener('keydown', function(skip){
					console.log('dmg')
					btn.style.display='block'
					txt.innerHTML='Вы стоите.'
				})
				if(shuichi_ch.gu>=100){
					txt.innerHTML='Вы пропустили ход. Шюичи сдался. Бой окончен. >>'
					document.addEventListener('keydown', function(skip){
						if(skip.code='KeyE'){
							loc1.style.opacity='100%'
							bg_fight.style.opacity='0%'
							dia.style.opacity='0%'
							shuichi.style.display='none'
							player.style.left='600px'
							player.style.top='200px'
							document.addEventListener('keydown', function(buy){
								if(buy.code='KeyD'){
									console.log(player_ch.hp)
									player.style.left='900px'
									player.style.opacity='0%'
									loc1.style.opacity='0%'
									gen_txt.innerHTML='Вы спокойно купили зеркало. Продавец был так увлечен разговором по телефону, что не заметил происходившего. После этого вы пошли за продуктами. >>'
									gen_txt.style.opacity='100%'
									document.addEventListener('keydown', function(next){
										if(next.code='KeyE'){
											gen_txt.style.opacity='0%'
											setTimeout(lv2, 1000)
										}
									})
								}
							})
						}
					})
				}
			}
		}
		setTimeout(fight, 2000)
	}
})