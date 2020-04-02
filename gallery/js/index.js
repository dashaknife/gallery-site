//menu
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
   $('.content').toggleClass('content_active');

});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});

//плавный переход страниц
$(document).ready(function(){
    var body = $("body");
    body.fadeIn(600);
    $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e){
        e.preventDefault();
        $("body").fadeOut(800);
        var self =this;
        setTimeout(function(){
            window.location.href= $(self).attr("href");
        }, 800);
    });
});

//big picture
$(document).ready(function() {
    $(".works__photo").click(function(){
          var img = $(this);
        var src = img.attr('src');
        $("body").append("<div class='popup'>"+
                         "<div class='popup_bg'></div>"+
                         "<img src='"+src+"' class='popup_img' />"+
                         "</div>");
        $(".popup").fadeIn(600);
        $(".popup_bg").click(function(){
            $(".popup").fadeOut(600);
            setTimeout(function() {
              $(".popup").remove();
            }, 600);
        });
    });

});
