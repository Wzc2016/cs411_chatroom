import numpy as np
from numpy import array
from collections import Counter
import scipy
from scipy.spatial import distance
import requests
import json
import sys
import random

def calcDist(user_vec, vecs):
    dist_arr = []
    for i in range(len(vecs)):
        dist = distance.euclidean(user_vec ,vecs[i])
        dist_arr.append(dist)
    return dist_arr


def knn(user_vec, vecs):
    dist = array(calcDist(user_vec, vecs))
    min_k_arr = dist.argsort()[:3]
    ret_vec = []
    # for m in min_k_arr:
    #     ret_vec.append(vecs[m])
    # print(min_k_arr)
    return min_k_arr

def parseInput(input):
    arr = input.split(',')
    vec = []
    for a in range(arr.shape[0]):
        vec.append(arr[a].split(','))

def getGenreDict():
    x = [{'id': 80, 'name': 'Crime'}, {'id': 35, 'name': 'Comedy'}, {'id': 12, 'name': 'Adventure'}, {'id': 28, 'name': 'Action'}, {'id': 878, 'name': 'Science Fiction'}, {'id': 16, 'name': 'Animation'}, {'id': 10751, 'name': 'Family'}, {'id': 18, 'name': 'Drama'}, {'id': 10749, 'name': 'Romance'}, {'id': 10402, 'name': 'Music'}, {'id': 14, 'name': 'Fantasy'}, {'id': 53, 'name': 'Thriller'}, {'id': 10752, 'name': 'War'}, {'id': 37, 'name': 'Western'}, {'id': 9648, 'name': 'Mystery'}, {'id': 36, 'name': 'History'}, {'id': 27, 'name': 'Horror'}, {'id': 99, 'name': 'Documentary'}, {'id': 10769, 'name': 'Foreign'}, {'id': 10770, 'name': 'TV Movie'}]
    m = {}
    map_keys = []
    for item in x:
        map_keys.append(item['id'])
    map_keys = np.sort(array(map_keys))
    for idx,val in enumerate(map_keys):
        m[val] = idx
    return m

def loadData():
    url = "http://localhost:8000/users"
    response = requests.get(url)
    if(response.ok):
        data = json.loads(response.content)
    else:
        response.raise_for_status()
    return data

def getVecs(data, key_map):
    vec = []
    user_arr = []
    for i in range(10, len(data)):
        l = str(data[i]['genre_list']).split(',')
        u_name = str(data[i]['uid'])
        # user_arr.append(u_name)
        v_temp = [0 for x in range(20)]
        for j in l:
            if j is not '':
                try:
                    idx = key_map[int(j)]
                    v_temp[idx] = 1
                except KeyError:
                    pass
        vec.append(v_temp)
    return vec, user_arr

def getMovies(data, min_k_arr):
    encoded_uid = unicode('uid')
    encoded_movie_list = unicode('movie_list')
    movies = []
    r = []
    for i in range(len(min_k_arr)):
        r.append(filter(lambda u:u[encoded_uid] == min_k_arr[i], data))
    for d in r:
        # print(type(str(d[0][encoded_movie_list])))
        s = str(d[0][encoded_movie_list])
        movies+=(s.split(','))
    return movies

def main():
    data = loadData()
    key_map = getGenreDict()
    vec, user_arr = getVecs(data, key_map)

    user_vec_temp = sys.argv[1].split(',')
    # print(user_vec_temp)
    user_vec = [0 for x in range(20)]
    for item in user_vec_temp:
        if item is not '':
            try:
                idx1 = key_map[item]
                user_vec[idx1] = 1
            except KeyError:
                pass
    ret = knn(user_vec, vec)

    movies_result = getMovies(data, ret)
    movies_result = random.sample(movies_result, 5)
    movies_result = ','.join(movies_result)
    print(movies_result)


if __name__ == "__main__":
    main()
