$(window).ready(function () {
    $(function () {
        marker0();
        count = 0;
        setInterval(function () {
            count++;
            if (count < 3) {
                marker0();
            }
        }, 9000);
    });
});

function marker0() {
    $('.cover').css({'width': '1px', 'height': '1px', 'top': '50%', 'left': '50%', 'display': 'block'});
    $('.image0').css('right', '-150px');
    $('.image0').css('display', 'block');
    $('.image1').css('display', 'none');
    $('.image2').css('right', '-150px');
    $('.image2').css('display', 'block');
    $('.image3').css('display', 'none');
    $('.text').css('display', 'none');
    $('.next-text').css('display', 'none');
    $('.bottom-body').css('bottom', '-37px');
    $(".cover").animate({
        width: '600px',
        height: '500px',
        top: '-50%',
        left: '-50%'
    }, 300, false, function () {
        $(".cover").fadeOut().promise().done(function () {
            $(".text").each(function (i) {
                $(this).delay(250 * i).fadeIn(500);
            }).promise()
                    .done(function () {
                        $(".bottom-body").animate({
                            bottom: '0px'
                        }, 500, false, function () {
                            $(".image0").animate({
                                right: '20px'
                            }, 500, false, function () {
                                $(".image0").fadeOut(800);
                                $(".image1").fadeIn(500);
                                $(".text, .image1").delay(1200).fadeOut().promise().done(function () {
                                    $(".next-text").each(function (e) {
                                        $(this).delay(250 * e).fadeIn(500);
                                    }).promise()
                                            .done(function () {
                                                $(".image2").animate({
                                                    right: '0px'
                                                }, 500, false, function () {
                                                    $(".image2").fadeOut(800);
                                                    $(".image3").fadeIn(500);
                                                });
                                            });
                                });
                            });
                        }
                        );
                    });
        });
    });
}
;



