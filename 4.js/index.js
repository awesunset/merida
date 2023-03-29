// 나브이벤트


$(document).ready(function () {
	$(".gnb").unbind("hover").hover(function () {
		$("header").toggleClass("on");
		$(".snb").stop().slideToggle(280);
	});
	$(".gnb").unbind("hover").hover(function () {
		$(".shadow").toggleClass("on");
	})
});






// sec01슬라이드쇼

$(document).ready(function () {
	$(".mySlideDiv").not(".active").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김
	
	setInterval(nextSlide, 4000); //4초(4000)마다 다음 슬라이드로 넘어감
});

//이전 슬라이드
function prevSlide() {
	$(".mySlideDiv").hide(); //모든 div 숨김
	var allSlide = $(".mySlideDiv"); //모든 div 객체를 변수에 저장
	var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수
	
	//반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
	$(".mySlideDiv").each(function(index,item){ 
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	//새롭게 나타낼 div의 index
	var newIndex = 0;
    
	if(currentIndex <= 0) {
		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
		newIndex = allSlide.length-1;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
		newIndex = currentIndex-1;
	}

	//모든 div에서 active 클래스 제거
	$(".mySlideDiv").removeClass("active");
    
	//새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
	$(".mySlideDiv").eq(newIndex).addClass("active");
	$(".mySlideDiv").eq(newIndex).show();

}

//다음 슬라이드
function nextSlide() {
	$(".mySlideDiv").hide();
	var allSlide = $(".mySlideDiv");
	var currentIndex = 0;
	
	$(".mySlideDiv").each(function(index,item){
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	var newIndex = 0;
	
	if(currentIndex >= allSlide.length-1) {
		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
		newIndex = 0;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
		newIndex = currentIndex+1;
	}

	$(".mySlideDiv").removeClass("active");
	$(".mySlideDiv").eq(newIndex).addClass("active");
	$(".mySlideDiv").eq(newIndex).show();
	
}



// sec02스와이퍼
var swiper = new Swiper('.sec02 .swiper-container', {
	navigation : {
		  nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		  prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	  },
	slidesPerView: 3.5,
	loop: true,
	loopAdditionalSlides : 1,
	autoplay: {
	delay: 1000,
	disableOnInteraction: false,}, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.},
	spaceBetween: 80,
	slideToClickedSlide: true,
	lazy : {
		loadPrevNext : true // 이전, 다음 이미지는 미리 로딩
	},
  });


//   sec05스와이퍼
  var swiper = new Swiper(".sec05 .mySwiper", {
	navigation: {
	  nextEl: ".sec05 .swiper-button-next",
	  prevEl: ".sec05 .swiper-button-prev",
	},
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,},
		effect : 'fade', //페이드효과
  });

//마우스오버했을때 스와이퍼 일시정지
  $('img').on('mouseover', function(){
	swiper.autoplay.stop();
	  /* 이미지 호버시 조명off 이미지 나타내기 */
	$('.off').css('display','block');
  });
  $('img').on('mouseout', function(){
	swiper.autoplay.start();
	$('.off').css('display','none')
  });



// sec06 탭 가로형

$(function(){
    // 탭메뉴 가로형
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
});