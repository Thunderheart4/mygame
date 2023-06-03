let div=document.querySelector('.div')
function skip(s){
	alert('skipped')
	div.removeEventListener('lol', skip)
}
div.addEventListener('lol' skip);
