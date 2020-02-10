f = open("fakeTVRecommendation.csv")
movieData = [[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
categories = f.readline().split(",")
categories[10] = categories[10].replace("\n", "")
i = 0
print(categories)
print(categories[10])
while i < 14:
    movieData[i] = f.readline().split(",")
    movieData[i][10] = movieData[i][10].replace("\n", "")
    i+=1
f.close()

i = 0
while i < 14:
    genre = movieData[i][0]
    fileName = genre.lower() + ".html"
    fout = open(fileName, "w")
    html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <link rel="stylesheet" href="../css/style.css">\n    <link rel="stylesheet" href="../css/moviePage.css">\n    <link rel="stylesheet" href="../css/showGenres.css">\n    <title>%s</title>\n</head>\n<body>\n    <header>\n        <a href="../index.html">Home</a>\n        <a href="../movieMachine.html">Movies</a>\n        <a href="../tvMachine.html">TV Shows</a>\n        <a href="../musicMachine.html">Music</a>\n    </header>\n    <div class="film">\n        <div class="spacer1">\n         </div>\n        <div id="%s" class="parallax">\n            <p>You got<br><strong>%s</strong></p>\n        </div>\n        <div class="bigFilmContent">\n            <p>What are the best shows in %s?</p>\n        </div>\n' % (genre, genre.lower(), genre, genre)
    j = 0
    while j < 3:
        movieTitle = movieData[i][j * 3 + 2]
        IMDB = movieData[i][j * 3 + 4]
        html += '        <div id="%s" class="parallax">\n            <div class="movieInfo">\n                <p class="center"><strong>%s</strong></p>\n                <p>IMDB: %s</p>\n            </div>\n        </div>        \n' % (genre.lower()+str(j+1), movieTitle,IMDB)
        j+=1
    html += '    </div>\n    <footer>\n        <ul>\n            <li><a href="../index.html">Menu</a></li>\n            <li>copyright &copy; 2020 J.A.N.  ·  all rights reserved</li>\n        </ul>\n    </footer>\n</body>\n</html>'
    fout.write(html)
    fout.close()
    i+=1
