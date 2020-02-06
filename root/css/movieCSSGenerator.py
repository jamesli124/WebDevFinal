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

fout = open("movieGenres.css", "w")
i = 0
text = ""
while i < 18:
    genre = movieData[i][0].lower()
    genreImage = movieData[i][1]
    movieImage1 = movieData[i][3]
    movieImage2 = movieData[i][8]
    movieImage3 = movieData[i][13]
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre, genreImage)
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre + "1", movieImage1)
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre + "2", movieImage2)
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre + "3", movieImage3)

    i+=1
fout.write(text)
fout.close()