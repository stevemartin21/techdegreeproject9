

let alert = document.getElementById('alert');
let close = document.getElementById('close')

close.addEventListener('click', () =>{
	alert.style.display='none';
});

let random = $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

// Turn on and Off slider 

let switcher = document.getElementById('onOff');
let on = document.getElementById('on');
let off =document.getElementById('off');

switcher.addEventListener('change', () =>{
	off.style.display='none';
	on.style.display='inline';

	

});

let switcher2 = document.getElementById('onOff2');
let on2 = document.getElementById('on2');
let off2 =document.getElementById('off2');

switcher2.addEventListener('change', () =>{
	off2.style.display='none';
	on2.style.display='inline';

	

});




// Need to get the values for the select user and for the mssage //  Search for User and Message User

send.addEventListener('click', ()=>{

});