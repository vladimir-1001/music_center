$(".close_form").click(function(){
	$(".form_hide").hide(500);
	$(".form_hide_back").hide(500);
});
$(".demo").click(function(){
	$(".form_hide").show(500);
	$(".form_hide_back").show(500);
})
$(".control_image").click(function(){
	let att = $(this).attr("alt");
	let vid = $(".vid_pleer");
	switch(att){
		case 'play':
			vid.get(0).play();
			$(".button_video_hide").show(300);
			$(".button_video_show").hide(300);
			break;
		case 'pause':
			vid.get(0).pause();
			$(".button_video_hide").hide(300);
			$(".button_video_show").show(300);
			break;
		case 'stop':
			vid.get(0).load();
			$(".button_video_hide").hide(300);
			$(".button_video_show").show(300);
			break;
		case 'back':
			vid.get(0).currentTime-=10;
			break;
		case 'forward':
			vid.get(0).currentTime+=10;
			break;
		case 'sound_minus':
			vid.get(0).volume-=0.05;
			break;
		case 'sound_plus':
			vid.get(0).volume+=0.05;
			break;
		default:
		alert("Ошибка воспроизведения"+att);
			break;
	}
	setInterval(timer, 1000)
})
function timer(){
	let vid = $(".vid_pleer");
	let time = Math.round(vid.get(0).currentTime);
	let sound = vid.get(0).volume;
	let info = "Время: "+time+" сек, звук: "+Math.round(sound*100)+"%";
	$(".sound_data").text(info);
}


$(".control_image_2").click(function(){
	let num = $(this).attr("name");
	let atr = $(this).attr("alt");
	switch(num){
		case '1':
			let pleer = $("#sound_1");
				switch(atr){
					case 'pause':
						pleer.get(0).pause();
						$(".hide_butt_audio_1").hide(300);
						$(".show_butt_audio_1").show(300);
					break;
					case 'play':
						pleer.get(0).play();
						$(".hide_butt_audio_1").show(300);
						$(".show_butt_audio_1").hide(300);
					break;
					case 'stop':
						pleer.get(0).load();
						$(".hide_butt_audio_1").hide(300);
						$(".show_butt_audio_1").show(300);
					break;
					case 'sound_minus':
						pleer.get(0).volume-=0.05;
					break;
					case 'sound_plus':
						pleer.get(0).volume+=0.05;
					break;
					default:
						alert("Ошибка воспроизведения");
					break;
				}
		setInterval(timer_1, 1000);
		break;

		case '2':
			let pleer_2 = $("#sound_2");
				switch(atr){
					case 'pause':
						pleer_2.get(0).pause();
						$(".hide_butt_audio_2").hide(300);
						$(".show_butt_audio_2").show(300);
					break;
					case 'play':
						pleer_2.get(0).play();
						$(".hide_butt_audio_2").show(300);
						$(".show_butt_audio_2").hide(300);
					break;
					case 'stop':
						pleer_2.get(0).load();
						$(".hide_butt_audio_2").hide(300);
						$(".show_butt_audio_2").show(300);
					break;
					case 'sound_minus':
						pleer_2.get(0).volume-=0.05;
					break;
					case 'sound_plus':
						pleer_2.get(0).volume+=0.05;
					break;
					default:
						alert("Ошибка воспроизведения");
					break;
				}
		setInterval(timer_2, 1000);	
		break;

		case '3':
			let pleer_3 = $("#sound_3");
				switch(atr){
					case 'pause':
						pleer_3.get(0).pause();
						$(".hide_butt_audio_3").hide(300);
						$(".show_butt_audio_3").show(300);
					break;
					case 'play':
						pleer_3.get(0).play();
						$(".hide_butt_audio_3").show(300);
						$(".show_butt_audio_3").hide(300);
					break;
					case 'stop':
						pleer_3.get(0).load();
						$(".hide_butt_audio_3").hide(300);
						$(".show_butt_audio_3").show(300);
					break;
					case 'sound_minus':
						pleer_3.get(0).volume-=0.05;
					break;
					case 'sound_plus':
						pleer_3.get(0).volume+=0.05;
					break;
					default:
						alert("Ошибка воспроизведения");
					break;
				}
		setInterval(timer_3, 1000);
		break;

		case '4':
			let pleer_4 = $("#sound_4");
				switch(atr){
					case 'pause':
						pleer_4.get(0).pause();
						$(".hide_butt_audio_4").hide(300);
						$(".show_butt_audio_4").show(300);
					break;
					case 'play':
						pleer_4.get(0).play();
						$(".hide_butt_audio_4").show(300);
						$(".show_butt_audio_4").hide(300);
					break;
					case 'stop':
						pleer_4.get(0).load();
						$(".hide_butt_audio_4").hide(300);
						$(".show_butt_audio_4").show(300);
					break;
					case 'sound_minus':
						pleer_4.get(0).volume-=0.05;
					break;
					case 'sound_plus':
						pleer_4.get(0).volume+=0.05;
					break;
					default:
						alert("Ошибка воспроизведения");
					break;
				}
		setInterval(timer_4, 1000);
		break;
		default:
			alert("Ошибка воспроизведения");
		break;
	}
})
function timer_1(){
	let pleer = $("#sound_1");
	let time = Math.round(pleer.get(0).currentTime);
	let sound = pleer.get(0).volume;
	let info = "Время: "+time+" сек, звук: "+Math.round(sound*100)+"%";
	$(".audio_info_1").text(info);
	}
