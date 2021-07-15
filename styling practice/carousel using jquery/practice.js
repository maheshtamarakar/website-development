function slider() {
    $current = $('.slider img.active');

    if ($current.length == 0) {
        $current.addClass('active');
        console.log('f-if');

    }
    else {
        $next = $current.removeClass('active').next();
        // console.log('f-else');
        
        if ($next.length == 0) {
            $('.slider img:first-child').addClass('active');
            // console.log('if');

        }
        else {
            $next.addClass('active');
            // console.log('else');
        }
    }
}
setInterval(slider, 2000);