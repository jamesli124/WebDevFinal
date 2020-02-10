#this is just for doing repetative stuff with the list of genres
f = open("genres.txt")
fout = open("genres.out", "w")
genres = []
i = 0
while i < 13:
    print(i)
    genre = f.readline().replace("\n", "")
    print(genre)
    genres.append(genre)
    i+=1

html = ""
for x in genres:
    y = x.lower()
    line = '<option value="' + y 
    line += '">' + x 
    line += '</option>\n'
    print(line)
    html += line
fout.write(html)
f.close()
fout.close()