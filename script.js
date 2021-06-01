var side_alt = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];

function throwdice(){
    var sound = new Audio("./media/rolldice.mp3");
    sound.play();
    //create a random integer between 1 and 6
    var rand1 = Math.round(Math.random()*5) + 1;

    var mydice1 = document.getElementById("mydice1")
    //Some Animation

    setTimeout(function(){
        mydice1.src = "images/d1.png";
        a();            // 呼叫 a 顯示 2
      });
      
      function a(){
        setTimeout(function(){
            mydice1.src = "images/d2.png";
            b();
        },100);
      }
      
      function b(){
        setTimeout(function(){
            mydice1.src = "images/d3.png";
            c();  
        },100);
      }

      function c(){
        setTimeout(function(){
            mydice1.src = "images/d4.png";
            d();
        },100);
      }

      function d(){
        setTimeout(function(){
            mydice1.src = "images/d5.png";  
            e();
        },100);
      }

      function e(){
        setTimeout(function(){
            mydice1.src = "images/d6.png";  
            f(); 
        },100);
      }

      function f(){
        setTimeout(function(){
            mydice1.src = "images/d" + rand1 + ".png";  
        },100);
      }
    // Set Image alt
    document.getElementById("mydice1").alt = side_alt[rand1];
}
