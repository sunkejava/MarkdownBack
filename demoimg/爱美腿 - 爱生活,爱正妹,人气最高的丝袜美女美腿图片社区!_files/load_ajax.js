//边框效果--移入
function biankuang(obj){
    $(obj).find('.b_1').stop(true).animate({
        height:'305px'
    },500)
    $(obj).find('.b_2').stop(true).delay(500).animate({
        width:'360px'
    },500)
    $(obj).find('.b_3').stop(true).animate({
        height:'305px'
    },500)
    $(obj).find('.b_4').stop(true).delay(500).animate({
        width:'360px'
    },500)
}
//边框效果--移出
function biankuang1(obj){

    $(obj).find('.b_1').stop(true).delay(200).animate({
        height:'0px'
    },200)
    $(obj).find('.b_2').stop(true).animate({
        width:'0px'
    },200)
    $(obj).find('.b_3').stop(true).delay(200).animate({
        height:'0px'
    },200)
    $(obj).find('.b_4').stop(true).animate({
        width:'0px'
    },200)
}
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
       obj.setHomePage(url);
   }catch(e){
       if(window.netscape){
          try{
              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
         }catch(e){
              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
          }
       }else{
        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
       }
  }
}
 
//收藏本站 
function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }
catch (e) {
     try {
       window.sidebar.addPanel(title, url, "");
    }
     catch (e) {
         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
     }
  }
}