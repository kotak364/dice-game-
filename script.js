// console.log(randomnumber);

// console.log(a);
const b = document.querySelector(".btn");


b.addEventListener("click" ,function() {
    
const randomnumber = Math.floor((Math.random() * 6) + 1);
const a = "dice"+randomnumber+".png";


const randomnumber2 = Math.floor((Math.random() * 6) + 1);

const c = "dice"+randomnumber2+".png";

     document.getElementById("player1").setAttribute('src', a
        );

        document.getElementById("player2").setAttribute('src', c
        );

        if (randomnumber>randomnumber2) {
                document.querySelector("h1").textContent = "Player 1 Won";
                
        }
        else if (randomnumber<randomnumber2){
                document.querySelector("h1").textContent = "Player 2 Won";

        }
        else
        {
                document.querySelector("h1").textContent = "Draw";

        }

})








    




