function PicListHover(classs) {
    if (classs == null) {
        var PicListBox = $(".PicList").find("li");
        PicListBox.hover(function() {
            $(this).find("span").stop().animate({
                bottom: "0px",
            }, 200);
        }, function() {
            $(this).find("span").stop().animate({
                bottom: "-80px"
				
            }, 200);
        });
    } else {
        $("." + classs).hover(function() {
            $(this).find("span").stop().animate({
                bottom: "0px"
            }, 200);
        }, function() {
            $(this).find("span").stop().animate({
                bottom: "-80px"
            }, 200);
        });
    }
}

