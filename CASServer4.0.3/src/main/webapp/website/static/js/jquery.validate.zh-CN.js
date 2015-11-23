jQuery.extend(jQuery.validator.messages, {
    required: "必填项目，不能留空。",
    remote: "请修复该项。",
    email: "请输入正确的邮箱地址。",
    url: "请输入正确的URL地址。",
    date: "请输入正确的日期格式。",
    dateISO: "请输入正确的日期格式（ISO）。",
    number: "只能输入数字。",
    digits: "只能输入数字。",
    creditcard: "请输入正确的信用卡号。",
    equalTo: "两次输入的内容不一致。",
    accept: "错误的扩展名。",
    maxlength: jQuery.validator.format("最多只能输入{0}个字。"),
    minlength: jQuery.validator.format("最少输入{0}个字。"),
    rangelength: jQuery.validator.format("只能输入{0}-{1}个字符。"),
    range: jQuery.validator.format("只能输入{0}到{1}之间的数字。"),
    max: jQuery.validator.format("只能输入不大于{0}的数字。"),
    min: jQuery.validator.format("只能输入不小于{0}的数字。")
});
/*
jQuery.extend(jQuery.validator.messages, {
    required: gettext("This field is required."),
    remote: gettext("Please fix this field."),
    email: gettext("Please enter a valid email address."),
    url: gettext("Please enter a valid URL."),
    date: gettext("Please enter a valid date."),
    dateISO: gettext("Please enter a valid date (ISO)."),
    number: gettext("Please enter a valid number."),
    digits: gettext("Please enter only digits."),
    creditcard: gettext("Please enter a valid credit card number."),
    equalTo: gettext("Please enter the same value again."),
    accept: gettext("Please enter a value with a valid extension."),
    maxlength: jQuery.validator.format(gettext("Please enter no more than {0} characters.")),
    minlength: jQuery.validator.format(gettext("Please enter at least {0} characters.")),
    rangelength: jQuery.validator.format(gettext("Please enter a value between {0} and {1} characters long.")),
    range: jQuery.validator.format(gettext("Please enter a value between {0} and {1}.")),
    max: jQuery.validator.format(gettext("Please enter a value less than or equal to {0}.")),
    min: jQuery.validator.format(gettext("Please enter a value greater than or equal to {0}."))
});*/