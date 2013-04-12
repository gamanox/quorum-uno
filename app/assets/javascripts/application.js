// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(function() {
	
	
	$.address.change(function (event) {
		console.log(event.value);
		switch(event.value)
		{
			// home/content?article=12&id=5
			
			case '/home/content?article=' + $.address.parameter('article') + '&id=' + $.address.parameter('id'):
			console.log('entro');
			$.ajax({
				type:'GET',
				url: event.path,
				data: "article=" + $.address.parameter('article') + '&id=' + $.address.parameter('id')

			});
			
			break;
		}
		
	});
	
	

    $(window).resize(function () { sizes(); });
    function sizes() { $(".bgs").centers(); }

    $.fn.centers = function () {
        var w = $(window).width(),
            wl = $(this).width(),
            resw = parseInt((w - wl) / 2),
            $this = $(this);
        return this.each(function () {
            $this.css({ left: resw });
        });
    }

    sizes();

    $(window).load(function(){
        $("body").animate({scrollTop:0},300);
        setTimeout(function(){
            $('html, body').css({overflowY:'scroll'});
            charge_loaders();
            byeloader();
        },1000);        
    });

    /*$.address.change(function(event) {
        console.log(event.value)
        var ventana=(window.location.href);
        var admin= ventana.split("=", 2);
        switch(event.value){
            case '/users/sign_in':
                services(service);
            break;
        }
    });*/

    $.fn.center = function () {
        var $this = $(this), winH = $(window).height(), divH = $(this).height();
        return this.each(function () {
            var theTop = (winH-divH)/2;
            $(this).css({top:theTop});
        });
    }
    $.fn.animateitems = function (timing,color) {
        var $this = $(this), za=0;
        return this.each(function () {
            $this.each(function () {
                za=za+50;
                $(this).delay(za).animate({fill:'#'+color},timing,'easeInElastic');
            });
        });
    }
    $.fn.animatebgs = function (colorbg) {
        var $this = $(this), za=0;
        return this.each(function () {
            $this.each(function () {
                za=za+500;
                $(this).delay(za).animate({stroke:('#'+colorbg),'stroke-width':0.5},2500,'easeOutQuart');
            });
        });
    }
    
    $.fn.animateloader = function () {
        var $this = $(this), za=0;
        return this.each(function () {
            $this.each(function () {
                za=za+500;
                $("#theloader").animate({rotate:'+=45deg'},600,'linear');
                $(this).delay(za).animate({stroke:'#F1D333','stroke-width':0.15},1800,'easeInOutElastic', function(){
                     $(this).css({stroke:'#CD3D66','stroke-width':0.25});
                });
            });
        });
    }
    $.fn.category = function () {
        var $this = $(this), za=0;
        return this.each(function () {
            $this.each(function () {
                za=za+100;
                $(this).delay(za).animate({opacity:1},600,'easeInOutQuart');
            });
        });
    }

$("#theloader").center();
$("#h1_preloader").center();
$(".svgloader").animateloader();
$("#h1_preloader").delay(1000).animate({color:'#fffff'},600,'easeInOutQuart');

function byeloader(){
    $("#theloader").delay(2000).fadeOut(2300,'easeInOutElastic');
    $("#h1_preloader").animate({color:'#000000'},1200,'easeOutElastic');
    $("#preloader").animate({opacity:0},1200,'easeInOutElastic');
    setTimeout(function(){ $("#preloader").hide(); },5000);
}

