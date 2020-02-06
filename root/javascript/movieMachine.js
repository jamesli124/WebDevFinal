window.addEventListener("load", main);

function main() {
    let genreDropDown = document.getElementById("genre");
    let genreButton = document.getElementById("genreButton");

    genreButton.addEventListener("click", () => {
        let link = "movieGenres/" + genreDropDown.value + ".html";
        window.location = link;
    })

}