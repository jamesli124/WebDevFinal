window.addEventListener("load", main);

function main() {
    let genreDropDown = document.getElementById("genre");
    let genreButton = document.getElementById("genreButton");
    let submit = document.getElementById("submit");
    let Q1 = document.getElementById("Q1");
    let Q2 = document.getElementById("Q2");
    let Q3 = document.getElementById("Q3");
    let Q4 = document.getElementById("Q4");
    let Q5 = document.getElementById("Q5");
    let Q6 = document.getElementById("Q6");
    let Q7 = document.getElementById("Q7");
    let Q8 = document.getElementById("Q8");
    let Q9 = document.getElementById("Q9");
    let Q10 = document.getElementById("Q10");
    let scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    genreButton.addEventListener("click", () => {
        let link = "movieGenres/" + genreDropDown.value + ".html";
        window.location = link;
    })

    submit.addEventListener("click", () => {
        if (Q1.value = "true") {
            scores[4] += 1; 
            scores[8] += 1;
            scores[14] += 1;
        } else {
            scores[0] += 1;
            scores[1] += 1;
            scores[2] += 1;
            scores[3] += 1;
            scores[5] += 1;
            scores[6] += 1;
            scores[7] += 1;
            scores[9] += 1;
            scores[10] += 1;
            scores[11] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[15] += 1;
            scores[16] += 1;
            scores[17] += 1;
            
        }
        if (Q2.value = "true") {
            scores[4] += 1; 
            scores[8] += 1;
            scores[14] += 1;
        } else {
            scores[0] += 1;
            scores[1] += 1;
            scores[2] += 1;
            scores[3] += 1;
            scores[5] += 1;
            scores[6] += 1;
            scores[7] += 1;
            scores[9] += 1;
            scores[10] += 1;
            scores[11] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[15] += 1;
            scores[16] += 1;
            scores[17] += 1;
            
        }
        
    })



}