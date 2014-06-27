/*
* File Name: Script Js
* Author Name: arrowthemes
* Author URL: http://themeforest.net/user/arrowthemes/portfolio/?ref=arrowthemes
* Version: 1.0 */

(function($){

	$(document).on('ready', function() {

		$('.vmenu li:not(:first-child),.vmenu li li li:first-child,ul.vmenu>li>ul').each(function () {
		 $(this).append('<div class="vmenu-separator"> </div><div class="vmenu-separator-bg"> </div>'); 
		});


		//open on click
		function setOpenSubmenuWithNoReload(vMenuInfo) {
		    $("ul." + vMenuInfo.vMenuClass + " li").each(function () {
		        var item = $(this);
		        item.children("a").bind("click", function(e) {
		            var link = $(this);
		            var simple = link.siblings("ul").length === 0;
		            link.parent().siblings().children("ul." + vMenuInfo.activeClass).slideUp(function() {
		                $(this).find("li, a, ul").removeClass(vMenuInfo.activeClass);
		                $(this).removeClass(vMenuInfo.activeClass).siblings("a").removeClass(vMenuInfo.activeClass);
		                $(this).css("display", "");
		            });
		            link.parent().siblings().children("a." + vMenuInfo.activeClass).removeClass(vMenuInfo.activeClass);
		            link.parent().siblings().removeClass(vMenuInfo.activeClass);
		            if (simple && !link.hasClass(vMenuInfo.activeClass)) {
		                link.addClass(vMenuInfo.activeClass).parent().addClass(vMenuInfo.activeClass);
		            }
		            if (!simple) {
		                if (link.hasClass(vMenuInfo.activeClass)) {
		                    link.siblings("ul").slideUp("slow", "easeOutExpo", function() {
		                        $(this).removeClass(vMenuInfo.activeClass).siblings("a").removeClass(vMenuInfo.activeClass).parent().removeClass(vMenuInfo.activeClass);
		                        $(this).css("display", "");
		                    });
		                } else {
		                    link.siblings("ul").slideDown("slow" ,"easeOutExpo", function() {
		                        $(this).addClass(vMenuInfo.activeClass).siblings("a").addClass(vMenuInfo.activeClass).parent().addClass(vMenuInfo.activeClass);
		                        $(this).css("display", "");
		                    });
		                }
		                
		                e.preventDefault();
		                return false;
		            }
		        });
		    });
		}

		function showVMenuSubmenu(link, activeClass, hoveredClass, simple) {
		    if (simple) {
		        if (!link.hasClass(activeClass)) link.addClass(activeClass);
		        return;
		    }
		    if (!link.hasClass(activeClass)) {
		        link.siblings("ul").slideDown("slow", function() {
		            $(this).siblings("a").removeClass(hoveredClass);
		            $(this).addClass(activeClass).siblings("a").addClass(activeClass);
		            $(this).css("display", "");
		        });
		    }
		}

		function hideVMenuSubmenus(link, activeClass) {
		    link.parent().siblings().children("ul." + activeClass).slideUp(function() {
		        $(this).find("a, ul").removeClass(activeClass);
		        $(this).removeClass(activeClass).siblings("a").removeClass(activeClass);
		        $(this).css("display", "");
		    });
		    link.parent().siblings().children("a." + activeClass).removeClass(activeClass);
		}


		setOpenSubmenuWithNoReload({vMenuClass: "vmenu", activeClass: "active", hoveredClass: "hovered"});

		/* Menu Items */
		 $(".vmenu>li>a").append("<span class=\"border-top\"></span><span class=\"border-bottom\"></span>"); 

		    $.each($(".vmenu"), function () {
		        var width = $(this).innerWidth();
		        $.each($(this).children("li"), function() {
		            var a = $(this).children("a");
		            var pl = a.css("padding-left").replace("px", "");
		            var pr = a.css("padding-right").replace("px", "");
		            var bl = a.css("border-left-width").replace("px", "");
		            var br = a.css("border-right-width").replace("px", "");
		            a.css("width", width - pl - pr - bl - br);
		        });
		    });
		    $(".vmenu>li>a.active").parent().addClass("active");


		/* Sub menu item */
			$(".vmenu li li a").append("<span class=\"border-top\"></span><span class=\"border-bottom\"></span>"); 
			
		    $.each($(".vmenu"), function () {
		        var width = $(this).innerWidth();
		        $.each($(this).find("li li"), function() {
		            var a = $(this).children("a");
		            var pl = a.css("padding-left").replace("px", "");
		            var pr = a.css("padding-right").replace("px", "");
		            var bl = a.css("border-left-width").replace("px", "");
		            var br = a.css("border-right-width").replace("px", "");
		            a.css("width", width - pl - pr - bl - br);
		        });
		    });
		    $(".vmenu li li a.active").parent().addClass("active");

		 //image preloader
    	// JavaScript Document
		$.fn.preloader = function(options){
			
			var defaults = {
				             delay:200,
							 preload_parent:"a",
							 check_timer:300,
							 ondone:function(){ },
							 oneachload:function(image){  },
							 fadein:500 
							};
			
			// variables declaration and precaching images and parent container
			 var options = $.extend(defaults, options),
			 root = $(this) , images = root.find("img.pic3d, a.h-effect img").css({"visibility":"hidden",opacity:0}) ,  timer ,  counter = 0, i=0 , checkFlag = [] , delaySum = options.delay ,
			 
			 init = function(){
				
				timer = setInterval(function(){
					
					if(counter>=checkFlag.length)
					{
					clearInterval(timer);
					options.ondone();
					return;
					}
				
					for(i=0;i<images.length;i++)
					{
						if(images[i].complete==true)
						{
							if(checkFlag[i]==false)
							{
								checkFlag[i] = true;
								options.oneachload(images[i]);
								counter++;
								
								delaySum = delaySum + options.delay;
							}
							
							$(images[i]).css("visibility","visible").delay(delaySum).animate({opacity:1},options.fadein,
							function(){ $(this).parent().removeClass("preloader");   });						 
						}
					}
				
					},options.check_timer) 
				 
				 } ;
			
			images.each(function(){
				
				if($(this).parent(options.preload_parent).length==0)
				$(this).wrap("<a class='preloader' />");
				else
				$(this).parent().addClass("preloader");
				
				checkFlag[i++] = false;
				
				
				}); 
			images = $.makeArray(images); 
			
			
			var icon = jQuery("<img />",{
				
				id : 'loadingicon' ,
				src : 'templates/abana_j25/images/preloader.gif'
				
				}).hide().appendTo("body");
			
			
			
			timer = setInterval(function(){
				
				if(icon[0].complete==true)
				{
					clearInterval(timer);
					init();
					 icon.remove();
					return;
				}
				
				},100);
			
			}
	
	

		$(".sheet").preloader();


		//clients
		//client image scroll
		$('.client').cycle({
			fx: 'scrollUp',  // can be fade, scrollUp, shuffle, zoom
			delay:  2000, 
			cleartype:     !$.support.opacity,
			cleartypeNoBg: true,	
			speed:  700,
			timeout: 5000
		});


		//social links hover effect 
		$('.top-links a').hover(function() {
			$(this).stop(true,true).animate({opacity: 0.5});
			},function() {
			$(this).stop(true,true).animate({opacity: 1});
		});

		//add shadow
		var shadow =  $('.mod-white.shadow').each(function () {
			$('<span class="block-shadow"></span>').appendTo( $(this).parent() );
		});

		//show-title
		$('div.show-title').css({opacity: 0.1, 'visibility': 'visible'});


		//back to top
		if ($("#totop-scroller").length) {
			$().UItoTop({scrollSpeed: 500, easingType: 'easeOutExpo' });
		}

		//li span
		$('.content ul.style li').each(function(i, elem){
		    var html = $(elem).html();
		    var final = '<span>' + html + '</span>';
		    $(this).html(final );
		});

		// remove empty p tags
		$('p').each(function() {
		    var $this = $(this);
		    if($this.html().replace(/\s|&nbsp;/g, '').length === 0)
		        $this.remove();
		});


		// apply reveal sizes
		$('.module.size-medium').each(function() {
		    $(this).closest('.reveal-modal').addClass('medium');
		});			
		$('.module.size-small').each(function() {
		    $(this).closest('.reveal-modal').addClass('small');
		});	
		$('.module.size-large').each(function() {
		    $(this).closest('.reveal-modal').addClass('large');
		});	
		$('.module.size-xlarge').each(function() {
		    $(this).closest('.reveal-modal').addClass('xlarge');
		});	

		// style the zoo blog buttons
		$('p.links').each(function() {
		    var $this = $(this);
		    $this.children().eq(0).addClass("button-color");
		    $this.children().eq(1).addClass("button");
		});		

		// style the zoo teaser image
		$('.element-image img').each(function() {
		    var $this = $(this);
		    $this.addClass("pic3d");
		});


		// zoo blog tags
		$('.element-itemtag a, .zoo-tagcloud a').each(function(i, elem) {
		    var $this = $(this);
		    var html = $(elem).html();
		    var final = '<span class="tag">' + html + '</span>';
		    $(this).html(final );
		    $this.addClass("tag-body yellow");	   
		});


		//block-number
		$('.block-number').each(function(i, elem){
		    var html = $(elem).html();
		    var final = '<span class="digit">' + html + '</span><span class="bottom"></span>';
		    $(this).html(final );
		});

		//event date/time block
		$('.event-time').each(function(i, elem){
		    var html = $(elem).html();
		    var dt =  html.split(":");
		    var final = '<span class="date">' + dt[0] + '</span><span class="month">' + dt[1] + '</span>';
		    $(this).html(final );
		    $(this).parent().addClass('event');
		});

		// toggles
		if ($('.showhide li').length > 0) {
			var showhide = $('.showhide li');
				showhide.each(function () {
				var q = $(this);

				if (q.children('section').css('display') === 'block') {
				q.children('h4').addClass('collapse');
				} else if (q.children('section').css('display') === 'none') {
				q.children('h4').addClass('expanded');
				}

				q.children('h4').click(function () {

				q.children('section').slideToggle('normal', function () {
				if (q.children('section').css('display') === 'block') {
				q.children('h4').addClass('collapse');
				q.children('h4').removeClass('expanded');

				} else if (q.children('section').css('display') === 'none') {
				q.children('h4').addClass('expanded');
				q.children('h4').removeClass('collapse');
				}

				});
			});
			});
		}


		//tooltips
		$(".top-links a").tooltip({ effect: 'slide', opacity: 1, position: 'bottom center', offset: [15, 0] });
		$(".post-share a").tooltip({ effect: 'slide', opacity: 1, position: 'top center', offset: [5, 0] });
		$("a#toTop").tooltip({ effect: 'slide', opacity: 0.8, position: 'top center', offset: [0, 0] });
		$("abbr").tooltip({ effect: 'slide', opacity: 0.8, position: 'top center', offset: [0, 0] });
		$("a#mytooltip").tooltip({ effect: 'slide', opacity: 1, position: 'top center', offset: [0, 0] });
		$(".color-styles img").tooltip({ effect: 'fade', opacity: 1, position: 'bottom center', offset: [15, 0] });
	});


})(jQuery);


