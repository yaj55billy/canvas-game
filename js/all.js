



var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 575;
canvas.height = 395;

function draw(){
    // 多邊形
    ctx.beginPath();
    ctx.moveTo(30,95);
    ctx.lineTo(60,85);
    ctx.lineTo(86,95);
    ctx.lineTo(90,112);
    ctx.lineTo(75,135);
    ctx.lineTo(42,125);
    ctx.fillStyle = "#E7465D";
    ctx.fill();
    
    // 小圓形
    ctx.beginPath();
    ctx.arc(495,65,26,0,2*Math.PI);
    ctx.fillStyle = "#F5AF5F";
    ctx.fill();
    ctx.stroke();

    //三角形
    ctx.beginPath();
    ctx.moveTo(400,350);
    ctx.lineTo(437,290);
    ctx.lineTo(464,350);
    ctx.fillStyle = "#3676BB";
    ctx.fill();

    // 大圓形
    ctx.beginPath();
    ctx.arc(287.5,197.5,150,0,2*Math.PI);
    ctx.strokeStyle="rgba(255,255,255,0.5)";
    ctx.stroke();
}
draw();


$("a.start-btn").on( "click", function(event) {
    $('.game-init').fadeOut(500);
    $('.game-start').fadeIn(500);
    var nowTime = 5;   
    var timeCd = setInterval(function(){   
        if(nowTime == -1){
            $(".time").text('');  
            $('.center-info').fadeOut();
            return;
        }
        $(".time").text(nowTime);   
        nowTime = nowTime -1;   
    },1000);
    // setInterval 每秒都去執行函式內部
});


    


