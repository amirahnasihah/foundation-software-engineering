# 05-select-queries-with-conditions

## SELECT Queries with Conditions

1.	Write a SQL query to list the titles of all movies released in 1990.

Expected Output: a table with a single column for the title of each movie.

```txt
title
Wenn du groß bist, lieber Adam
Larks on a String
Vojtech, receny sirotek
Rosa Heimat - eine Landillusion
Vincent and Me
Halfaouine: Boy of the Terraces
Call Me Mr. Brown
Commando terrorista
The Scarlet Scorpion
Astonished
```

```sql
SELECT title 
FROM movies 
WHERE year = 1990;
```

2.	Write a SQL query to determine the birth year of Benedict Cumberbatch. 
You may assume that there is only one person in the database with the name Benedict Cumberbatch.

Expected Output: a table with a single column and a single row (plus optional header) containing Benedict Cumberbatch’s birth year.

```txt
birth
1976
```

```sql
SELECT birth 
FROM people 
WHERE name = "Benedict Cumberbatch";
```

3.	Write a SQL query to list the titles of all movies with a release date on or after 2000, in alphabetical order.

Expected Output: a table with a single column for the title of each movie.

```txt
title
!Women Art Revolution
#1 Serial Killer
#19
#1915House
#5
#5
#50Fathers
#66
#73, Shaanthi Nivaasa
#82 Summits
```

```sql
SELECT title 
FROM movies 
WHERE year >= 2000 
ORDER by title ASC;
```

4.	Write a SQL query to determine the number of movies with an IMDb rating > 9.8.

Expected Output: a table with a single column and a single row (plus optional header) containing the number of movies higher than 9.8 rating.

```txt
NumberOfMovies
20
```

```sql
SELECT COUNT(*) AS NumberOfMovies 
FROM ratings 
WHERE rating > 9.8;
```

5.	Write a SQL query to list the titles and release years of all Captain America movies, in chronological order. 
You may assume that the title of all Captain America movies will begin with the words “Captain America”, and that if a movie title begins with the words “Captain America”, it is a Captain America movie.

Expected Output: a table with two columns, one for the title of each movie and one for the release year of each movie.

```txt
title	year
Captain America	1990
Captain America: The First Avenger	2011
Captain America: The Winter Soldier	2014
Captain America: Civil War	2016
```

```sql
SELECT title, year
FROM movies
WHERE title LIKE "Captain America%"
ORDER BY year ASC
```

## Simplifying BETWEEN and IN

```sql
SELECT *
FROM movies
WHERE
year=1995 OR year=1996 OR year=1997
OR title='The Lord of the Ring' OR title='Star Wars';
```

Simplifying version, the BEETWEEN keyword included year 1995 and 1997.
If using (< AND >), the year 1995 and 1997 will not be included when doing query.

```sql
SELECT *
FROM movies
WHERE
year BETWEEN 1995 AND 1997
OR title IN('The Lord of the Ring', 'Star Wars');
```