// css helper
(function($) {
    var data = [
        {str:navigator.userAgent,sub:'Chrome',ver:'Chrome',name:'chrome'},
        {str:navigator.vendor,sub:'Apple',ver:'Version',name:'safari'},
        {prop:window.opera,ver:'Opera',name:'opera'},
        {str:navigator.userAgent,sub:'Firefox',ver:'Firefox',name:'firefox'},
        {str:navigator.userAgent,sub:'MSIE',ver:'MSIE',name:'ie'}];
    for (var n=0;n<data.length;n++)	{
        if ((data[n].str && (data[n].str.indexOf(data[n].sub) != -1)) || data[n].prop) {
            var v = function(s){var i=s.indexOf(data[n].ver);return (i!=-1)?parseInt(s.substring(i+data[n].ver.length+1)):'';};
            $('html').addClass(data[n].name+' '+data[n].name+v(navigator.userAgent) || v(navigator.appVersion)); break;			
        }
    }
})(jQuery);

/*!
 * jQuery Tools v1.2.6 - The missing UI library for the Web
 * 
 * tooltip/tooltip.js
 * tooltip/tooltip.slide.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.bind(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).bind(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.unbind(p[0]).bind(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.unbind(p[1]).bind(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);
(function(a){var b=a.tools.tooltip;a.extend(b.conf,{direction:"up",bounce:!1,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!a.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.addEffect("slide",function(a){var b=this.getConf(),d=this.getTip(),e=b.slideFade?{opacity:b.opacity}:{},f=c[b.direction]||c.up;e[f[1]]=f[0]+"="+b.slideOffset,b.slideFade&&d.css({opacity:0}),d.show().animate(e,b.slideInSpeed,a)},function(b){var d=this.getConf(),e=d.slideOffset,f=d.slideFade?{opacity:0}:{},g=c[d.direction]||c.up,h=""+g[0];d.bounce&&(h=h=="+"?"-":"+"),f[g[1]]=h+"="+e,this.getTip().animate(f,d.slideOutSpeed,function(){a(this).hide(),b.call()})})})(jQuery);


/*UITop jquery*/
(function(a){a.fn.UItoTop=function(b){var c={text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"};var d=a.extend(c,b);var e="#"+d.containerID;var f="#"+d.containerHoverID;a("body").append('<a href="#" title="Back to top" id="'+d.containerID+'">'+d.text+"</a>");a(e).hide().click(function(){a("html, body").animate({scrollTop:0},d.scrollSpeed,d.easingType);a("#"+d.containerHoverID,this).stop().animate({opacity:0},d.inDelay,d.easingType);return false}).prepend('<span id="'+d.containerHoverID+'"></span>').hover(function(){a(f,this).stop().animate({opacity:1},600,"linear")},function(){a(f,this).stop().animate({opacity:0},700,"linear")});a(window).scroll(function(){var b=a(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){a(e).css({position:"absolute",top:a(window).scrollTop()+a(window).height()-50})}if(b>d.min)a(e).fadeIn(d.inDelay);else a(e).fadeOut(d.Outdelay)})}})(jQuery);

/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*globals jQuery */

(function ($) {
  $('a[data-reveal-id]').live('click', function (event) {
    event.preventDefault();
    var modalLocation = $(this).attr('data-reveal-id');
    $('#' + modalLocation).reveal($(this).data());
  });

  $.fn.reveal = function (options) {
    var defaults = {
      animation: 'fadeAndPop',                // fade, fadeAndPop, none
      animationSpeed: 300,                    // how fast animtions are
      closeOnBackgroundClick: true,           // if you click background will modal close?
      dismissModalClass: 'close-reveal-modal', // the class of a button or element that will close an open modal
      open: $.noop,
      opened: $.noop,
      close: $.noop,
      closed: $.noop
    };
    options = $.extend({}, defaults, options);

    return this.each(function () {
      var modal    = $(this),
        topMeasure = parseInt(modal.css('top'), 10),
        topOffset  = modal.height() + topMeasure,
        locked     = false,
        modalBg    = $('.reveal-modal-bg'),
        closeButton;

      if (modalBg.length === 0) {
        modalBg = $('<div class="reveal-modal-bg" />').insertAfter(modal);
        modalBg.fadeTo('fast', 0.8);
      }
      
      function unlockModal() {
        locked = false;
      }

      function lockModal() {
        locked = true;
      }

      function openAnimation() {
        if (!locked) {
          lockModal();
          if (options.animation === "fadeAndPop") {
            modal.css({'top': $(document).scrollTop() - topOffset, 'opacity': 0, 'visibility': 'visible'});
            modalBg.fadeIn(options.animationSpeed / 2);
            modal.delay(options.animationSpeed / 2).animate({
              "top": $(document).scrollTop() + topMeasure + 'px',
              "opacity": 1
            }, options.animationSpeed, function () {
              modal.trigger('reveal:opened');
            });

          }
          if (options.animation === "fade") {
            modal.css({'opacity': 0, 'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure});
            modalBg.fadeIn(options.animationSpeed / 2);
            modal.delay(options.animationSpeed / 2).animate({
              "opacity": 1
            }, options.animationSpeed, function () {
              modal.trigger('reveal:opened');
            });

          }
          if (options.animation === "none") {
            modal.css({'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure});
            modalBg.css({"display": "block"});
            modal.trigger('reveal:opened');
          }
        }
      }
      modal.bind('reveal:open.reveal', openAnimation);

      function closeAnimation() {
        if (!locked) {
          lockModal();
          if (options.animation === "fadeAndPop") {
            modal.animate({
              "top":  $(document).scrollTop() - topOffset + 'px',
              "opacity": 0
            }, options.animationSpeed / 2, function () {
              modal.css({'top': topMeasure, 'opacity': 1, 'visibility': 'hidden'});
            });
            modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed, function () {
              modal.trigger('reveal:closed');
            });
          }
          if (options.animation === "fade") {
            modal.animate({
              "opacity" : 0
            }, options.animationSpeed, function () {
              modal.css({'opacity': 1, 'visibility': 'hidden', 'top': topMeasure});
            });
            modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed, function () {
              modal.trigger('reveal:closed');
            });
          }
          if (options.animation === "none") {
            modal.css({'visibility': 'hidden', 'top': topMeasure});
            modalBg.css({'display': 'none'});
            modal.trigger('reveal:closed');
          }
        }
      }

      function destroy() {
        modal.unbind('.reveal');
        modalBg.unbind('.reveal');
        $('.' + options.dismissModalClass).unbind('.reveal');
        $('body').unbind('.reveal');
      }

      modal.bind('reveal:close.reveal', closeAnimation);
      modal.bind('reveal:opened.reveal reveal:closed.reveal', unlockModal);
      modal.bind('reveal:closed.reveal', destroy);
      
      modal.bind('reveal:open.reveal', options.open);
      modal.bind('reveal:opened.reveal', options.opened);
      modal.bind('reveal:close.reveal', options.close);
      modal.bind('reveal:closed.reveal', options.closed);
      
      modal.trigger('reveal:open');

      closeButton = $('.' + options.dismissModalClass).bind('click.reveal', function () {
        modal.trigger('reveal:close');
      });

      if (options.closeOnBackgroundClick) {
        modalBg.css({"cursor": "pointer"});
        modalBg.bind('click.reveal', function () {
          modal.trigger('reveal:close');
        });
      }

      $('body').bind('keyup.reveal', function (event) {
        if (event.which === 27) { // 27 is the keycode for the Escape key
          modal.trigger('reveal:close');
        }
      });
    });
  };
} (jQuery));


/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999.3 (08-MAR-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */

(function(a,b){function s(b){function e(b){for(;b&&b.nodeName.toLowerCase()!="html";b=b.parentNode){var d=a.css(b,"background-color");if(d&&d.indexOf("rgb")>=0){var e=d.match(/\d+/g);return"#"+c(e[0])+c(e[1])+c(e[2])}if(d&&d!="transparent")return d}return"#ffffff"}function c(a){a=parseInt(a,10).toString(16);return a.length<2?"0"+a:a}d("applying clearType background-color hack");b.each(function(){a(this).css("background-color",e(this))})}function r(b,c){var d=a(c.pager);a.each(b,function(e,f){a.fn.cycle.createPagerAnchor(e,f,d,b,c)});c.updateActivePagerLink(c.pager,c.startingSlide,c.activePagerClass)}function q(b,c){var d=c?1:-1;var e=b.elements;var f=b.$cont[0],g=f.cycleTimeout;if(g){clearTimeout(g);f.cycleTimeout=0}if(b.random&&d<0){b.randomIndex--;if(--b.randomIndex==-2)b.randomIndex=e.length-2;else if(b.randomIndex==-1)b.randomIndex=e.length-1;b.nextSlide=b.randomMap[b.randomIndex]}else if(b.random){b.nextSlide=b.randomMap[b.randomIndex]}else{b.nextSlide=b.currSlide+d;if(b.nextSlide<0){if(b.nowrap)return false;b.nextSlide=e.length-1}else if(b.nextSlide>=e.length){if(b.nowrap)return false;b.nextSlide=0}}var h=b.onPrevNextEvent||b.prevNextClick;if(a.isFunction(h))h(d>0,b.nextSlide,e[b.nextSlide]);n(e,b,1,c);return false}function o(a,b,c,e){if(c.timeoutFn){var f=c.timeoutFn.call(a,a,b,c,e);while(c.fx!="none"&&f-c.speed<250)f+=c.speed;d("calculated timeout: "+f+"; speed: "+c.speed);if(f!==false)return f}return c.timeout}function n(c,e,f,g){function q(){var a=0,b=e.timeout;if(e.timeout&&!e.continuous){a=o(c[e.currSlide],c[e.nextSlide],e,g);if(e.fx=="shuffle")a-=e.speedOut}else if(e.continuous&&h.cyclePause)a=10;if(a>0)h.cycleTimeout=setTimeout(function(){n(c,e,0,!e.backwards)},a)}var h=e.$cont[0],i=c[e.currSlide],j=c[e.nextSlide];if(f&&e.busy&&e.manualTrump){d("manualTrump in go(), stopping active transition");a(c).stop(true,true);e.busy=0;clearTimeout(h.cycleTimeout)}if(e.busy){d("transition active, ignoring new tx request");return}if(h.cycleStop!=e.stopCount||h.cycleTimeout===0&&!f)return;if(!f&&!h.cyclePause&&!e.bounce&&(e.autostop&&--e.countdown<=0||e.nowrap&&!e.random&&e.nextSlide<e.currSlide)){if(e.end)e.end(e);return}var k=false;if((f||!h.cyclePause)&&e.nextSlide!=e.currSlide){k=true;var l=e.fx;i.cycleH=i.cycleH||a(i).height();i.cycleW=i.cycleW||a(i).width();j.cycleH=j.cycleH||a(j).height();j.cycleW=j.cycleW||a(j).width();if(e.multiFx){if(g&&(e.lastFx==b||++e.lastFx>=e.fxs.length))e.lastFx=0;else if(!g&&(e.lastFx==b||--e.lastFx<0))e.lastFx=e.fxs.length-1;l=e.fxs[e.lastFx]}if(e.oneTimeFx){l=e.oneTimeFx;e.oneTimeFx=null}a.fn.cycle.resetState(e,l);if(e.before.length)a.each(e.before,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])});var m=function(){e.busy=0;a.each(e.after,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])});if(!h.cycleStop){q()}};d("tx firing("+l+"); currSlide: "+e.currSlide+"; nextSlide: "+e.nextSlide);e.busy=1;if(e.fxFn)e.fxFn(i,j,e,m,g,f&&e.fastOnEvent);else if(a.isFunction(a.fn.cycle[e.fx]))a.fn.cycle[e.fx](i,j,e,m,g,f&&e.fastOnEvent);else a.fn.cycle.custom(i,j,e,m,g,f&&e.fastOnEvent)}else{q()}if(k||e.nextSlide==e.currSlide){e.lastSlide=e.currSlide;if(e.random){e.currSlide=e.nextSlide;if(++e.randomIndex==c.length){e.randomIndex=0;e.randomMap.sort(function(a,b){return Math.random()-.5})}e.nextSlide=e.randomMap[e.randomIndex];if(e.nextSlide==e.currSlide)e.nextSlide=e.currSlide==e.slideCount-1?0:e.currSlide+1}else if(e.backwards){var p=e.nextSlide-1<0;if(p&&e.bounce){e.backwards=!e.backwards;e.nextSlide=1;e.currSlide=0}else{e.nextSlide=p?c.length-1:e.nextSlide-1;e.currSlide=p?0:e.nextSlide+1}}else{var p=e.nextSlide+1==c.length;if(p&&e.bounce){e.backwards=!e.backwards;e.nextSlide=c.length-2;e.currSlide=c.length-1}else{e.nextSlide=p?0:e.nextSlide+1;e.currSlide=p?c.length-1:e.nextSlide-1}}}if(k&&e.pager)e.updateActivePagerLink(e.pager,e.currSlide,e.activePagerClass)}function m(b,c){b.addSlide=function(d,e){var f=a(d),g=f[0];if(!b.autostopCount)b.countdown++;c[e?"unshift":"push"](g);if(b.els)b.els[e?"unshift":"push"](g);b.slideCount=c.length;if(b.random){b.randomMap.push(b.slideCount-1);b.randomMap.sort(function(a,b){return Math.random()-.5})}f.css("position","absolute");f[e?"prependTo":"appendTo"](b.$cont);if(e){b.currSlide++;b.nextSlide++}if(!a.support.opacity&&b.cleartype&&!b.cleartypeNoBg)s(f);if(b.fit&&b.width)f.width(b.width);if(b.fit&&b.height&&b.height!="auto")f.height(b.height);g.cycleH=b.fit&&b.height?b.height:f.height();g.cycleW=b.fit&&b.width?b.width:f.width();f.css(b.cssBefore);if(b.pager||b.pagerAnchorBuilder)a.fn.cycle.createPagerAnchor(c.length-1,g,a(b.pager),c,b);if(a.isFunction(b.onAddSlide))b.onAddSlide(f);else f.hide()}}function l(b){var c,f,g=a.fn.cycle.transitions;if(b.fx.indexOf(",")>0){b.multiFx=true;b.fxs=b.fx.replace(/\s*/g,"").split(",");for(c=0;c<b.fxs.length;c++){var h=b.fxs[c];f=g[h];if(!f||!g.hasOwnProperty(h)||!a.isFunction(f)){e("discarding unknown transition: ",h);b.fxs.splice(c,1);c--}}if(!b.fxs.length){e("No valid transitions named; slideshow terminating.");return false}}else if(b.fx=="all"){b.multiFx=true;b.fxs=[];for(p in g){f=g[p];if(g.hasOwnProperty(p)&&a.isFunction(f))b.fxs.push(p)}}if(b.multiFx&&b.randomizeEffects){var i=Math.floor(Math.random()*20)+30;for(c=0;c<i;c++){var j=Math.floor(Math.random()*b.fxs.length);b.fxs.push(b.fxs.splice(j,1)[0])}d("randomized fx sequence: ",b.fxs)}return true}function k(b){b.original={before:[],after:[]};b.original.cssBefore=a.extend({},b.cssBefore);b.original.cssAfter=a.extend({},b.cssAfter);b.original.animIn=a.extend({},b.animIn);b.original.animOut=a.extend({},b.animOut);a.each(b.before,function(){b.original.before.push(this)});a.each(b.after,function(){b.original.after.push(this)})}function j(c,d,g,i,j){var o;var p=a.extend({},a.fn.cycle.defaults,i||{},a.metadata?c.metadata():a.meta?c.data():{});var t=a.isFunction(c.data)?c.data(p.metaAttr):null;if(t)p=a.extend(p,t);if(p.autostop)p.countdown=p.autostopCount||g.length;var u=c[0];c.data("cycle.opts",p);p.$cont=c;p.stopCount=u.cycleStop;p.elements=g;p.before=p.before?[p.before]:[];p.after=p.after?[p.after]:[];if(!a.support.opacity&&p.cleartype)p.after.push(function(){h(this,p)});if(p.continuous)p.after.push(function(){n(g,p,0,!p.backwards)});k(p);if(!a.support.opacity&&p.cleartype&&!p.cleartypeNoBg)s(d);if(c.css("position")=="static")c.css("position","relative");if(p.width)c.width(p.width);if(p.height&&p.height!="auto")c.height(p.height);if(p.startingSlide!=b){p.startingSlide=parseInt(p.startingSlide,10);if(p.startingSlide>=g.length||p.startSlide<0)p.startingSlide=0;else o=true}else if(p.backwards)p.startingSlide=g.length-1;else p.startingSlide=0;if(p.random){p.randomMap=[];for(var v=0;v<g.length;v++)p.randomMap.push(v);p.randomMap.sort(function(a,b){return Math.random()-.5});if(o){for(var w=0;w<g.length;w++){if(p.startingSlide==p.randomMap[w]){p.randomIndex=w}}}else{p.randomIndex=1;p.startingSlide=p.randomMap[1]}}else if(p.startingSlide>=g.length)p.startingSlide=0;p.currSlide=p.startingSlide||0;var x=p.startingSlide;d.css({position:"absolute",top:0,left:0}).hide().each(function(b){var c;if(p.backwards)c=x?b<=x?g.length+(b-x):x-b:g.length-b;else c=x?b>=x?g.length-(b-x):x-b:g.length-b;a(this).css("z-index",c)});a(g[x]).css("opacity",1).show();h(g[x],p);if(p.fit){if(!p.aspect){if(p.width)d.width(p.width);if(p.height&&p.height!="auto")d.height(p.height)}else{d.each(function(){var b=a(this);var c=p.aspect===true?b.width()/b.height():p.aspect;if(p.width&&b.width()!=p.width){b.width(p.width);b.height(p.width/c)}if(p.height&&b.height()<p.height){b.height(p.height);b.width(p.height*c)}})}}if(p.center&&(!p.fit||p.aspect)){d.each(function(){var b=a(this);b.css({"margin-left":p.width?(p.width-b.width())/2+"px":0,"margin-top":p.height?(p.height-b.height())/2+"px":0})})}if(p.center&&!p.fit&&!p.slideResize){d.each(function(){var b=a(this);b.css({"margin-left":p.width?(p.width-b.width())/2+"px":0,"margin-top":p.height?(p.height-b.height())/2+"px":0})})}var y=p.containerResize&&!c.innerHeight();if(y){var z=0,A=0;for(var B=0;B<g.length;B++){var C=a(g[B]),D=C[0],E=C.outerWidth(),F=C.outerHeight();if(!E)E=D.offsetWidth||D.width||C.attr("width");if(!F)F=D.offsetHeight||D.height||C.attr("height");z=E>z?E:z;A=F>A?F:A}if(z>0&&A>0)c.css({width:z+"px",height:A+"px"})}var G=false;if(p.pause)c.bind("mouseenter.cycle",function(){G=true;this.cyclePause++;f(u,true)}).bind("mouseleave.cycle",function(){G&&this.cyclePause--;f(u,true)});if(l(p)===false)return false;var H=false;i.requeueAttempts=i.requeueAttempts||0;d.each(function(){var b=a(this);this.cycleH=p.fit&&p.height?p.height:b.height()||this.offsetHeight||this.height||b.attr("height")||0;this.cycleW=p.fit&&p.width?p.width:b.width()||this.offsetWidth||this.width||b.attr("width")||0;if(b.is("img")){var c=a.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete;var d=a.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete;var f=a.browser.opera&&(this.cycleW==42&&this.cycleH==19||this.cycleW==37&&this.cycleH==17)&&!this.complete;var g=this.cycleH==0&&this.cycleW==0&&!this.complete;if(c||d||f||g){if(j.s&&p.requeueOnImageNotLoaded&&++i.requeueAttempts<100){e(i.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){a(j.s,j.c).cycle(i)},p.requeueTimeout);H=true;return false}else{e("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(H)return false;p.cssBefore=p.cssBefore||{};p.cssAfter=p.cssAfter||{};p.cssFirst=p.cssFirst||{};p.animIn=p.animIn||{};p.animOut=p.animOut||{};d.not(":eq("+x+")").css(p.cssBefore);a(d[x]).css(p.cssFirst);if(p.timeout){p.timeout=parseInt(p.timeout,10);if(p.speed.constructor==String)p.speed=a.fx.speeds[p.speed]||parseInt(p.speed,10);if(!p.sync)p.speed=p.speed/2;var I=p.fx=="none"?0:p.fx=="shuffle"?500:250;while(p.timeout-p.speed<I)p.timeout+=p.speed}if(p.easing)p.easeIn=p.easeOut=p.easing;if(!p.speedIn)p.speedIn=p.speed;if(!p.speedOut)p.speedOut=p.speed;p.slideCount=g.length;p.currSlide=p.lastSlide=x;if(p.random){if(++p.randomIndex==g.length)p.randomIndex=0;p.nextSlide=p.randomMap[p.randomIndex]}else if(p.backwards)p.nextSlide=p.startingSlide==0?g.length-1:p.startingSlide-1;else p.nextSlide=p.startingSlide>=g.length-1?0:p.startingSlide+1;if(!p.multiFx){var J=a.fn.cycle.transitions[p.fx];if(a.isFunction(J))J(c,d,p);else if(p.fx!="custom"&&!p.multiFx){e("unknown transition: "+p.fx,"; slideshow terminating");return false}}var K=d[x];if(!p.skipInitializationCallbacks){if(p.before.length)p.before[0].apply(K,[K,K,p,true]);if(p.after.length)p.after[0].apply(K,[K,K,p,true])}if(p.next)a(p.next).bind(p.prevNextEvent,function(){return q(p,1)});if(p.prev)a(p.prev).bind(p.prevNextEvent,function(){return q(p,0)});if(p.pager||p.pagerAnchorBuilder)r(g,p);m(p,g);return p}function i(b,c){if(c.next)a(c.next).unbind(c.prevNextEvent);if(c.prev)a(c.prev).unbind(c.prevNextEvent);if(c.pager||c.pagerAnchorBuilder)a.each(c.pagerAnchors||[],function(){this.unbind().remove()});c.pagerAnchors=null;a(b).unbind("mouseenter.cycle mouseleave.cycle");if(c.destroy)c.destroy(c)}function h(b,c){if(!a.support.opacity&&c.cleartype&&b.style.filter){try{b.style.removeAttribute("filter")}catch(d){}}}function g(c,d,g){function k(b,c,d){if(!b&&c===true){var f=a(d).data("cycle.opts");if(!f){e("options not found, can not resume");return false}if(d.cycleTimeout){clearTimeout(d.cycleTimeout);d.cycleTimeout=0}n(f.elements,f,1,!f.backwards)}}if(c.cycleStop==b)c.cycleStop=0;if(d===b||d===null)d={};if(d.constructor==String){switch(d){case"destroy":case"stop":var h=a(c).data("cycle.opts");if(!h)return false;c.cycleStop++;if(c.cycleTimeout)clearTimeout(c.cycleTimeout);c.cycleTimeout=0;h.elements&&a(h.elements).stop();a(c).removeData("cycle.opts");if(d=="destroy")i(c,h);return false;case"toggle":c.cyclePause=c.cyclePause===1?0:1;k(c.cyclePause,g,c);f(c);return false;case"pause":c.cyclePause=1;f(c);return false;case"resume":c.cyclePause=0;k(false,g,c);f(c);return false;case"prev":case"next":var h=a(c).data("cycle.opts");if(!h){e('options not found, "prev/next" ignored');return false}a.fn.cycle[d](h);return false;default:d={fx:d}}return d}else if(d.constructor==Number){var j=d;d=a(c).data("cycle.opts");if(!d){e("options not found, can not advance slide");return false}if(j<0||j>=d.elements.length){e("invalid slide index: "+j);return false}d.nextSlide=j;if(c.cycleTimeout){clearTimeout(c.cycleTimeout);c.cycleTimeout=0}if(typeof g=="string")d.oneTimeFx=g;n(d.elements,d,1,j>=d.currSlide);return false}return d}function f(b,c,d){var e=a(b).data("cycle.opts");var f=!!b.cyclePause;if(f&&e.paused)e.paused(b,e,c,d);else if(!f&&e.resumed)e.resumed(b,e,c,d)}function e(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function d(b){a.fn.cycle.debug&&e(b)}var c="2.9999.3";if(a.support==b){a.support={opacity:!a.browser.msie}}a.expr[":"].paused=function(a){return a.cyclePause};a.fn.cycle=function(b,c){var f={s:this.selector,c:this.context};if(this.length===0&&b!="stop"){if(!a.isReady&&f.s){e("DOM not ready, queuing slideshow");a(function(){a(f.s,f.c).cycle(b,c)});return this}e("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var h=g(this,b,c);if(h===false)return;h.updateActivePagerLink=h.updateActivePagerLink||a.fn.cycle.updateActivePagerLink;if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;var i=a(this);var k=h.slideExpr?a(h.slideExpr,this):i.children();var l=k.get();var m=j(i,k,l,h,f);if(m===false)return;if(l.length<2){e("terminating; too few slides: "+l.length);return}var p=m.continuous?10:o(l[m.currSlide],l[m.nextSlide],m,!m.backwards);if(p){p+=m.delay||0;if(p<10)p=10;d("first timeout: "+p);this.cycleTimeout=setTimeout(function(){n(l,m,0,!h.backwards)},p)}})};a.fn.cycle.resetState=function(b,c){c=c||b.fx;b.before=[];b.after=[];b.cssBefore=a.extend({},b.original.cssBefore);b.cssAfter=a.extend({},b.original.cssAfter);b.animIn=a.extend({},b.original.animIn);b.animOut=a.extend({},b.original.animOut);b.fxFn=null;a.each(b.original.before,function(){b.before.push(this)});a.each(b.original.after,function(){b.after.push(this)});var d=a.fn.cycle.transitions[c];if(a.isFunction(d))d(b.$cont,a(b.elements),b)};a.fn.cycle.updateActivePagerLink=function(b,c,d){a(b).each(function(){a(this).children().removeClass(d).eq(c).addClass(d)})};a.fn.cycle.next=function(a){q(a,1)};a.fn.cycle.prev=function(a){q(a,0)};a.fn.cycle.createPagerAnchor=function(b,c,e,g,h){var i;if(a.isFunction(h.pagerAnchorBuilder)){i=h.pagerAnchorBuilder(b,c);d("pagerAnchorBuilder("+b+", el) returned: "+i)}else i='<a href="#">'+(b+1)+"</a>";if(!i)return;var j=a(i);if(j.parents("body").length===0){var k=[];if(e.length>1){e.each(function(){var b=j.clone(true);a(this).append(b);k.push(b[0])});j=a(k)}else{j.appendTo(e)}}h.pagerAnchors=h.pagerAnchors||[];h.pagerAnchors.push(j);var l=function(c){c.preventDefault();h.nextSlide=b;var d=h.$cont[0],e=d.cycleTimeout;if(e){clearTimeout(e);d.cycleTimeout=0}var f=h.onPagerEvent||h.pagerClick;if(a.isFunction(f))f(h.nextSlide,g[h.nextSlide]);n(g,h,1,h.currSlide<b)};if(/mouseenter|mouseover/i.test(h.pagerEvent)){j.hover(l,function(){})}else{j.bind(h.pagerEvent,l)}if(!/^click/.test(h.pagerEvent)&&!h.allowPagerClickBubble)j.bind("click.cycle",function(){return false});var m=h.$cont[0];var o=false;if(h.pauseOnPagerHover){j.hover(function(){o=true;m.cyclePause++;f(m,true,true)},function(){o&&m.cyclePause--;f(m,true,true)})}};a.fn.cycle.hopsFromLast=function(a,b){var c,d=a.lastSlide,e=a.currSlide;if(b)c=e>d?e-d:a.slideCount-d;else c=e<d?d-e:d+a.slideCount-e;return c};a.fn.cycle.commonReset=function(b,c,d,e,f,g){a(d.elements).not(b).hide();if(typeof d.cssBefore.opacity=="undefined")d.cssBefore.opacity=1;d.cssBefore.display="block";if(d.slideResize&&e!==false&&c.cycleW>0)d.cssBefore.width=c.cycleW;if(d.slideResize&&f!==false&&c.cycleH>0)d.cssBefore.height=c.cycleH;d.cssAfter=d.cssAfter||{};d.cssAfter.display="none";a(b).css("zIndex",d.slideCount+(g===true?1:0));a(c).css("zIndex",d.slideCount+(g===true?0:1))};a.fn.cycle.custom=function(b,c,d,e,f,g){var h=a(b),i=a(c);var j=d.speedIn,k=d.speedOut,l=d.easeIn,m=d.easeOut;i.css(d.cssBefore);if(g){if(typeof g=="number")j=k=g;else j=k=1;l=m=null}var n=function(){i.animate(d.animIn,j,l,function(){e()})};h.animate(d.animOut,k,m,function(){h.css(d.cssAfter);if(!d.sync)n()});if(d.sync)n()};a.fn.cycle.transitions={fade:function(b,c,d){c.not(":eq("+d.currSlide+")").css("opacity",0);d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.cssBefore.opacity=0});d.animIn={opacity:1};d.animOut={opacity:0};d.cssBefore={top:0,left:0}}};a.fn.cycle.ver=function(){return c};a.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!a.support.opacity,cleartypeNoBg:false,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:b,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);(function(a){a.fn.cycle.transitions.none=function(b,c,d){d.fxFn=function(b,c,d,e){a(c).show();a(b).hide();e()}};a.fn.cycle.transitions.fadeout=function(b,c,d){c.not(":eq("+d.currSlide+")").css({display:"block",opacity:1});d.before.push(function(b,c,d,e,f,g){a(b).css("zIndex",d.slideCount+(!g===true?1:0));a(c).css("zIndex",d.slideCount+(!g===true?0:1))});d.animIn.opacity=1;d.animOut.opacity=0;d.cssBefore.opacity=1;d.cssBefore.display="block";d.cssAfter.zIndex=0};a.fn.cycle.transitions.scrollUp=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssBefore.top=e;d.cssBefore.left=0;d.cssFirst.top=0;d.animIn.top=0;d.animOut.top=-e};a.fn.cycle.transitions.scrollDown=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssFirst.top=0;d.cssBefore.top=-e;d.cssBefore.left=0;d.animIn.top=0;d.animOut.top=e};a.fn.cycle.transitions.scrollLeft=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0;d.cssBefore.left=e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=0-e};a.fn.cycle.transitions.scrollRight=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0;d.cssBefore.left=-e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=e};a.fn.cycle.transitions.scrollHorz=function(b,c,d){b.css("overflow","hidden").width();d.before.push(function(b,c,d,e){if(d.rev)e=!e;a.fn.cycle.commonReset(b,c,d);d.cssBefore.left=e?c.cycleW-1:1-c.cycleW;d.animOut.left=e?-b.cycleW:b.cycleW});d.cssFirst.left=0;d.cssBefore.top=0;d.animIn.left=0;d.animOut.top=0};a.fn.cycle.transitions.scrollVert=function(b,c,d){b.css("overflow","hidden");d.before.push(function(b,c,d,e){if(d.rev)e=!e;a.fn.cycle.commonReset(b,c,d);d.cssBefore.top=e?1-c.cycleH:c.cycleH-1;d.animOut.top=e?b.cycleH:-b.cycleH});d.cssFirst.top=0;d.cssBefore.left=0;d.animIn.top=0;d.animOut.left=0};a.fn.cycle.transitions.slideX=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide();a.fn.cycle.commonReset(b,c,d,false,true);d.animIn.width=c.cycleW});d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.width=0;d.animIn.width="show";d.animOut.width=0};a.fn.cycle.transitions.slideY=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide();a.fn.cycle.commonReset(b,c,d,true,false);d.animIn.height=c.cycleH});d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.height=0;d.animIn.height="show";d.animOut.height=0};a.fn.cycle.transitions.shuffle=function(b,c,d){var e,f=b.css("overflow","visible").width();c.css({left:0,top:0});d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true)});if(!d.speedAdjusted){d.speed=d.speed/2;d.speedAdjusted=true}d.random=0;d.shuffle=d.shuffle||{left:-f,top:15};d.els=[];for(e=0;e<c.length;e++)d.els.push(c[e]);for(e=0;e<d.currSlide;e++)d.els.push(d.els.shift());d.fxFn=function(b,c,d,e,f){if(d.rev)f=!f;var g=f?a(b):a(c);a(c).css(d.cssBefore);var h=d.slideCount;g.animate(d.shuffle,d.speedIn,d.easeIn,function(){var c=a.fn.cycle.hopsFromLast(d,f);for(var i=0;i<c;i++)f?d.els.push(d.els.shift()):d.els.unshift(d.els.pop());if(f){for(var j=0,k=d.els.length;j<k;j++)a(d.els[j]).css("z-index",k-j+h)}else{var l=a(b).css("z-index");g.css("z-index",parseInt(l,10)+1+h)}g.animate({left:0,top:0},d.speedOut,d.easeOut,function(){a(f?this:b).hide();if(e)e()})})};a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0})};a.fn.cycle.transitions.turnUp=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.cssBefore.top=c.cycleH;d.animIn.height=c.cycleH;d.animOut.width=c.cycleW});d.cssFirst.top=0;d.cssBefore.left=0;d.cssBefore.height=0;d.animIn.top=0;d.animOut.height=0};a.fn.cycle.transitions.turnDown=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssFirst.top=0;d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.height=0;d.animOut.height=0};a.fn.cycle.transitions.turnLeft=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.cssBefore.left=c.cycleW;d.animIn.width=c.cycleW});d.cssBefore.top=0;d.cssBefore.width=0;d.animIn.left=0;d.animOut.width=0};a.fn.cycle.transitions.turnRight=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.animIn.width=c.cycleW;d.animOut.left=b.cycleW});a.extend(d.cssBefore,{top:0,left:0,width:0});d.animIn.left=0;d.animOut.width=0};a.fn.cycle.transitions.zoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,false,true);d.cssBefore.top=c.cycleH/2;d.cssBefore.left=c.cycleW/2;a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH});a.extend(d.animOut,{width:0,height:0,top:b.cycleH/2,left:b.cycleW/2})});d.cssFirst.top=0;d.cssFirst.left=0;d.cssBefore.width=0;d.cssBefore.height=0};a.fn.cycle.transitions.fadeZoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,false);d.cssBefore.left=c.cycleW/2;d.cssBefore.top=c.cycleH/2;a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH})});d.cssBefore.width=0;d.cssBefore.height=0;d.animOut.opacity=0};a.fn.cycle.transitions.blindX=function(b,c,d){var e=b.css("overflow","hidden").width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.width=c.cycleW;d.animOut.left=b.cycleW});d.cssBefore.left=e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=e};a.fn.cycle.transitions.blindY=function(b,c,d){var e=b.css("overflow","hidden").height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssBefore.top=e;d.cssBefore.left=0;d.animIn.top=0;d.animOut.top=e};a.fn.cycle.transitions.blindZ=function(b,c,d){var e=b.css("overflow","hidden").height();var f=b.width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssBefore.top=e;d.cssBefore.left=f;d.animIn.top=0;d.animIn.left=0;d.animOut.top=e;d.animOut.left=f};a.fn.cycle.transitions.growX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.cssBefore.left=this.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=0});d.cssBefore.top=0;d.cssBefore.width=0};a.fn.cycle.transitions.growY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.cssBefore.top=this.cycleH/2;d.animIn.top=0;d.animIn.height=this.cycleH;d.animOut.top=0});d.cssBefore.height=0;d.cssBefore.left=0};a.fn.cycle.transitions.curtainX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true,true);d.cssBefore.left=c.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=b.cycleW/2;d.animOut.width=0});d.cssBefore.top=0;d.cssBefore.width=0};a.fn.cycle.transitions.curtainY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false,true);d.cssBefore.top=c.cycleH/2;d.animIn.top=0;d.animIn.height=c.cycleH;d.animOut.top=b.cycleH/2;d.animOut.height=0});d.cssBefore.height=0;d.cssBefore.left=0};a.fn.cycle.transitions.cover=function(b,c,d){var e=d.direction||"left";var f=b.css("overflow","hidden").width();var g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);if(e=="right")d.cssBefore.left=-f;else if(e=="up")d.cssBefore.top=g;else if(e=="down")d.cssBefore.top=-g;else d.cssBefore.left=f});d.animIn.left=0;d.animIn.top=0;d.cssBefore.top=0;d.cssBefore.left=0};a.fn.cycle.transitions.uncover=function(b,c,d){var e=d.direction||"left";var f=b.css("overflow","hidden").width();var g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true);if(e=="right")d.animOut.left=f;else if(e=="up")d.animOut.top=-g;else if(e=="down")d.animOut.top=g;else d.animOut.left=-f});d.animIn.left=0;d.animIn.top=0;d.cssBefore.top=0;d.cssBefore.left=0};a.fn.cycle.transitions.toss=function(b,c,d){var e=b.css("overflow","visible").width();var f=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true);if(!d.animOut.left&&!d.animOut.top)a.extend(d.animOut,{left:e*2,top:-f/2,opacity:0});else d.animOut.opacity=0});d.cssBefore.left=0;d.cssBefore.top=0;d.animIn.left=0};a.fn.cycle.transitions.wipe=function(b,c,d){var e=b.css("overflow","hidden").width();var f=b.height();d.cssBefore=d.cssBefore||{};var g;if(d.clip){if(/l2r/.test(d.clip))g="rect(0px 0px "+f+"px 0px)";else if(/r2l/.test(d.clip))g="rect(0px "+e+"px "+f+"px "+e+"px)";else if(/t2b/.test(d.clip))g="rect(0px "+e+"px 0px 0px)";else if(/b2t/.test(d.clip))g="rect("+f+"px "+e+"px "+f+"px 0px)";else if(/zoom/.test(d.clip)){var h=parseInt(f/2,10);var i=parseInt(e/2,10);g="rect("+h+"px "+i+"px "+h+"px "+i+"px)"}}d.cssBefore.clip=d.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var j=d.cssBefore.clip.match(/(\d+)/g);var k=parseInt(j[0],10),l=parseInt(j[1],10),m=parseInt(j[2],10),n=parseInt(j[3],10);d.before.push(function(b,c,d){if(b==c)return;var g=a(b),h=a(c);a.fn.cycle.commonReset(b,c,d,true,true,false);d.cssAfter.display="block";var i=1,j=parseInt(d.speedIn/13,10)-1;(function o(){var a=k?k-parseInt(i*(k/j),10):0;var b=n?n-parseInt(i*(n/j),10):0;var c=m<f?m+parseInt(i*((f-m)/j||1),10):f;var d=l<e?l+parseInt(i*((e-l)/j||1),10):e;h.css({clip:"rect("+a+"px "+d+"px "+c+"px "+b+"px)"});i++<=j?setTimeout(o,13):g.css("display","none")})()});a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0});d.animIn={left:0};d.animOut={left:0}}})(jQuery);
