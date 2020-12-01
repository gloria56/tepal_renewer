$(document).ready(function(){
    $('.menu-bt').click(function(){
        $('.menu').slideDown();
    });
    
    $('.closebt').click(function(){
        $('.menu').slideUp();
    });
    var benner = $('.benner-text');
	var s3 = $('.s3');
	
    benner.find('h2').addClass('fadeIn');
    
//	$(window).scroll(function(){
//        if($(this).scrollTop() > benner.offset().top - $(this).height()){
//            benner.find('h2').addClass('fadeIn');
//        }else{
//            benner.find('h2').removeClass('fadeIn');
//        }
//		if($(this).scrollTop() > s3.offset().top - $(this).height()){
//			s3.find('h2').addClass('fadeIn');
//			s3.find('.bn-colorbox1').addClass('slideup');
//			s3.find('.bn-colorbox2').addClass('box2slideup');
//		}else{
//			s3.find('h2').removeClass('fadeIn');
//			s3.find('.bn-colorbox1').removeClass('slideup');
//			s3.find('.bn-colorbox2').removeClass('box2slideup');
//		}
//	});
});



