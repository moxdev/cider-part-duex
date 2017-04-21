!function(n,t,e,i){"use strict";var o=function(){var n=e.body||e.documentElement,n=n.style;return""==n.WebkitTransition?"-webkit-":""==n.MozTransition?"-moz-":""==n.OTransition?"-o-":""==n.transition&&""},r=!1!==o(),a=function(n,t,e){var i={},r=o();i[r+"transform"]="translateX("+t+")",i[r+"transition"]=r+"transform "+e+"s linear",n.css(i)},u="ontouchstart"in t,c=t.navigator.pointerEnabled||t.navigator.msPointerEnabled,d=function(n){if(u)return!0;if(!c||void 0===n||void 0===n.pointerType)return!1;if(!hasPointers&&"pointermove"==i.type||!wasTouched(i.originalEvent)||options.quitOnImgClick)return!0;if(void 0!==n.MSPOINTER_TYPE_MOUSE){if(n.MSPOINTER_TYPE_MOUSE!=n.pointerType)return!0}else if("mouse"!=n.pointerType)return!0;return!1};n.fn.imageLightbox=function(i){var i=n.extend({selector:'id="imagelightbox"',animationSpeed:250,preloadNext:!0,enableKeyboard:!0,quitOnEnd:!1,quitOnImgClick:!1,quitOnDocClick:!0,onStart:!1,onEnd:!1,onLoadStart:!1,onLoadEnd:!1},i),o=n([]),l=n(),f=n(),g=0,p=0,s=0,h=!1,v=function(){if(!f.length)return!0;var e=.8*n(t).width(),i=.9*n(t).height(),o=new Image;o.src=f.attr("src"),o.onload=function(){if(g=o.width,p=o.height,g>e||p>i){var r=g/p>e/i?g/e:p/i;g/=r,p/=r}f.css({width:g+"px",height:p+"px",top:(n(t).height()-p)/2+"px",left:(n(t).width()-g)/2+"px"})}},m=function(t){if(h)return!1;if(t=void 0!==t&&("left"==t?1:-1),f.length){if(!1!==t&&(o.length<2||!0===i.quitOnEnd&&(-1===t&&0==o.index(l)||1===t&&o.index(l)==o.length-1)))return E(),!1;var e={opacity:0};r?a(f,100*t-s+"px",i.animationSpeed/1e3):e.left=parseInt(f.css("left"))+100*t+"px",f.animate(e,i.animationSpeed,function(){x()}),s=0}h=!0,!1!==i.onLoadStart&&i.onLoadStart(),setTimeout(function(){f=n("<img "+i.selector+" />").attr("src",l.attr("href")).on("load",function(){f.appendTo("body"),v();var e={opacity:1};if(f.css("opacity",0),r)a(f,-100*t+"px",0),setTimeout(function(){a(f,"0px",i.animationSpeed/1e3)},50);else{var u=parseInt(f.css("left"));e.left=u+"px",f.css("left",u-100*t+"px")}if(f.animate(e,i.animationSpeed,function(){h=!1,!1!==i.onLoadEnd&&i.onLoadEnd()}),i.preloadNext){var c=o.eq(o.index(l)+1);c.length||(c=o.eq(0)),n("<img />").attr("src",c.attr("href"))}}).on("error",function(){!1!==i.onLoadEnd&&i.onLoadEnd()});var e=0,u=0,p=0;f.on(c?"pointerup MSPointerUp":"click",function(n){if(n.preventDefault(),i.quitOnImgClick)return E(),!1;if(d(n.originalEvent))return!0;var t=(n.pageX||n.originalEvent.pageX)-n.target.offsetLeft;l=o.eq(o.index(l)-(g/2>t?1:-1)),l.length||(l=o.eq(g/2>t?o.length:0)),m(g/2>t?"left":"right")}).on("touchstart pointerdown MSPointerDown",function(n){return!(d(n.originalEvent)&&!i.quitOnImgClick)||(r&&(p=parseInt(f.css("left"))),void(e=n.originalEvent.pageX||n.originalEvent.touches[0].pageX))}).on("touchmove pointermove MSPointerMove",function(n){return!(d(n.originalEvent)&&!i.quitOnImgClick)||(n.preventDefault(),u=n.originalEvent.pageX||n.originalEvent.touches[0].pageX,s=e-u,void(r?a(f,-s+"px",0):f.css("left",p-s+"px")))}).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",function(n){return!(d(n.originalEvent)&&!i.quitOnImgClick)||void(Math.abs(s)>50?(l=o.eq(o.index(l)-(s<0?1:-1)),l.length||(l=o.eq(s<0?o.length:0)),m(s>0?"right":"left")):r?a(f,"0px",i.animationSpeed/1e3):f.animate({left:p+"px"},i.animationSpeed/2))})},i.animationSpeed+100)},x=function(){return!!f.length&&(f.remove(),void(f=n()))},E=function(){return!!f.length&&void f.animate({opacity:0},i.animationSpeed,function(){x(),h=!1,!1!==i.onEnd&&i.onEnd()})},S=function(t){t.each(function(){o=o.add(n(this))}),t.on("click.imageLightbox",function(t){return t.preventDefault(),!h&&(h=!1,!1!==i.onStart&&i.onStart(),l=n(this),void m())})};return n(t).on("resize",v),i.quitOnDocClick&&n(e).on(u?"touchend":"click",function(t){f.length&&!n(t.target).is(f)&&E()}),i.enableKeyboard&&n(e).on("keyup",function(n){return!f.length||(n.preventDefault(),27==n.keyCode&&E(),void(37!=n.keyCode&&39!=n.keyCode||(l=o.eq(o.index(l)-(37==n.keyCode?1:-1)),l.length||(l=o.eq(37==n.keyCode?o.length:0)),m(37==n.keyCode?"left":"right"))))}),S(n(this)),this.switchImageLightbox=function(n){var t=o.eq(n);if(t.length){var e=o.index(l);l=t,m(n<e?"left":"right")}return this},this.addToImageLightbox=function(n){S(n)},this.quitImageLightbox=function(){return E(),this},this}}(jQuery,window,document);