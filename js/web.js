jQuery(".slide1").slide({mainCell:".slide1images .uls",autoPlay:true,vis:1,effect:"fade"});
jQuery(".slide2").slide({mainCell:".slide2images .uls",titCell:".slide2hd .uls li",autoPlay:true,vis:1,effect:"fade"});

jQuery(".slide3").slide({mainCell:".slide3images .uls",autoPlay:true,vis:1,effect:"fade"});
jQuery(".slide4").slide({mainCell:".slide4images .uls",autoPlay:true,vis:1,effect:"leftLoop"});
jQuery(".slide5").slide({mainCell:".slide5images .uls",autoPlay:true,vis:1,effect:"fade"});



var myVid=document.getElementById("Music");

//

function ToggleMusic(){
	if(myVid.paused){
		$("#MusicToggleButton").html('点击暂停音乐');
		myVid.play();
	}else{
		$("#MusicToggleButton").html('点击播放音乐');
		myVid.pause();
	}
}



var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	  autoplay:true,
	  delay: 2000,
	pagination: {
	el: '.swiper-pagination',
	clickable: true,
	},
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
});
 

$(document).ready(function() {

	$('.photoshow2').roundabout({
        btnNext: '#ZhiYe2 .move_rights',
        btnNextCallback: function() {
            var indexs = $(this).find(".roundabout-in-focus").index()
            $(".photoshow_select2").find("a:eq(" + indexs + ")").addClass("change").siblings().removeClass("change")
        },
        autoplay: true,
        autoplayDuration: 2000,
        autoplayPauseOnHover: true,
        autoplayCallback: function() {
            var indexs = $(this).find(".roundabout-in-focus").index()
            $(".photoshow_select2").find("a:eq(" + indexs + ")").addClass("change").siblings().removeClass("change")
        },
        btnPrev: '#ZhiYe2 .move_lefts',
        btnPrevCallback: function() {
            var indexs = $(this).find(".roundabout-in-focus").index()
            $(".photoshow_select2").find("a:eq(" + indexs + ")").addClass("change").siblings().removeClass("change")

        },
        duration: 300
    });



})