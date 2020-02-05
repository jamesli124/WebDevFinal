f = open("fakeMovieData.csv")
movieData = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
categories = f.readline().split(",")
categories[16] = categories[16].replace("\n", "")
i = 0
print(categories)
print(categories[16])
while i < 18:
    movieData[i] = f.readline().split(",")
    movieData[i][16] = movieData[i][16].replace("\n", "")
    i+=1
f.close()

i = 0
while i < 18:
    fileName = movieData[i][0] + ".html"
    fout = open(fileName, "w")
    html ='<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <link rel="stylesheet" href="css/style.css">\n    <link rel="stylesheet" href="css/moviePage.css">\n    <title>Main Page</title>\n</head>\n<body>\n    <header>\n        <a href="index.html">MovieMachine</a>\n        <a href="https://google.com">Movies</a>\n        <a href="https://google.com">TV Shows</a>\n        <a href="https://google.com">Music</a>\n    </header>\n    <div class="film">\n        <div id="sampleGenre" class="parallax">\n            <p>You got<br><strong>placeholder</strong></p>\n        </div>\n        <div class="bigFilmContent">\n            <p>What are the best movies in placeholder?</p>\n        </div>\n        <div id="sampleGenre1" class="parallax">\n            <div class="movieInfo">\n                <p class="center"><strong>Bee Movie (2007)</strong></p>\n                <p>Metacritic: score</p>\n                <p>IMDB: score</p>\n                <p>Rotten Tomatoes: score</p>\n            </div>\n        </div>        \n    </div>\n    <footer>\n        <ul>\n            <li><a href="https://www.google.com">Placeholder link</a></li>\n            <li>copyright &copy; 2020 J.A.N.  ·  all rights reserved</li>\n        </ul>\n    </footer>\n</body>\n</html>'
    fout.close()
    i+=1
