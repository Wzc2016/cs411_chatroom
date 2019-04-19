import requests
import random
import json

allMovies = 'http://localhost:8000/movies'

searchMovieUrl = 'http://localhost:8000/search/movieid/'

allMoviesData = requests.get(allMovies).json()

# print(r.json()[0]['genres'])

for i in range(0, 1000):
	movieList = []
	genreList = []
	Movies_10 = random.sample(allMoviesData, 10)
	for movie in Movies_10:
		movieList.append(movie['id'])
		for genre in json.loads(movie['genres']):
			# print(genre)
			if genre['id'] not in genreList:
				genreList.append(genre['id'])
	movie_list = ','.join(map(str, movieList))
	genre_list = ','.join(map(str, genreList))
	user_name = 'wzc' + str(i)
	password = '123'
	requests.post('http://localhost:8000/users/', data={'movie_list' : movie_list, 'genre_list' : genre_list, 'user_name' : user_name, 'password' : password})
# print(a)
# print(','.join(genreList))