var backgrounds = ['blue','brown','green','orange','pink','yellow'],
    colors=['8EC5ED','C8C86A','8FC185','a8280b','CD3D66','F1D333'],
    letters = ['letter_a','letter_m','rare_point','letter_d','letter_il','letter_in','letter_g'],
    colorletters=['F0CA31','D3662C','8598A6','90C185','C9C96B','8FC7EE','CD3D66'], ars=0;

    function charge_loaders(){
        loader_body();
        setTimeout(function(){ load_bgs(); },2000);
    }

    function loader_uno(){
        setTimeout(function(){ plax_ready(); interactions_ready(); },10000);
        $("#uno").load('/assets/bgs/uno.html', function(){
            $(this).animate({rotate:'0deg'},5000,'linear');
            for (var i = 0; i < letters.length; i++) {
                $("."+letters[i]).animateitems(900,colorletters[i]);
            };
        });
    }

    function load_bgs(){
        bgsvg = backgrounds[ars], colorsvg = colors[ars];
        if(ars==0){
            $("#backgrounds").animate({rotate:'-10deg'},100,'linear',function(){
                $(this).animate({rotate:'0deg',opacity:1,height:'100%'},10000,'easeOutQuart');
                $('#container_layout').delay(4000).animate({backgroundColor:'#131313'},5000,'easeInOutQuart');
            });
        }
        $("#"+bgsvg).delay(100).animate({rotate:'0deg'},6000,'easeOutQuart');
        $("."+bgsvg).animatebgs(colorsvg);
        if(ars!=5){ ars=ars+1; load_bgs(); }
        else{ setTimeout(function(){ loader_uno(); },2000); }
    }

    function plax_ready(){
        $.plax.enable();
        $('#blue').plaxify({"xRange":5,"yRange":5});
        $('#pink').plaxify({"xRange":10,"yRange":10});
        $('#orange').plaxify({"xRange":5,"yRange":5});
        $('#brown').plaxify({"xRange":-5,"yRange":-5});
        $('#green').plaxify({"xRange":10,"yRange":10});
        $('#yellow').plaxify({"xRange":-5,"yRange":-5});
        $('#uno').plaxify({"xRange":-5,"yRange":-5});

    $("#white_space").hover(function(){
        $("#blue").stop().animate({rotate:'5deg',opacity:0.4},1600,'linear');
        $("#brown").stop().animate({rotate:'5deg',opacity:0.4},1600,'linear');
        $("#uno").stop().delay(100).animate({rotate:'5deg'},1600,'linear');
        $("#green").stop().delay(200).animate({rotate:'5deg',opacity:0.7},1600,'easeInOutSine');
        $("#orange").stop().delay(300).animate({rotate:'5deg',opacity:0.5},1600,'easeInOutSine');
        $("#pink").stop().delay(400).animate({rotate:'5deg',opacity:0.8},1600,'easeInOutSine');
        $("#yellow").stop().delay(500).animate({rotate:'5deg',opacity:0.6},1600,'easeInSine');
    },function(){
        $("#blue").stop().animate({rotate:'0deg',opacity:1},1600,'easeInSine');
        $("#brown").stop().delay(100).animate({rotate:'0deg',opacity:1},1600,'easeInSine');
        $("#green").stop().delay(200).animate({rotate:'0deg',opacity:1},1600,'easeInSine');
        $("#orange").stop().delay(300).animate({rotate:'0deg',opacity:1},1600,'easeInSine');
        $("#pink").stop().delay(400).animate({rotate:'0deg',opacity:1},1600,'linear');
        $("#yellow").stop().delay(500).animate({rotate:'0deg',opacity:1},1600,'linear');
        $("#uno").stop().animate({rotate:'0deg'},1600,'linear');
    });

    }

    function loader_body(){
        $("#connecting").delay(2000).animate({opacity:1,color:'#cbc962',marginLeft:0},1000,'easeOutQuart');
        $("#logo_header").animate({rotate:'30deg'},10,function(){
            $(this).animate({opacity:1,rotate:'0deg'},1700,'easeInOutQuart');
        });
        $("#bg_header").delay(2500).animate({opacity:0.6},7000,'easeOutQuart');
        $('#bg_cover_header').delay(4500).animate({height:135, marginTop:32, opacity:1},2000,'easeInOutQuart');
        $("#logo_text").delay(1500).animate({height:80},600,'easeOutQuart');
        $(".category").delay(2000).category();
        $("#contents").delay(1500).animate({opacity:1,height:400},1200,'easeOutQuart');
        $("#arrow_prev_content, #arrow_next_content").delay(2000).animate({opacity:1},300,'easeInOutQuart');
        $("#social_networks, .block_footer,#sections").delay(1600).animate({opacity:1},1200,'easeOutQuart');
    }


    function interactions_ready(){
        $("#send_newsletter").hover(function () {
        $(this).animate({ backgroundColor: '#454545' }, 300, 'easeInOutQuart');
        $("#arrow_newsletter").stop().animate({ left: 15, opacity: 0 }, 100, 'easeInQuart', function () {
            $(this).css({ left: -30, opacity: 0 }).stop().animate({ left: 0, opacity: 1 }, 300, 'easeInOutQuart');
        });

    }, function () {
        $(this).animate({ backgroundColor: '#292929' }, 300, 'easeInOutQuart');
    });

    $('#email_newsletter').focus(function () { $(this).val(""); });

    $('#email_newsletter').focusout(function () {
        var value = $(this).attr('data');
        if (value.lenght == 0) {
            $(this).val(value);
        }
    });

    var total_contents = $(".contents").size(),
        total_contents = total_contents - 1,
        active = 1,
        repeat_slide = null,
        animado = false;

        function play(){
            repeat_slide = setInterval(function(){
                play_slide();
            },8000);
        }
        play();
        function play_slide(){
            
            animado = true;            

            if(active>=total_contents){
                active = 1;
            }else{
                active = active+1;
            }
            $('.contents').fadeOut(300, 'easeInOutQuart');
            $('.contents:nth-child('+active+')').delay(300).fadeIn(500, 'easeInOutQuart', function(){
                animado = false;
            });
        }

    $('#contents').hover(function(){ 
        clearInterval(repeat_slide);
     },function(){
        play();
     });
    $('#arrow_next_content').on('click', function(){
        if(animado == false){
         play_slide();
        }
     });
    $('#arrow_prev_content').on('click', function(){
        if(animado == false){
            play_slide();
            switch(active){
                case 1:
                    active = total_contents-1;
                break;
                default:
                    active = active-2;
                break;
            }
        }
     });
     $('#why_image').hover(function(){
        $(this).stop().animate({backgroundColor: '#751043'},1000, 'easeInOutQuart');
        $('#why').stop().animate({rotate: '+=10deg', width: 250, heigth: 250}, 1500, 'easeInOutQuart');
    }, function(){
        $(this).stop().animate({backgroundColor: '#640e35'},1000, 'easeOutSine');
        $('#why').stop().animate({rotate: '0deg', width: 279, heigth: 279}, 1500, 'easeInOutQuart');
    });
    $('#impact_section').hover(function(){
         $('.segimp').stop().animate({opacity:1},1000, 'easeInOutQuart');
    }, function(){
         $('.segimp').stop().animate({opacity:0},1000, 'easeInOutQuart');
    });
    $('#manifest_text').hover(function(){
        $(this).stop().animate({backgroundColor: '#008db9'}, 1000, 'easeInOutQuart');
        $('.wptext').stop().animate({color:'#b7ecf9'},1000, 'easeInQuart');
    }, function(){
        $(this).stop().animate({backgroundColor: "#70bde7"}, 700, 'easeInOutQuart');
         $('.wptext').stop().animate({color: '#fffff'},1000, 'easeInQuart');
    });
    $('#event_section').hover(function(){
        $('.seg').stop().animate({opacity:1},1000, 'easeInOutQuart');
    }, function(){
         $('.seg').stop().animate({opacity:0},1000, 'easeInOutQuart');
    });
}
/*$("#white_space").on("mouseover",function(){
    za=0;
    $(".blue").each(function(){
     za=za+500;   
     $(this).delay(za).stop().animate({'stroke':'#fffff'});
    })

})
    $("#white_space").on("mouseout",function(){
    za=0;
        $(".blue").each(function(){
             za=za+500;   
             $(this).delay(za).stop().animate({'stroke':'blue'});
        });
    });*/

    $('a.link').address(function(event) {
        $('a').removeClass("active");
        $(this).addClass("active");
        return $(this).attr('href');
    });
	

	
	


    $(".link").on('click',function(){
        $("body").animate({scrollTop:0},300,'linear');
        $("#connecting").animate({opacity:0,color:'#000000',top:280},600,'easeOutQuart');
        $("#contents").animate({opacity:0,backgroundColor:'#000000',top:50},600,'easeOutQuart');
    });
});