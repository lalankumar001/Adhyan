const button=document.getElementById('button');
button.addEventListener('click',(e) =>{
  e.preventDefault();

// see id class and may thing in html file
console.log(e.target.id);
document.querySelector('form').style.background='red'

document.querySelector('foum').classList.add('bg_dark');
}) ;