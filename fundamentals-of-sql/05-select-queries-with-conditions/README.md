# 05-select-queries-with-conditions

## SELECT Queries with Conditions

1.	Write a SQL query to list the titles of all movies released in 1990.
Expected Output: a table with a single column for the title of each movie.

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

```sql
SELECT title FROM movies WHERE year=1990;
```

2.	Write a SQL query to determine the birth year of Benedict Cumberbatch. 
You may assume that there is only one person in the database with the name Benedict Cumberbatch.

Expected Output: a table with a single column and a single row (plus optional header) containing Benedict Cumberbatch’s birth year.

birth
1976

```sql
SELECT birth FROM people WHERE name="Benedict Cumberbatch";
```

3.	Write a SQL query to list the titles of all movies with a release date on or after 2000, in alphabetical order.

Expected Output: a table with a single column for the title of each movie.

```sql

```

4.	Write a SQL query to determine the number of movies with an IMDb rating > 9.8.

Expected Output: a table with a single column and a single row (plus optional header) containing the number of movies higher than 9.8 rating.

```sql

```

5.	Write a SQL query to list the titles and release years of all Captain America movies, in chronological order. 
You may assume that the title of all Captain America movies will begin with the words “Captain America”, and that if a movie title begins with the words “Captain America”, it is a Captain America movie.

Expected Output: a table with two columns, one for the title of each movie and one for the release year of each movie.

```sql

```
