(function($) {
    "use strict";
    $(".mobile-toggle").click(function(){
        $(".nav-menus").toggleClass("open");
    });
    $(".mobile-search").click(function(){
        $(".form-control-plaintext").toggleClass("open");
    });
    $(".form-control-plaintext").keyup(function(e){
        if(e.target.value) {
            $("body").addClass("offcanvas");
            } else {
            $("body").removeClass("offcanvas");
        }
    });
})(jQuery);

$('.loader-wrapper').fadeOut('slow', function() {
    $(this).remove();
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
        } else {
        $('.tap-top').fadeOut();
    }
});
$('.tap-top').click( function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

/* function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    $("#ctr").css('max-width', '1920px');
    $("#ctr").css('max-height', '1080px');
    var val = '1';
    responsive(val);
    if (document.documentElement.requestFullScreen) {
    document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    } else {
    $("#ctr").css('max-width', '');
    $("#ctr").css('max-height', '');
    var val = '0';
    responsive(val)
    if (document.cancelFullScreen) {
    document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
    }
    }
} */


/* function requestFullScreen(el) {
    alert('aaaa');
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    
    if (requestMethod) { 
    requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { 
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
    wscript.SendKeys("{F11}");
    }
    }
    return false
    }
    
    function openFullscreen(el) {
    if (!el) {
    el = document.getElementById("ctr"); 
    }
    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
    
    if (isInFullScreen) {
    cancelFullScreen();
    } else {
    requestFullScreen(el);
    }
    return false;
}  */
var counter = 1;
function next_slide() 
{ 
	$('.content').hide();
    counter++;
	$('#content-'+counter+'').show();
    $('#content-'+counter+'').addClass('slide_show');
	if(counter > 1) 
    {
		$('.back').show();
    };
	if(counter == 3) {
		$('.next').hide();
    };
    $.cookie('slide_id',counter);
    $('#page_no').val(counter);
	for(i=1;i<=15;i++)
	{
		$('#img-preview-parent-'+i).slick('slickUnfilter');
	}
};

function back_slide() 
{ 
    var ids = counter;   
    
    $('#content-'+ids+'').removeClass('slide_show');
    // alert(counter);
    counter--;
    $('.content').hide();
    var id = counter;    
	$('#content-'+id).show();
    $.cookie('slide_id',id);
    
    if(counter<2)
    {
        $('.back').hide();
    }
    else
    {
        $('.next').show();
    }
    $('#page_no').val(id);
	for(i=1;i<=15;i++)
	{
		$('#img-preview-parent-'+i).slick('slickUnfilter');
	}
}
document.getElementById('ctr').addEventListener('fullscreenchange', (event) => {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If not, the value
    // of the property is null.
    if (document.fullscreenElement) {
        var val = '1';
        $('#delay_times').hide();
        $('#title_color_ctr').hide();
        $('#label_color_ctr').hide();
        $('#price_color_ctr').hide();
        $('#heading_color_ctr').hide();
        $('#back_color_ctr').hide();
        responsive(val);
        showSlides();
    } 
    else 
    {
        $("#ctr").css('max-width', '');
        $("#ctr").css('max-height', '');
        var val = '0';
        $('#delay_times').show();
        $('#title_color_ctr').show();
        $('#label_color_ctr').show();
        $('#price_color_ctr').show();
        $('#heading_color_ctr').show();
        $('#back_color_ctr').show();
        responsive(val);
        myStopFunction();
        
    }
	
});

document.getElementById('viewfullscreen').addEventListener('click', (event) => {
    if (document.fullscreenElement) {
        // exitFullscreen is only available on the Document object.
        document.exitFullscreen();
        } else {
        document.getElementById('ctr').requestFullscreen();
    }
});

function responsive(val)
{
    
    if(val == '1')
    {
        if ((window.screen.width) >= '1820' && (window.screen.width) <= '1920') 
        {
            $(".goat_head ").css({'font-size': '40px', 'line-height': '108px'});
            $(".lefmid.nefiwidht1").css({'width': '45%'});
            $(".lefmid.nefiwidht").attr('style', 'width: 52%');
            $(".innerbox").attr('style', 'paddint-top:25px');
            $(".howie3").attr('style', 'width: 155px;padding-top: 16px;');
            $(".lefmid1").attr('style', 'width: 36%;');
            $(".fontx2.jio").attr('style', 'top: 175px;');

            $(".htilr").attr('style', 'font-size: 84px;');
            $(".header_input_left").attr('style', 'width: 1268px;margin-right: 187px;');
            $(".chicken_burger").attr('style', 'top: 15px; right: -175px;  width: 160px;');
            $(".pc_board").attr('style', 'width: 356px;');
            $(".absoluteimg").attr('style', 'top: 120px; left: 284px;');
            $(".absoluteimg2").attr('style', 'top: 130px; left: 465px;');
            $(".absoluteimg3").attr('style', 'left: -358px; bottom: -181px;');
            $(".wings_1").attr('style', 'width: 240px;');
            $(".wings_3").attr('style', 'width: 500px;');
            $(".combo").attr('style', 'width: 225px;');
            $(".combo_content_bold").attr('style', 'font-size: 22px;');
            $(".pc").attr('style', 'font-size: 24px;');
            $(".wings_title input").attr('style', 'width: 233px; font-size:48px;');
            $(".wings_Serve input").attr('style', 'font-size: 20px;');
            $(".menu_items_single").attr('style', 'width: 270px;');
            $(".menu_items_single input").attr('style', 'font-size: 40px;');
            $(".wings_flavors").attr('style', 'margin-top: 10px; height:200vh;');
            $(".menu_items_wrapper").attr('style', 'padding-top: 50px;');
            $(".wings_title").attr('style', 'padding-top: 5px;');

            $(".stage img").attr('style', 'height: 355px;');
            $(".fontx").attr('style', 'font-size: 50px;height: auto;');
            $(".fontx1").attr('style', 'font-size: 26px;');
            $("#back_display3").attr('style', 'display: none;');
            $(".fontx2").attr('style', 'font-size: 45px;');
            $(".inneboximg").attr('style', 'width: 415px;');
            $(".topimgox").attr('style', 'width: 50%;');
            $(".fontx2.jio").attr('style', 'width: 147px;top: 186px;left: 402px;font-size: 45px;');
        }
        else if ((window.screen.width) >= '1267' && (window.screen.width) <= '1367') 
        {
            $(".lefmid.nefiwidht1").css({'width': '45%'});
            $(".lefmid.nefiwidht").attr('style', 'width: 52%');
            $(".innerbox").attr('style', 'paddint-top:25px');
            $(".howie3").attr('style', 'width: 155px;padding-top: 16px;');
            $(".lefmid1").attr('style', 'width: 36%;');
            $(".fontx2.jio").attr('style', 'top: 175px;');
            $(".htilr").attr('style', 'font-size: 48px;');
            $(".header_input_left").attr('style', 'width: 626px;margin-right: 187px;');
            $(".chicken_burger").attr('style', 'top: 15px; right: -175px;  width: 160px;');
            $(".pc_board").attr('style', 'width: 356px;');
            $(".absoluteimg").attr('style', 'top: 120px; left: 284px;');
            $(".absoluteimg2").attr('style', 'top: 130px; left: 465px;');
            $(".absoluteimg3").attr('style', 'left: -358px; bottom: -181px;');
            $(".wings_1").attr('style', 'width: 240px;');
            $(".wings_3").attr('style', 'width: 500px;');
            $(".combo").attr('style', 'width: 225px;');
            $(".combo_content_bold").attr('style', 'font-size: 22px;');
            $(".pc").attr('style', 'font-size: 24px;');
            $(".wings_title input").attr('style', 'width: 233px; font-size:48px;');
            $(".wings_Serve input").attr('style', 'font-size: 20px;');
            $(".menu_items_single").attr('style', 'width: 210px;');
            $(".wings_flavors").attr('style', 'margin-top: 10px; height:200vh;');
            $(".menu_items_wrapper").attr('style', 'padding-top: 50px;');
            $(".wings_title").attr('style', 'padding-top: 5px;');
            

            $(".stage img").attr('style', 'height: 220px;');             // image
            $(".fontx").attr('style', 'font-size: 30px;height: auto;'); // Title
            $(".fontx1").attr('style', 'font-size: 20px;');            //  Description
            $("#back_display3").attr('style', 'display: none;');      //  Backgrount Image icon
            $(".fontx2").attr('style', 'font-size: 30px;');           // Price
            $(".inneboximg").attr('style', 'width: 300px;');          //  Images
            $(".topimgox").attr('style', 'width: 50%;');              //  Image Wrapper, Content Wrapper
            $(".fontx2.jio").attr('style', 'width: 147px;top: 130px;left: 191px;font-size: 28px;');  // absolute item 
            $(".lowerboxs").attr('style', 'margin-top: 20px;');  // lowerBoxs
            $(".topimgox.rti").attr('style', 'width: 222px;left: -46px;');  // 
        } 
        else
        {
            $(".goat_head ").css({'font-size': '', 'line-height': ''});
			$(".lefmid.nefiwidht1").css({'width': ''});
			$(".lefmid.nefiwidht").css({'width': ''});
			$(".innerbox").css({'paddint-top': ''});
			$(".howie3").css({'width': '','padding-top': ''});
			$(".lefmid1").css({'width': ''});
			$(".fontx2.jio").css({'top': ''});
			$(".htilr").css({'font-size': ''});
			$(".htilr").css({'font-size': ''});
            $(".pc_board").css({'width': ''});
            $(".absoluteimg").css({'top': '','left':''});
            $(".absoluteimg2").css({'top': '','left':''});
            $(".absoluteimg3").css({'left': '','bottom':''});
            $(".wings_1").css({'width': ''});
            $(".wings_3").css({'width': ''});
            $(".combo").css({'width': ''});
            $(".combo_content_bold").css({'font-size': ''});
            $(".pc").css({'font-size': ''});
            $(".header_input_left").css({'width': '','margin-right':''});
            $(".wings_title input").css({'width': ''});
            $(".menu_items_single").css({'width': ''});
            $(".menu_items_single input").css({'font-size': ''});
            $(".wings_flavors").css({'height': '', 'margin-top': ''});
            $(".menu_items_wrapper").css({'padding-top': ''});
            $(".wings_Serve input").css({'font-size': ''});
            $(".wings_title").css({'padding-top': ''});
            

            $(".chicken_burger").css({'top': '', 'right': '', 'width' : ''});
			$(".stage img").css({'width':'' ,'height': ''});
			$(".fontx").css({'font-size': '','height': ''});
			$(".fontx1").css({'font-size': ''});
			$("#back_display3").attr('style', 'display: block;');
			$(".fontx2").css({'font-size': ''});
			$(".inneboximg").css({'width': ''});
			$(".topimgox").css({'width': ''});
			$(".fontx2.jio").css({'width': '','top': '','left': '','font-size':''});
			$(".lowerboxs").css({'margin-top': ''});
			$(".topimgox.rti").css({'width': '','left': ''});
        }
    }
    else
    {

        $(".goat_head ").css({'font-size': '', 'line-height': ''});
		$(".lefmid.nefiwidht1").css({'width': ''});
		$(".lefmid.nefiwidht").css({'width': ''});
		$(".innerbox").css({'paddint-top': ''});
		$(".howie3").css({'width': '','padding-top': ''});
		$(".lefmid1").css({'width': ''});
		$(".fontx2.jio").css({'top': ''});
		$(".htilr").css({'font-size': ''});
		$(".htilr").css({'font-size': ''});
        $(".header_input_left").css({'width': '','margin-right':''});
        $(".chicken_burger").css({'top': '', 'right': '', 'width' : ''});
        $(".pc_board").css({'width': ''});
        $(".absoluteimg").css({'top': '','left':''});
        $(".absoluteimg2").css({'top': '','left':''});
        $(".absoluteimg3").css({'left': '','bottom':''});
        $(".wings_1").css({'width': ''});
        $(".wings_3").css({'width': ''});
        $(".combo").css({'width': ''});
        $(".combo_content_bold").css({'font-size': ''});
        $(".pc").css({'font-size': ''});
        $(".wings_title input").css({'width': ''});
        $(".menu_items_single").css({'width': ''});
        $(".menu_items_single input").css({'font-size': ''});
        $(".wings_flavors").css({'height': '', 'margin-top': ''});
        $(".menu_items_wrapper").css({'padding-top': ''});
        $(".wings_Serve input").css({'font-size': ''});
        $(".wings_title").css({'padding-top': ''});
        
        
		$(".stage img").css({'width':'' ,'height': ''});
		$(".fontx").css({'font-size': '','height': ''});
		$(".fontx1").css({'font-size': ''});
		$("#back_display3").attr('style', 'display: block;');
		$(".fontx2").css({'font-size': ''});
		$(".inneboximg").css({'width': ''});
		$(".topimgox").css({'width': ''});
		$(".fontx2.jio").css({'width': '','top': '','left': '','font-size':''});
		$(".lowerboxs").css({'margin-top': ''});
		$(".topimgox.rti").css({'width': '','left': ''});

    }
}
var slideIndex = 0;
var slidetime;
function showSlides() {
    
    var i;
    var slides = document.getElementsByClassName("slide_show");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    slidetime = setTimeout(showSlides, 10000); // Change image every 2 seconds
	for(i=1;i<=15;i++)
	{
		$('#img-preview-parent-'+i).slick('slickUnfilter');
	}
} 
function myStopFunction() {
     $('.content').hide();
    //alert($.cookie('slide_id'));
    var slide_id = $.cookie('slide_id');
    $('#content-'+slide_id).show();
     if(slide_id == null)
     {
          $('#content-1').show();
     }
    clearTimeout(slidetime);
}