//document.domain = "http://www.bangcle.com/static/js/testin.cn";

$(document).ready(function() {
	$("#fast_experience").click(function(){
		   fastExperience();
	   });
});

var count = 0;
function getCount() {
	$.getJSON("http://mapi.testin.cn/realmonitor?op=adaptTotal&jsoncallback=?",
			function(json) {
				if (json != null && json.result != undefined) {
					if (count == 0) {
						$('#counter').counter({
							origin:json.result - 22,
							to:json.result,
							digits:9
						});
					} else {
						$('#counter').counter({
							origin:count,
							to:json.result,
							digits:9
						});
					}
					count = json.result
				};
			});
}

//getCount();
//setInterval(getCount, 30000);

function fastExperience() {
	$("#common_iframe").attr("src", "/app/upload/");
	$("#common_iframe").show();
} 
 
  (function(){
        if(!Function.prototype.bind){
            Function.prototype.bind = function(obj){
                var owner = this,args = Array.prototype.slice.call(arguments),callobj = Array.prototype.shift.call(args);
                return function(e){e=e||top.window.event||window.event;owner.apply(callobj,args.concat([e]));};
            };
        }
    })();
    var banner_tabs = function(id){
        this.ctn = document.getElementById(id);
        this.adLis = null;
        this.btns = null;
        this.animStep = 0.2;//动画速度0.1～0.9
        this.switchSpeed = 6;//自动播放间隔(s)
        this.defOpacity = 1;
        this.tmpOpacity = 1;
        this.crtIndex = 0;
        this.crtLi = null;
        this.adLength = 0;
        this.timerAnim = null;
        this.timerSwitch = null;
        this.init();
    };
    banner_tabs.prototype = {
        fnAnim:function(toIndex){
            if(this.timerAnim){window.clearTimeout(this.timerAnim);}
            if(this.tmpOpacity <= 0){
                this.crtLi.style.opacity = this.tmpOpacity = this.defOpacity;
                this.crtLi.style.filter = 'Alpha(Opacity=' + this.defOpacity*100 + ')';
                this.crtLi.style.zIndex = 0;
                this.crtIndex = toIndex;
                return;
            }
            this.crtLi.style.opacity = this.tmpOpacity = this.tmpOpacity - this.animStep;
            this.crtLi.style.filter = 'Alpha(Opacity=' + this.tmpOpacity*100 + ')';
            this.timerAnim = window.setTimeout(this.fnAnim.bind(this,toIndex),50);
        },
        fnNextIndex:function(){
            return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
        },
        fnSwitch:function(toIndex){
            if(this.crtIndex==toIndex){return;}
            this.crtLi = this.adLis[this.crtIndex];
            for(var i=0;i<this.adLength;i++){
                this.adLis[i].style.zIndex = 0;
            }
            this.crtLi.style.zIndex = 2;
            this.adLis[toIndex].style.zIndex = 1;
            for(var i=0;i<this.adLength;i++){
                this.btns[i].className = '';
            }
            this.btns[toIndex].className = 'cur'
            this.fnAnim(toIndex);
        },
        fnAutoPlay:function(){
            this.fnSwitch(this.fnNextIndex());
        },
        fnPlay:function(){
            this.timerSwitch = window.setInterval(this.fnAutoPlay.bind(this),this.switchSpeed*1000);
        },
        fnStopPlay:function(){
            window.clearTimeout(this.timerSwitch);
        },
        init:function(){
            this.adLis = this.ctn.getElementsByTagName('li');
            this.btns = this.ctn.getElementsByTagName('cite')[0].getElementsByTagName('span');
            this.adLength = this.adLis.length;
            for(var i=0,l=this.btns.length;i<l;i++){
                with({i:i}){
                    this.btns[i].index = i;
                    this.btns[i].onclick = this.fnSwitch.bind(this,i);
                    this.btns[i].onclick = this.fnSwitch.bind(this,i);
                }
            }
            this.adLis[this.crtIndex].style.zIndex = 2;
            this.fnPlay();
            this.ctn.onmouseover = this.fnStopPlay.bind(this);
            this.ctn.onmouseout = this.fnPlay.bind(this);
        }
    };
    $(document).ready(function(){var player1 = new banner_tabs('banner_tabs');});
    
    
    $(document).ready(function() {
	$(".partner_show").jCarouselLite({
    btnNext: ".next",
    btnPrev: ".prev",
		auto: 4000,
    speed: 500
  });
});

$(function(){
            $(".account").bind({
                'mouseover':function(){
                    $(this).addClass("account_mouseover");
                },
                'mouseout':function(){
                    $(this).removeClass('account_mouseover');
                }
            })
            $(".drop_downs").bind({
                'mouseover':function(){
                    $(this).addClass("drop_downs_mouseover");
                },
                'mouseout':function(){
                    $(this).removeClass('drop_downs_mouseover');
                }
            })

        })