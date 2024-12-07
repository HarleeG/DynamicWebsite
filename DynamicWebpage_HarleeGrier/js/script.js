var a = 0;
var potsound = document.getElementById("pot-sound");
var addsound = document.getElementById("add-sound");
var winsound = document.getElementById("win-sound");
var loosesound = document.getElementById("loose-sound");

$(".hand-carrots, .hand-broth, .hand-owo, .hand-meat, .hand-rocks, .hand-dirt, .hand-onion, .hand-bugs, .hand-cabbage").hide()
$("#btn4").hide()

console.log("loaded");

const add = (function () {
    let a = 0;
    return function () {a + 1; return a;}

    
  })();
  

$(".closebtn").on("click", function () {
    closeNav();

})

$(".imageMain").on("click", function () {
    openNav();
    potsound.play();
})

$(".carrots").on("click", function () {
    console.log("clicked on carrots")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
    $("#overlayHand").show()
    $("#overlayHand").on("click", function() {
        $("#overlayHand").hide()
    })

    if (navigator.a == 4, console.a == 4) {
        $(".overlayResults").html(images[randomImage]);
        onResult();
      }

})

$(".cabbage").on("click", function () {
    console.log("clicked on cabbage")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand2").show()
    
    $("#overlayHand2").on("click", function() {
        $("#overlayHand2").hide()
    })

})
$(".bugs").on("click", function () {
    console.log("clicked on bugs")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand3").show()
    
    $("#overlayHand3").on("click", function() {
        $("#overlayHand3").hide()
        $(".imageResult").hide()
    })

})
$(".rocks").on("click", function () {
    console.log("clicked on rocks")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand4").show()
    
    $("#overlayHand4").on("click", function() {
        $("#overlayHand4").hide()
        $(".imageResult").hide()
        
    })

})
$(".broth").on("click", function () {
    console.log("clicked on broth")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand5").show()
    
    $("#overlayHand5").on("click", function() {
        $("#overlayHand5").hide()
    })

})
$(".meat").on("click", function () {
    console.log("clicked on meat")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand6").show()
    
    $("#overlayHand6").on("click", function() {
        $("#overlayHand6").hide()
        $("#btn4").show()
    })

})
$(".owo").on("click", function () {
    console.log("clicked on owo")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand7").show()
    
    $("#overlayHand7").on("click", function() {
        $("#overlayHand7").hide()
        $(".imageResult").hide()
    })

})
$(".dirt").on("click", function () {
    console.log("clicked on dirt")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand8").show()
    
    $("#overlayHand8").on("click", function() {
        $("#overlayHand8").hide()
        $(".imageResult").hide()
        $("#btn4").show()
    })

})
$(".onion").on("click", function () {
    console.log("clicked on onion")
    closeNav()
    a++;
    console.log(a)
    addsound.play();
        $("#overlayHand9").show()
    
    $("#overlayHand9").on("click", function() {
        $("#overlayHand9").hide()
        

    })

})

$(".btn3").on("click", function () {
    offResult();
    $("#btn4").hide()
})

$("#btn4").on("click", function () {
    onResult();
    $("#overlayResults").css("background-image", "images[randomImage]");
    winsound.play();

})
$(".imageMain").on("click", function () {
    openNav();
    potsound.play();
})

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


var images = ["<img scr='deliciousResult.png'>", "<img scr='grossResult.png'>"];
var randomImage = Math.floor((Math.random()*images.length));

if (a >= 4 == true) {
    onResult();
    $("#btn4").show()
  }

function resultDis() {
    document.getElementById("overlayResults").innerHTML = images;
}

  function onResult() {
    document.getElementById("overlayResults").style.height = "100%";
  }
  
  function offResult() {
    document.getElementById("overlayResults").style.height = "0%";
  }
