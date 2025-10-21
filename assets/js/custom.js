$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});	


// 6. Mail service with enhanced validation

document.getElementById('sendButton').addEventListener('click', function(event) {
	event.preventDefault();
	
	var name = document.getElementById('name').value.trim();
	var email = document.getElementById('email').value.trim();
	var subject = document.getElementById('subject').value.trim();
	var message = document.getElementById('comment').value.trim();

	// Email validation regex
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (name === '') {
		alert('Veuillez entrer votre nom');
		document.getElementById('name').focus();
		return;
	}

	if (email === '') {
		alert('Veuillez entrer votre email');
		document.getElementById('email').focus();
		return;
	}

	if (!emailRegex.test(email)) {
		alert('Veuillez entrer une adresse email valide');
		document.getElementById('email').focus();
		return;
	}

	if (subject === '') {
		alert("Veuillez entrer l'objet du message");
		document.getElementById('subject').focus();
		return;
	}

	if (message === '') {
		alert('Veuillez entrer votre message');
		document.getElementById('comment').focus();
		return;
	}

	// Create mailto link with improved formatting
	var mailtoLink = 'mailto:info@victoirekitenge.tech' + 
		'?subject=' + encodeURIComponent(subject) + 
		'&body=' + encodeURIComponent(
			'Message de: ' + name + '\n' +
			'Email: ' + email + '\n' +
			'------------------\n\n' +
			message
		);

	window.location.href = mailtoLink;
	
	// Show success message
	alert('Merci pour votre message! Votre client email va s\'ouvrir.');
});
