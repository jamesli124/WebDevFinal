import random
fout = open("fakeTVRecommendation.csv", "w")
fout.write("Genre,GenreImage,Show1,Image1,imdb,Show2,Image2,imdb,Show3,Image3,imdb\n")
genres = ["Action","Adventure","Comedy","Crime","Drama","Fantasy","Historical","Horror","Mystery","Political","Romance","Satire","Science-Fiction","Thriller"]
begin = ["Game","Pain","Mane","Same","Chain","Rain","Fame"]
end = ["Homes","Thrones","Moans","Stones","Prones", "Melons","Bones","Hoes"]
images = ["https://commons.wikimedia.org/wiki/Category:Images_-_landscape_aspect_ratio#/media/File:Braess1.png", "https://upload.wikimedia.org/wikipedia/commons/9/9b/-BLMcareers_%%2821857337562%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/A_farmhouse_at_Stow_Green%2C_nr_Horbling_Lincolnshire%2C_England.JPG/1280px-A_farmhouse_at_Stow_Green%2C_nr_Horbling_Lincolnshire%2C_England.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/1929_Singer_Six_at_Capel_Manor%2C_Enfield%2C_London%2C_England_1.jpg/1280px-1929_Singer_Six_at_Capel_Manor%2C_Enfield%2C_London%2C_England_1.jpg"]
class Generators:
    def makeName():
        name = begin[random.randint(0,6)] + " of " + end[random.randint(0,7)]
        return name

    def makeImage():
        image = images[random.randint(0,3)]
        return image

    def makeScore():
        score = float(random.randint(0,100))*0.1
        return "{:.1f}/10".format(score)

i = 0
while (i < 14):
    rowText = genres[i]
    rowText += "," + Generators.makeImage()
    a = 0
    while a < 3 :
        rowText += "," + Generators.makeName() + "," + Generators.makeImage() + "," + Generators.makeScore()
        a += 1
    rowText += "\n"
    fout.write(rowText)
    i+=1

fout.close




