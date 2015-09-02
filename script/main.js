function triggerIndexMenu(){
   var a = $('header a');
   if($('nav').css('display') == 'none'){
      if ($('#instagram-preview').css('display') == 'none') {
         $('nav').fadeIn(200, function(){
            $('nav').css('display', 'block');
         });

         $($(a[0]).find('img')).attr('src', 'img/logo-white.png');
         $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger-white.png');
      }else{
         closeInstagramPreview();
      }
   }else{
      if ($('#instagram-preview').css('display') == 'none') {
         //hide menu
         $('nav').fadeOut(200, function(){
            $('nav').css('display', 'none');
         });
         $($(a[0]).find('img')).attr('src', 'img/logo.png');
         $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger.png');
      }
   }
}

function triggerMenu(){
   var a = $('header a');
   if($('nav').css('display') == 'none'){
      $('nav').fadeIn(200, function(){
         $('nav').css('display', 'block');
      });

      $($(a[0]).find('img')).attr('src', 'img/logo-white.png');
      $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger-white.png');
   }else{
      $('nav').fadeOut(200, function(){
         $('nav').css('display', 'none');
      });
      $($(a[0]).find('img')).attr('src', 'img/logo.png');
      $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger.png');
   }
}

openElement = "";

function openInsagramPreview(elem){
   openElement = elem;
   var a = $('header a');
   var src = elem.getBoundingClientRect();

   $('body').append('<img src="img/test.jpg" id="animation-image"/>');
   $('#animation-image').attr('src', $($(elem).find('img')).attr('src'));
   $('#animation-image').css({
      'position': 'absolute',
      'top': src.top + $(window).scrollTop(),
      'left': src.left,
      'width': src.width,
      'height': src.height,
      'padding': '0.5rem'
   });

   var info = $('#instagram-preview .instagram-preview-info')[0];
   $($(info).find('p')).html($(elem).attr('desc'));
   $($(info).find('h3')).html($(elem).attr('likes'));
   $($(info).find('a')).attr('href', $(elem).attr('link'));

   $('#instagram-preview').css({
      'display':'block',
      'opacity':0
   });
   $($('#instagram-preview .instagram-preview-info img')[0]).css('opacity',0);

   var dest = $('#instagram-preview img')[0];
   var dest = dest.getBoundingClientRect();
   $('#animation-image').animate({
      'top': dest.top + $(document).scrollTop(),
      'left': dest.left,
      'width': dest.width,
      'height': dest.width,
      'padding': 0
   }, 200);

   $('#instagram-preview').animate({
      'opacity':1
   }, 250);

   $($(a[0]).find('img')).attr('src', 'img/logo-white.png');
   $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger-white.png');

}

function closeInstagramPreview(){
   var a = $('header a');
   var src = openElement.getBoundingClientRect();

   $('#animation-image').animate({
      'position': 'absolute',
      'top': src.top + $(window).scrollTop(),
      'left': src.left,
      'width': src.width,
      'height': src.height,
      'padding': '0.5rem'
   }, 200);

   $('#instagram-preview').fadeOut(250, function(){
      $('#instagram-preview').css('display', 'none');
   });

   $($(a[0]).find('img')).attr('src', 'img/logo.png');
   $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger.png');

   setTimeout(function(){
      $('#animation-image').remove();
   }, 200);
}
