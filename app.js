let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let message = document.querySelector(".message");

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let current = "player1";
let count = 0;
let iswinner = false;

let result;
let enable = () => {
    boxes.forEach(
        (box) => {
            box.style.pointerEvents = "auto";   // allows clicks again
            box.style.opacity = "1";

        }
    )

}


boxes.forEach(
    (box) => {
        box.addEventListener("click",
            () => {

                console.log("box is clicked");
                if (current == "player1") {
                    box.innerHTML = "X"
                    current = "player2"
                } else {
                    box.innerHTML = "O"
                    current = "player1"
                }
                count++
                box.style.pointerEvents = "none";   // disables clicks
                box.style.opacity = "0.5";          // optional, shows it's disabled

                checkWinner();
                checkdraw();
                showWinner();
            }
        )
    }
);

let checkdraw = () => {
    if (count == 9 && !iswinner) {
        result = "draw";
    }
}
let winner;
let checkWinner = () => {
    for (let val of winPattern) {
        postVal0 = boxes[val[0]].innerHTML;
        postVal1 = boxes[val[1]].innerHTML;
        postVal2 = boxes[val[2]].innerHTML;
        if (postVal1 != 0) {
            if (postVal0 == postVal1 && postVal1 == postVal2) {
                console.log("winner");
                winner = boxes[val[0]].innerHTML;
                iswinner = true;
            }
        }
    }
};
let showWinner = () => {
    if (result == "draw") {
        console.log("draw");

        document.querySelector("header").style.height = "100vh";
        document.querySelector("header").style.width = "100vw";
        document.querySelector("header").style.backgroundColor = "transparent";

        document.querySelector("header").innerHTML = `It is a Draw <br> <button type="reset" class='again reset' >Play Again</button>`;
        document.querySelector("header").style.margin = "20px"
    }
    else if (iswinner == true) {
        console.log("the winner is", winner);
        document.querySelector("header").style.height = "100vh";
        document.querySelector("header").style.width = "100vw";
        document.querySelector("header").style.backgroundColor = "transparent";

        document.querySelector("header").innerHTML = `The Winner is ${winner} <br> <button type="reset" class='again reset' >Play Again</button>`;
        document.querySelector("header").style.margin = "20px"
    }

};
reset.addEventListener("click",
    () => {
        for (let box of boxes) {
            box.innerHTML = ""

        }
        iswinner = false;
        current = "player1";
        count = 0;
        document.querySelector("header").style.height = "0vh";
        document.querySelector("header").innerHTML = ``;
        document.querySelector("header").style.margin = "0px";

        enable();


    }
);
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("again")) {
        for (let box of boxes) {
            box.innerHTML = "";
        }
        iswinner = false;
        current = "player1";
        count = 0;
        document.querySelector("header").style.height = "0vh";
        document.querySelector("header").innerHTML = ``;
        document.querySelector("header").style.margin = "0px";

        enable();
    }
});

