AOS.init();
$('.tech-list').owlCarousel({
    nav: false,
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    center: true,
    responsive: {
        0: {
            items: 4,
        },
        600: {
            items: 5,
        },
        1000: {
            items: 7,
        }
    }
});
$('.tech-list').trigger('play.owl.autoplay', [2000]);

function setSpeed() {
    $('.tech-list').trigger('play.owl.autoplay', [6000]);
}

setTimeout(setSpeed, 1000);
$('.tm-list').owlCarousel({
    nav: false,
    loop: true,
    margin: 30,
    items: 1,
    dots: true,
    autoplay: true,
});
$('.blog-list').owlCarousel({
    nav: false,
    loop: true,
    margin: 50,
    items: 3,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});
$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

});
jQuery(document).ready(function ($) {
    (function ($) {
        $(document).ready(function () {
            "use strict";

            // PAGE TRANSITION
            $('body a').on('click', function (e) {
                var target = $(this).attr('target');
                var fancybox = $(this).data('fancybox');
                var url = this.getAttribute("href");
                if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


                    e.preventDefault();
                    var url = this.getAttribute("href");
                    if (url.indexOf('#') != -1) {
                        var hash = url.substring(url.indexOf('#'));


                        if ($('body ' + hash).length != 0) {
                            $('.page-transition').removeClass("active");


                        }
                    } else {
                        $('.page-transition').toggleClass("active");
                        setTimeout(function () {
                            window.location = url;
                        }, 1300);

                    }
                }
            });




        });
        // END JQUERY	





        // PRELOADER
        var width = 100,
            perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60, 10) * 100;

        var PercentageID = $("#percentage"),
            start = 0,
            end = 100,
            durataion = time;
        animateValue(PercentageID, start, end, durataion);

        function animateValue(id, start, end, duration) {

            var range = end - start,
                current = start,
                increment = end > start ? 1 : -1,
                stepTime = Math.abs(Math.floor(duration / range)),
                obj = $(id);

            var timer = setInterval(function () {
                current += increment;
                $(obj).text(current);
                //obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }


        setInterval(function () {
            $(".page-loaded").addClass('header-ready');
        }, 3500);



        setInterval(function () {
            $("body").addClass("page-loaded");
        }, time);




        // window.requestAnimationFrame(animateMe);




    })(jQuery);
});









var animContainer = document.getElementById('bodymovin');
var animationData = { "v": "5.5.8", "fr": 30, "ip": 0, "op": 109, "w": 1920, "h": 1080, "nm": "TEST", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Shape Layer 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 2, "s": [100] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 104, "s": [100] }, { "t": 106, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": -180, "ix": 10 }, "p": { "a": 0, "k": [943.938, 546.688, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 2, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-0.063, -0.063], [0, 0], [-0.25, -0.25], [0, 0]], "c": true }] }, { "i": { "x": 0.628, "y": 1 }, "o": { "x": 0.552, "y": 0 }, "t": 6, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[128.75, -75.75], [128.313, -76], [-129.75, 72.75], [-129.75, 72.875]], "c": true }] }, { "i": { "x": 0.428, "y": 1 }, "o": { "x": 0.616, "y": 0 }, "t": 18, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [980.75, -589], [-1032, 608.75], [-1032, 616]], "c": true }] }, { "i": { "x": 0.428, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 31, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 37, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 50, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, -560]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 56, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, -560]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.572, "y": 0 }, "t": 69, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.384, "y": 1 }, "o": { "x": 0.572, "y": 0 }, "t": 75, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.448, "y": 1 }, "o": { "x": 0.372, "y": 0 }, "t": 88, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [980.75, -589], [-1032, 608.75], [-1032, 616]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 100, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[128.75, -75.75], [128.313, -76], [-129.75, 72.75], [-129.75, 72.875]], "c": true }] }, { "t": 104, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-0.063, -0.063], [0, 0], [-0.25, -0.25], [0, 0]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.247059003045, 0.737254961799, 0.929412004059, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 5, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.247059003045, 0.737254961799, 0.929412004059, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 113, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Shape Layer 1", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 2, "s": [100] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 104, "s": [100] }, { "t": 106, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [960, 540, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 2, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-0.063, -0.063], [0, 0], [-0.25, -0.25], [0, 0]], "c": true }] }, { "i": { "x": 0.628, "y": 1 }, "o": { "x": 0.552, "y": 0 }, "t": 6, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[128.75, -75.75], [128.313, -76], [-129.75, 72.75], [-129.75, 72.875]], "c": true }] }, { "i": { "x": 0.428, "y": 1 }, "o": { "x": 0.616, "y": 0 }, "t": 18, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [980.75, -589], [-1032, 608.75], [-1032, 616]], "c": true }] }, { "i": { "x": 0.428, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 31, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 37, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 50, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, -560]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 56, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, -560]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.572, "y": 0 }, "t": 69, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.384, "y": 1 }, "o": { "x": 0.572, "y": 0 }, "t": 75, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [-1031.563, -590], [-1032, -589], [-1032, 616]], "c": true }] }, { "i": { "x": 0.448, "y": 1 }, "o": { "x": 0.372, "y": 0 }, "t": 88, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[996, -589], [980.75, -589], [-1032, 608.75], [-1032, 616]], "c": true }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 100, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[128.75, -75.75], [128.313, -76], [-129.75, 72.75], [-129.75, 72.875]], "c": true }] }, { "t": 104, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-0.063, -0.063], [0, 0], [-0.25, -0.25], [0, 0]], "c": true }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.247059003045, 0.737254961799, 0.929412004059, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 5, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.247059003045, 0.737254961799, 0.929412004059, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 112, "st": 0, "bm": 0 }], "markers": [] };
var params = {
    container: animContainer,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'none'
    }
};

var anim = bodymovin.loadAnimation(params);