function timer_2(){
	let pleer = $("#sound_2");
	let time = Math.round(pleer.get(0).currentTime);
	let sound = pleer.get(0).volume;
	let info = "Время: "+time+" сек, звук: "+Math.round(sound*100)+"%";
	$(".audio_info_2").text(info);
	}
function timer_3(){
	let pleer = $("#sound_3");
	let time = Math.round(pleer.get(0).currentTime);
	let sound = pleer.get(0).volume;
	let info = "Время: "+time+" сек, звук: "+Math.round(sound*100)+"%";
	$(".audio_info_3").text(info);
	}
function timer_4(){
	let pleer = $("#sound_4");
	let time = Math.round(pleer.get(0).currentTime);
	let sound = pleer.get(0).volume;
	let info = "Время: "+time+" сек, звук: "+Math.round(sound*100)+"%";
	$(".audio_info_4").text(info);
	}
$(".capability_drop").click(function(){
	$(this).children(".drop_text").toggle(500);
	let image = $(this).children("img").attr("src");
	if(image == "images/plus_circle.svg"){
		$(this).children("img").attr("src","images/minus_circle.svg");
	}
	else{
		$(this).children("img").attr("src","images/plus_circle.svg");	
	}
});
document.querySelector(".form_butt_hide").addEventListener("click",function(){
	let name=document.querySelector(".input_hide_1").value;
	let phone=document.querySelector(".input_hide_2").value;
	console.log(name);
	console.log(phone);
})
document.querySelector(".form_butt").addEventListener("click",function(){
	let name=document.querySelector(".form_input_1").value;
	let phone=document.querySelector(".form_input_2").value;
	console.log(name);
	console.log(phone);
})


window.onload=function qw(name){
 x = 55.740790;
 y = 37.626216;
 maps(x,y);
}
function maps(a,b){
map = new ymaps.Map("card",{
	center:[a,b],
	zoom:17
});
var myPlacemark = new ymaps.Placemark([a, b]);
	map.geoObjects.add(myPlacemark);
}
function test(err){
	alert(err.code);
}
$('[data_tooltip]').mousemove(function(ev){
	let data = $(this).attr('data_tooltip');
	$('#tooltip').text(data).css({"top": ev.pageY + 20, "left": ev.pageX - 80}).show();
}).mouseout(function(){
	$('#tooltip').hide().text("").css({"top": 0, "left": 0});
});
$(".sendwich").click(function(){
	$(".mobile_menu").toggle(500);
})