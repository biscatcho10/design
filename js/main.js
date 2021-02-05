$(document).ready(function () {
    $("disagree").click(function (e) { 
        e.preventDefault();
        console.log('ddd');
        $(".errorMsg").css('display', 'block');
    });
});