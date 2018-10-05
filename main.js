
// arrow up start
function up() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, ((top + 50) / -23));
        t = setTimeout('up()', 20);
    } else clearTimeout(t);
    return false;
}
jQuery(function (f) {
    var element = f('#back-top');
    f(window).scroll(function () {
        element['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](250);
    });
});

// arrow up end

// map_customization start..


