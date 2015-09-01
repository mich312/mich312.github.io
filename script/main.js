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
         //hide instagram preview
         $('#instagram-preview').fadeOut(200, function(){
            $('#instagram-preview').css('display', 'none');
         });

         $($(a[0]).find('img')).attr('src', 'img/logo.png');
         $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger.png');
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

function openInsagramPreview(elem){
   var a = $('header a');
   if($('nav').css('display') == 'none'){

      var info = $('#instagram-preview .instagram-preview-info')[0];
      $($(info).find('p')).html($(elem).attr('desc'));
      $($(info).find('h3')).html($(elem).attr('likes'));
      $($(info).find('a')).attr('href', $(elem).attr('link'));
      $($('#instagram-preview').find('img')[0]).attr('src', $($(elem).find('img')).attr('src'));

      $('#instagram-preview').fadeIn(200, function(){
         $('#instagram-preview').css('display', 'fixed');
      });

      $($(a[0]).find('img')).attr('src', 'img/logo-white.png');
      $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger-white.png');
   }else{
      $('#instagram-preview').fadeOut(200, function(){
         $('#instagram-preview').css('display', 'none');
      });

      $($(a[0]).find('img')).attr('src', 'img/logo.png');
      $($(a[a.length-1]).find('img')).attr('src', 'img/hamburger.png');
   }
}
