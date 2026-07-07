function honk() {
    const sound = new Audio("honk.mp3");
    sound.play();
}


const canvas = document.getElementById("goose-wave");

const ctx = canvas.getContext("2d");


canvas.width = canvas.offsetWidth;

canvas.height = 220;


let time = 0;


function animateWave(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    for(let i = 0; i < 100; i++){

        let x = i / 100 * canvas.width;


        let y =
        canvas.height / 2 +
        Math.sin(time + i * 0.3) * 40;


        ctx.beginPath();

        ctx.arc(
            x,
            y,
            5,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
        "#4aa3b8";


        ctx.fill();

    }


    time += 0.04;


    requestAnimationFrame(animateWave);

}


animateWave();
