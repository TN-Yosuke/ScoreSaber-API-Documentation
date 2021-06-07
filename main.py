import requests #requests 
import json #api responds with json
response_API = requests.get('https://new.scoresaber.com/api/player/2429129807113296/scores/recent/1') #send a GET request to scoresaber api
json_data = response_API.json() #save response from json response to json_data 
print(json_data['scores'][0])
#print response from scores, print first score on page
#prints to text document too
f = open("text.txt", "a")
f.write(str(json_data['scores'][0]))
f.close()