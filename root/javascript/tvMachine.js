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
    let scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let genres = ["Action-Adventure","Comedy","Crime","Drama","Fantasy","Historical","Horror","Mystery","Political","Romance","Satire","Science-Fiction","Thriller"]
    
    genreButton.addEventListener("click", () => {
        let link = "showGenres/" + genreDropDown.value + ".html";
        window.location = link;
    })
}