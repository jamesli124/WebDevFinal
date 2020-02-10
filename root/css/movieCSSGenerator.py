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

fout = open("showGenres.css", "w")
i = 0
text = ""
while i < 14:
    genre = movieData[i][0].lower()
    genreImage = movieData[i][1]
    movieImage1 = movieData[i][3]
    movieImage2 = movieData[i][6]
    movieImage3 = movieData[i][9]
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre, genreImage)
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre + "1", movieImage1)
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre + "2", movieImage2)
    text += "#%s {\n   background-image: url(%s);\n}\n\n" % (genre + "3", movieImage3)

    i+=1
fout.write(text)
fout.close()