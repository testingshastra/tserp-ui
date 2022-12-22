
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* End Top arrow icon css */


/* slider1 js */

		
	outtester = document.getElementsByClassName('scrolly');
for(var i = 0; i < outtester.length; i++){
scrollification('scrolly', setyup = {
    i: i,
    scrollCont: '.carouselPre', 
    itemsScroll: '.itemsC',
    customButtons: true, 
    butLeft: '#left', 
    butRight: '#right'})
}
function scrollification(mainConter ,setyup = {i, scrollcont, itemsScroll, customButtons, butLeft, butRight}){
    if(setyup.i == null){
        out = document.getElementsByClassName(mainConter)[0];
    }else{
        out = document.getElementsByClassName(mainConter)[setyup.i];
    }
    
    if(setyup.customButtons == true){
        l = out.querySelector(setyup.butLeft);
        r = out.querySelector(setyup.butRight);
    }

var out,
a = out.querySelector(setyup.scrollCont),l, r,
q =  out.querySelectorAll(setyup.itemsScroll);

$(l).click(function(){getBack();});

$(r).click(function(){getNext();});

function getNext(){
    for(var i = 0; i < q.length; i++){
        if(q[i].getBoundingClientRect().left <= a.getBoundingClientRect().left + 50){
            var index = q[i].offsetWidth;
            $(a).scrollLeft($(a).scrollLeft() + index);
        }
    }
}
function getBack(){
for(var i = 1; i < q.length; i++){
    if(q[i].getBoundingClientRect().left < a.getBoundingClientRect().left + 50){
        var index = q[i - 1].offsetWidth;
        $(a).scrollLeft($(a).scrollLeft() - index);}}}
}
		
		/* End slider1 js */

		
		/* jquery login form */
		
			
			$(function() {
				
				$(".login-form").show();
				$(".registration-form").hide();
				$(".forgot-pass-form").hide();
				
				$('.register-button').click(function(){
					$(".login-form").hide();
					$(".registration-form").show();
					$(".forgot-pass-form").hide();			
				});

				$('.login-button').click(function(){
					$(".login-form").show();
					$(".registration-form").hide();
					$(".forgot-pass-form").hide();
				});

				$('.forgot-pass-button').click(function(){
					$(".login-form").hide();
					$(".registration-form").hide();
					$(".forgot-pass-form").show();
				});

			});

		


		/* javascript whatsaap icon */
		
		function myFunction(id) {
		  var x = document.getElementById(id);
		  if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		  } else { 
			x.className = x.className.replace(" w3-show", "");
		  }
		}
		