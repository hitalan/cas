var mouseover_tid = [];
var mouseout_tid = [];

jQuery(document).ready(function(){
	jQuery('.drop_downs .drop_downs_m').each(function(index){
		jQuery(this).hover(
			function(){
				var _self = this;
				clearTimeout(mouseout_tid[index]);
				mouseover_tid[index] = setTimeout(function() {
					jQuery(_self).find('ul:eq(0)').fadeIn(5);
				}, 5);
			},

			function(){
				var _self = this;
				clearTimeout(mouseover_tid[index]);
				mouseout_tid[index] = setTimeout(function() {
					jQuery(_self).find('ul:eq(0)').fadeOut(5);
				}, 5);
			}

		);
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

window.onload = function(){
    var omain = document.getElementById("main");
    //window.scrollTo(0,omain.scrollHeight); 
}