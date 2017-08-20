(function(){
    setTimeout(function(){
        document.body.className = "dark";
    }, 1000);
    setTimeout(function(){
        text = ["My name is Michael Steurer.", "I am a CS student at TU Graz.", "Thanks for watching!"]
        del(text, 0)
    }, 2000);
})();

function write(text, i, index) {
    var el = document.getElementById("text")
    if(el.textContent != text[index]) {
        el.textContent = el.textContent + text[index][i]
        setTimeout(function(){
            write(text, ++i, index)
        }, Math.random()*200+150);
    }else{
        if(++index < text.length){
            setTimeout(function(){
                del(text, index)
            }, Math.random()*1000+1000);
        }
    }
}

function del(text, index){
    console.log("delete");
    var el = document.getElementById("text")
    if(el.textContent.length > 0){
        el.textContent = el.textContent.substring(0, el.textContent.length-1)
        setTimeout(function(){
            del(text, index)
        }, Math.random()*200+50);
    }else{
        setTimeout(function(){
            write(text, 0, index);
        }, Math.random()*200+100);
    }
}
