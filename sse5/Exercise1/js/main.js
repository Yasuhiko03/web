$(function(){
  var $window       = $(window);
  var $nav_trigger  = $(".navbar-toggle");
  var $nav_collapse = $(".navbar-collapse");
  
  // ハンバーガーアイコンclick時のメニュー開閉処理
  $nav_trigger.on("click", function(){
    $nav_collapse.toggleClass("is-active").toggle();
  });

  // resize時グローバルナビが非表示に場合は、表示する
  // SPでグローバルナビを閉じた際に、PC画面にするとグローバルナビが非表示のままになるため
  $window.on('resize', $.throttle(50, function(){
    if($nav_trigger.is(":hidden") && $nav_collapse.is(":hidden")){ $nav_collapse.show();}
    if($nav_trigger.is(":visible") && !$nav_collapse.hasClass("is-active")){ $nav_collapse.hide();}
  }));
});