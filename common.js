$(function () {
    $('a[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

$(function () {
    $(window).on('load scroll resize', function () {
        let nowPosition = $(window).scrollTop();
        let trigger = $(window).height();
        if (nowPosition >= trigger) {
            if (!$('#scrolltarget').hasClass('active')) {
                $('#scrolltarget').addClass('active').fadeIn();
            }
        } else {
            if ($('#scrolltarget').hasClass('active')) {
                $('#scrolltarget').removeClass('active').fadeOut();
            }
        }
    });
});

$(document).ready(function () {
    let $button = $('#cta-floating-area');
    let showTop = $('#contents_about').offset().top;
    let hideTop = $('#floating_end').offset().top;

    $(window).scroll(function () {
        if (window.innerWidth <= 768) {
            if ($(window).scrollTop() >= showTop && $(window).scrollTop() < hideTop) {
                $button.addClass('visible');
            } else {
                $button.removeClass('visible');
            }
        }
    });

    $button.click(function () {
        let headerHeight = $('header').height(); // ヘッダーの高さを取得
        let scrollToPosition = $('.showButtonClass').offset().top - headerHeight; // ヘッダーの高さ分だけオフセット

        $('html, body').animate(
            {
                scrollTop: scrollToPosition, // スクロール先の位置へアニメーション付きで移動
            },
            500
        ); // 500ms（0.5秒）の間でスクロールアニメーションを実行

        return false; // デフォルトのイベントをキャンセル
    });
});
