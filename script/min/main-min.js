function triggerIndexMenu(){var n=$("header a");"none"==$("nav").css("display")?"none"==$("#instagram-preview").css("display")?($("nav").fadeIn(200,function(){$("nav").css("display","block")}),$($(n[0]).find("img")).attr("src","img/logo-white.png"),$($(n[n.length-1]).find("img")).attr("src","img/hamburger-white.png")):($("#instagram-preview").fadeOut(200,function(){$("#instagram-preview").css("display","none")}),$($(n[0]).find("img")).attr("src","img/logo.png"),$($(n[n.length-1]).find("img")).attr("src","img/hamburger.png")):"none"==$("#instagram-preview").css("display")&&($("nav").fadeOut(200,function(){$("nav").css("display","none")}),$($(n[0]).find("img")).attr("src","img/logo.png"),$($(n[n.length-1]).find("img")).attr("src","img/hamburger.png"))}function triggerMenu(){var n=$("header a");"none"==$("nav").css("display")?($("nav").fadeIn(200,function(){$("nav").css("display","block")}),$($(n[0]).find("img")).attr("src","img/logo-white.png"),$($(n[n.length-1]).find("img")).attr("src","img/hamburger-white.png")):($("nav").fadeOut(200,function(){$("nav").css("display","none")}),$($(n[0]).find("img")).attr("src","img/logo.png"),$($(n[n.length-1]).find("img")).attr("src","img/hamburger.png"))}function openInsagramPreview(n){var i=$("header a");if("none"==$("nav").css("display")){var a=$("#instagram-preview .instagram-preview-info")[0];$($(a).find("p")).html($(n).attr("desc")),$($(a).find("h3")).html($(n).attr("likes")),$($(a).find("a")).attr("href",$(n).attr("link")),$($("#instagram-preview").find("img")[0]).attr("src",$($(n).find("img")).attr("src")),$("#instagram-preview").fadeIn(200,function(){$("#instagram-preview").css("display","fixed")}),$($(i[0]).find("img")).attr("src","img/logo-white.png"),$($(i[i.length-1]).find("img")).attr("src","img/hamburger-white.png")}else $("#instagram-preview").fadeOut(200,function(){$("#instagram-preview").css("display","none")}),$($(i[0]).find("img")).attr("src","img/logo.png"),$($(i[i.length-1]).find("img")).attr("src","img/hamburger.png")}