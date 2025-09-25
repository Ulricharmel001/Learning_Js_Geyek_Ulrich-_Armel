

color = ['green', 'black', 'red']
for items in color:
    print(items)
    if items == "black":
        print('I am printing hello, before moving farward to {color[2]} ')
        continue
# while

Status = "Hustling"

while Status:
    print("No sleep for over 4 hours ")
    Status+=1
    if Status == 20:
        break

