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
    let genres = ["action-adventure","animation","comedy","crime","documentary","drama","family","fantasy","history","horror","musical","mystery","romance","sci-fi","sport","superhero","thriller","war"]

    genreButton.addEventListener("click", () => {
        let link = "movieGenres/" + genreDropDown.value + ".html";
        window.location = link;
    })
/*
            scores[0] += 1;
            scores[1] += 1;
            scores[2] += 1;
            scores[3] += 1;
            scores[4] += 1;
            scores[5] += 1;
            scores[6] += 1;
            scores[7] += 1;
            scores[8] += 1;
            scores[9] += 1;
            scores[10] += 1;
            scores[11] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[14] += 1;
            scores[15] += 1;
            scores[16] += 1;
            scores[17] += 1;
*/
    submit.addEventListener("click", () => {
        if (Q1.value == "true") {
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
        if (Q2.value == "true") {
            scores[0] += 1; 
            scores[1] += 1;
            scores[3] += 1;
            scores[5] += 1; 
            scores[7] += 1;
            scores[9] += 1;
            scores[10] += 1; 
            scores[13] += 1;
            scores[14] += 1;
            scores[15] += 1; 
            scores[16] += 1;
            scores[17] += 1;
        } else {
            scores[2] += 1;
            scores[4] += 1;
            scores[6] += 1;
            scores[8] += 1;
            scores[11] += 1; 
            scores[12] += 1;           
        }

        if (Q3.value == "true") {
            scores[0] += 1; 
            scores[1] += 1;
            scores[7] += 1;
            scores[11] += 1;
            scores[13] += 1;
            scores[15] += 1;
            scores[16] += 1;
            scores[17] += 1; 
        } else {
            scores[2] += 1; 
            scores[3] += 1;
            scores[4] += 1;
            scores[5] += 1;
            scores[6] += 1;
            scores[8] += 1;
            scores[9] += 1;
            scores[10] += 1; 
            scores[12] += 1;
            scores[14] += 1; 
            
        }

        if (Q4.value == "true") {
            scores[2] += 1;
        } else {
            scores[0] += 1;
            scores[1] += 1;
            scores[3] += 1;
            scores[4] += 1;
            scores[5] += 1;
            scores[6] += 1;
            scores[7] += 1;
            scores[8] += 1;
            scores[9] += 1;
            scores[10] += 1;
            scores[11] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[14] += 1;
            scores[15] += 1;
            scores[16] += 1;
            scores[17] += 1;
            
        }

        if (Q5.value == "true") {
            scores[0] += 1;
            scores[1] += 1;
            scores[2] += 1;
            scores[5] += 1;
            scores[7] += 1;
            scores[9] += 1;
            scores[11] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[15] += 1;
            scores[16] += 1;
        } else {
            scores[3] += 1;
            scores[4] += 1;
            scores[6] += 1;
            scores[8] += 1;
            scores[10] += 1;
            scores[14] += 1;
            scores[17] += 1;
        }

        if (Q6.value == "true") {
            scores[0] += 1;
            scores[4] += 1;
            scores[5] += 1;
            scores[9] += 1;
            scores[11] += 1;
            scores[16] += 1;
        } else {
            scores[1] += 1;
            scores[2] += 1;
            scores[3] += 1;
            scores[6] += 1;
            scores[7] += 1;
            scores[8] += 1;
            scores[10] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[14] += 1;
            scores[15] += 1;
            scores[17] += 1;
            
        }

        if (Q7.value == "true") {
            scores[4] += 1;
            scores[8] += 1;
            scores[14] += 1;
            scores[17] += 1;
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
            
            
        }

        if (Q8.value == "true") {
            scores[1] += 1;
            scores[6] += 1;
            scores[15] += 1;
        } else {
            scores[0] += 1;
            
            scores[2] += 1;
            scores[3] += 1;
            scores[4] += 1;
            scores[5] += 1;
            
            scores[7] += 1;
            scores[8] += 1;
            scores[9] += 1;
            scores[10] += 1;
            scores[11] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[14] += 1;
            
            scores[16] += 1;
            scores[17] += 1;
            
        }

        if (Q9.value == "true") {
            scores[9] += 1;
            scores[11] += 1;
            scores[16] += 1;
        } else {
            scores[0] += 1;
            scores[1] += 1;
            scores[2] += 1;
            scores[3] += 1;
            scores[4] += 1;
            scores[5] += 1;
            scores[6] += 1;
            scores[7] += 1;
            scores[8] += 1;
            
            scores[10] += 1;
            
            scores[12] += 1;
            scores[13] += 1;
            scores[14] += 1;
            scores[15] += 1;
            
            scores[17] += 1;
            
        }

        if (Q10.value == "true") {
            scores[0] += 1; 
            scores[15] += 1;
        } else {
            scores[1] += 1;
            scores[2] += 1;
            scores[3] += 1;
            scores[4] += 1;
            scores[5] += 1;
            scores[6] += 1;
            scores[7] += 1;
            scores[8] += 1;
            scores[9] += 1;
            scores[10] += 1;
            scores[11] += 1;
            scores[12] += 1;
            scores[13] += 1;
            scores[14] += 1;
            scores[16] += 1;
            scores[17] += 1;
            
        }

        console.log(scores);
        let maxScore = Math.max(...scores);
        console.log(maxScore);

        let index = scores.indexOf(maxScore);
        let indexes = [index];
        if (scores.indexOf(maxScore, index) == -1) {
            let link = 'movieGenres/' + genres[index] + '.html';
            window.location = link;
        } else {
            while (scores.indexOf(maxScore, index+1) != -1) {
            //for (let i = 0; i < 3 ; i++) {
                index = scores.indexOf(maxScore, index+1);
                indexes.push(index);
                console.log(indexes, index);
            }
            let randomNumber = Math.floor(Math.random()*indexes.length);
            let link = 'movieGenres/' + genres[indexes[randomNumber]] + '.html';
            console.log(link);
            window.location = link;

        }

        
        scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        
    })



}

/* new function for music to make the movie picking experience more fun! */

function musicPlay() {
  let player = document.getElementById('musicPlayer');
  player.innerHTML = "<audio controls loop autoplay><source src='playful.mp3' type='audio/mp3'/></audio>"

}
