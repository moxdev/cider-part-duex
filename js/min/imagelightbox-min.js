!function(t,e,n,i){"use strict";var o=function(){var t=n.body||n.documentElement,t=t.style;return""==t.WebkitTransition?"-webkit-":""==t.MozTransition?"-moz-":""==t.OTransition?"-o-":""==t.transition&&""},r=o()!==!1,a=function(t,e,n){var i={},r=o();i[r+"transform"]="translateX("+e+")",i[r+"transition"]=r+"transform "+n+"s linear",t.css(i)},u="ontouchstart"in e,d=e.navigator.pointerEnabled||e.navigator.msPointerEnabled,c=function(t){if(u)return!0;if(!d||"undefined"==typeof t||"undefined"==typeof t.pointerType)return!1;if("undefined"!=typeof t.MSPOINTER_TYPE_MOUSE){if(t.MSPOINTER_TYPE_MOUSE!=t.pointerType)return!0}else if("mouse"!=t.pointerType)return!0;return!1};t.fn.imageLightbox=function(i){var i=t.extend({selector:'id="imagelightbox"',allowedTypes:"png|jpg|jpeg|gif",animationSpeed:250,preloadNext:!0,enableKeyboard:!0,quitOnEnd:!1,quitOnImgClick:!1,quitOnDocClick:!0,onStart:!1,onEnd:!1,onLoadStart:!1,onLoadEnd:!1},i),o=t([]),f=t(),l=t(),p=0,s=0,g=0,h=!1,v=function(e){return"a"==t(e).prop("tagName").toLowerCase()&&new RegExp(".("+i.allowedTypes+")$","i").test(t(e).attr("href"))},m=function(){if(!l.length)return!0;var n=.8*t(e).width(),i=.9*t(e).height(),o=new Image;o.src=l.attr("src"),o.onload=function(){if(p=o.width,s=o.height,p>n||s>i){var r=p/s>n/i?p/n:s/i;p/=r,s/=r}l.css({width:p+"px",height:s+"px",top:(t(e).height()-s)/2+"px",left:(t(e).width()-p)/2+"px"})}},x=function(e){if(h)return!1;if(e="undefined"!=typeof e&&("left"==e?1:-1),l.length){if(e!==!1&&(o.length<2||i.quitOnEnd===!0&&(e===-1&&0==o.index(f)||1===e&&o.index(f)==o.length-1)))return y(),!1;var n={opacity:0};r?a(l,100*e-g+"px",i.animationSpeed/1e3):n.left=parseInt(l.css("left"))+100*e+"px",l.animate(n,i.animationSpeed,function(){E()}),g=0}h=!0,i.onLoadStart!==!1&&i.onLoadStart(),setTimeout(function(){l=t("<img "+i.selector+" />").attr("src",f.attr("href")).load(function(){l.appendTo("body"),m();var n={opacity:1};if(l.css("opacity",0),r)a(l,-100*e+"px",0),setTimeout(function(){a(l,"0px",i.animationSpeed/1e3)},50);else{var u=parseInt(l.css("left"));n.left=u+"px",l.css("left",u-100*e+"px")}if(l.animate(n,i.animationSpeed,function(){h=!1,i.onLoadEnd!==!1&&i.onLoadEnd()}),i.preloadNext){var d=o.eq(o.index(f)+1);d.length||(d=o.eq(0)),t("<img />").attr("src",d.attr("href")).load()}}).error(function(){i.onLoadEnd!==!1&&i.onLoadEnd()});var n=0,u=0,s=0;l.on(d?"pointerup MSPointerUp":"click",function(t){if(t.preventDefault(),i.quitOnImgClick)return y(),!1;if(c(t.originalEvent))return!0;var e=(t.pageX||t.originalEvent.pageX)-t.target.offsetLeft;f=o.eq(o.index(f)-(p/2>e?1:-1)),f.length||(f=o.eq(p/2>e?o.length:0)),x(p/2>e?"left":"right")}).on("touchstart pointerdown MSPointerDown",function(t){return!(c(t.originalEvent)&&!i.quitOnImgClick)||(r&&(s=parseInt(l.css("left"))),void(n=t.originalEvent.pageX||t.originalEvent.touches[0].pageX))}).on("touchmove pointermove MSPointerMove",function(t){return!((d||"pointermove"!=t.type)&&c(t.originalEvent)&&!i.quitOnImgClick)||(t.preventDefault(),u=t.originalEvent.pageX||t.originalEvent.touches[0].pageX,g=n-u,void(r?a(l,-g+"px",0):l.css("left",s-g+"px")))}).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",function(t){return!(c(t.originalEvent)&&!i.quitOnImgClick)||void(Math.abs(g)>50?(f=o.eq(o.index(f)-(g<0?1:-1)),f.length||(f=o.eq(g<0?o.length:0)),x(g>0?"right":"left")):r?a(l,"0px",i.animationSpeed/1e3):l.animate({left:s+"px"},i.animationSpeed/2))})},i.animationSpeed+100)},E=function(){return!!l.length&&(l.remove(),void(l=t()))},y=function(){return!!l.length&&void l.animate({opacity:0},i.animationSpeed,function(){E(),h=!1,i.onEnd!==!1&&i.onEnd()})};return t(e).on("resize",m),i.quitOnDocClick&&t(n).on(u?"touchend":"click",function(e){l.length&&!t(e.target).is(l)&&y()}),i.enableKeyboard&&t(n).on("keyup",function(t){return!l.length||(t.preventDefault(),27==t.keyCode&&y(),void(37!=t.keyCode&&39!=t.keyCode||(f=o.eq(o.index(f)-(37==t.keyCode?1:-1)),f.length||(f=o.eq(37==t.keyCode?o.length:0)),x(37==t.keyCode?"left":"right"))))}),t(n).on("click",this.selector,function(e){return!v(this)||(e.preventDefault(),!h&&(h=!1,i.onStart!==!1&&i.onStart(),f=t(this),void x()))}),this.each(function(){return!v(this)||void(o=o.add(t(this)))}),this.switchImageLightbox=function(t){var e=o.eq(t);if(e.length){var n=o.index(f);f=e,x(t<n?"left":"right")}return this},this.quitImageLightbox=function(){return y(),this},this}}(jQuery,window,document);