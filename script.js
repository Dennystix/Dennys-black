window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
 
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const text = 'Hello';
    console.log(ctx);
    
    const textX = 300;
    const textY = 150;

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'Orangered';
    ctx.font = "80px Helvetica";

    ctx.fillText(text, textX, textY);
    ctx.strokeText(text, textX, textY);
    
})