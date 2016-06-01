$(function() {
$('body').append('<div></div>');
var $wrapper = $('div');
$wrapper.addClass('wrapper');

console.log($wrapper);
$wrapper.append('<ul></ul>');
var $header = $('ul');
$header.addClass('header');
$header.append('<li></li>');

var $tab1 = $('li');
$tab1.addClass('tab1');
$tab1.append('<div></div>');
        $("li>div:only-child").addClass("tab7");
        $("li>div:only-child").append("Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.");
        //$("li>ul:only-child").append("<li></li>");
                              
      $tab1.append('<a></a>');
      $('a').attr('href', '#');
      $("a:first").addClass('tab4');
	  $("a:first").append('Nunc tincidunt');
		  //var kol_vo_a =  $('a').size();
		  /*if (kol_vo_a= 1) {
			  var $tab4 = $('a');
              $tab4.addClass('tab4');
              $tab4.append('Nunc tincidunt');
		     }*/
$header.append('<li></li>');
var $tab2 = $('li:last-child');
$tab2.addClass('tab2');
$tab2.append('<div></div>');
           $("li>div:only-child").addClass("tab8");
          $("li>div:only-child").append("Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.");			
      $tab2.append('<a></a>');
      $('a').attr('href', '#');
      $("a:last").addClass('tab5');
	  $("a:last").append('Proin dolor');
//var $tab6 = $('a:last-child');
//$tab6.addClass('tab6');
//$tab6.append('Anean lacinia');
$header.append('<li></li>');
$("ul>li:last-child").addClass("tab3");
$("ul>li:last-child").append('<div></div>');
           $("li>div:only-child").addClass("tab9");
           $("li>div:only-child").append("Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.");			
	  $("ul>li:last-child").append('<a></a>');
      $('a').attr('href', '#');
      $("a:last").addClass('tab6');
	  $("a:last").append('Aenean lacinia');
//var $tab3 = $('li:list-child');
//$tab3.addClass('tab3');
var $links1 = $('.tab4');
$links1.on('click', function(e){
  if ('click') {
  $('.tab8').css('display', 'none');
  $('.tab9').css('display', 'none');
  var $tab7 = $(this).siblings('.tab7');
  e.preventDefault();
  $tab7.show();
  }
})
var $links2 = $('.tab5');
$links2.on('click', function(e){
  if ('click') {
  $('.tab7').css('display', 'none');
  $('.tab9').css('display', 'none');
  var $tab8 = $(this).siblings('.tab8');
  e.preventDefault();
  $tab8.show();
  }
})
var $links3 = $('.tab6');

$links3.on('click', function(e){
  if ('click') {
  $('.tab7').css('display', 'none');
  $('.tab8').css('display', 'none');
  var $tab9 = $(this).siblings('.tab9');
  e.preventDefault();
  $tab9.show();
  }
})
});

