import React, { useRef, useEffect } from "react";

function CodeChallange() {
  //creating canvas referance
  const myCanvas = useRef(null);
  //multiplying by 8 still 256
  const number = 8;
  //variable to make loop to execute
  let value = 0;
  //vaiable to hold current multiplication number
  let result;

  /*Diving the components into 3 steps...0 to 256
    //if step one chnage the first key r valuein a object from 8 to 256
    //if step two chnage the second key g value in a object from 8 to 256
    //if step one chnage the first key b value in a object from 8 to 256
     looping throughg 356 * 128 to get 32 768 values

    
    */
  useEffect(() => {
    const canvasContent = myCanvas.current;
    const context = canvasContent.getContext("2d");
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    for (let step = 0; step <= 3; step++) {
      const stepValue = step;

      for (let i = 1; i <= 32; i++) {
        const result = i * number;
        for (let column = 0; column < 256; column++) {
          for (let row = 0; row < 128; row++) {
            if (stepValue == 1) {
              
              value++;
              // console.log("step 1"+stepValue + "the result"+result)
              context.fillStyle =
                "rgb(" +
                result +
                "," +
                Math.floor(Math.random() * 256) +
                "," +
                Math.floor(Math.random() * 256) +
                ")";
              // console.log("rgb(" + result + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")" );
            }else if(stepValue == 2){ 
             
               
              value++;
              context.fillStyle =
                "rgb(" +
                Math.floor(Math.random() * 256) +
                "," +
                result +
                "," +
                Math.floor(Math.random() * 256) +
                ")";
              // console.log("rgb(" + Math.floor(Math.random() * 256) + "," + result +"," + Math.floor(Math.random() * 256) + ")" );
            } else {
              //console.log("while 3")
              value++;
              context.fillStyle =
                "rgb(" +
                Math.floor(Math.random() * 256) +
                "," +
                Math.floor(Math.random() * 256) +
                "," +
                result +
                ")";
              // console.log("rgb(" +Math.floor(Math.random() * 256) +"," + Math.floor(Math.random() * 256) +"," + result +")" );
            }

            //context.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +   "," +Math.floor(Math.random() * 256) +")";
            context.fillRect(column * 20, row * 20, 20, 20);
            value++;
          }
          value++;
        }

        if (result > 256) {
          break;
        }
        value++;
      }
      value++;
    }

    var img = new Image();
    img.src = canvasContent.toDataURL();
    img.width = "128";
    img.height = "256";
    document.body.appendChild(img);
    return () => {};
  }, []);

  return (
    <div>
      <div>
        <canvas ref={myCanvas}></canvas>
      </div>
    </div>
  );
}

export default CodeChallange;
