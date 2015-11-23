function toDomain(domain, obj){
    cleanSoMsg();
    cleanSuMsg();
    clearSoValue();
    clearValue();
    $("#content_span").show();
    $(".solution_complete").hide();
    $(".solution_menu_ul").children().attr('class','');
    $(obj).attr('class','active');
    $("div[name='domain']").hide();
    if(domain=='app-audit') {
        $("#nav_span,#content_span").css('min-height','1400px');
    }else if(domain=='fin-standard-audit') {
        $("#nav_span,#content_span").css('min-height','1200px');
    }else{
        $("#nav_span,#content_span").css('min-height','1000px')
    }
    domainSuggestion(domain);
    $("#"+domain).show();
}

function domainSuggestion(domain) {
    if (domain == 'app-audit') {
        $("#solution_suggestion").hide();
    } else {
        $("#solution_suggestion").show();
    }
}