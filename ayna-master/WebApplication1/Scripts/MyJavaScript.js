$("#target").click(function () {
    name = $('#text_input').val();//получить значение то что написано на текстбоксе
    count = $('#mylist div').length;//количество дивов в майлисте
    $('#mylist').append('<div id="' + count + '" class="list-group-item">' + '<label><input class="click" type="checkbox" value="">' + name + '</label></div>');
});
$(document).on('click', '.click', function (e) {
    list = $(this).parent().parent();
    if ($(".click").is(':checked')) {
        list.css("color", "red");
    }
    else {
        list.css("color", "black");
    }
});
$("#delete").click(function () {
    $("input:checked").parent().parent().remove();
});