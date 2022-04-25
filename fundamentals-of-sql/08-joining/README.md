# 08-joining


Lab Assignment 8 - SQL Joining

Instructions
1.	Answer the below question in the boxes. 
2.	Please submit the assignment through TalentLabs Learning System.

Open the Movies database
Follow the step illustrated in Chapter 3 to open the Movies database using DB Browser for SQLite. You should see 5 tables in the database.

 
Query Exercises
1.	Write a SQL query to determine the average rating of all movies released in 1998.

Expected Output: a table with a single column and a single row (plus optional header) containing the average rating.

```sql
SELECT avg(rating) as avg_rating
FROM
	movies JOIN ratings
		ON movies.id = ratings.movie_id

avg_rating
6.17964627319706
```

2.	Write a SQL query to list all movies released in 2002 and their ratings, in descending order by rating. For movies with the same rating, order them alphabetically by title.

Output: a table with two columns, one for the title of each movie and one for the rating of each movie. Movies that do not have ratings should not be included in the result.

```sql
SELECT title, rating
FROM
	movies LEFT JOIN ratings
	ON movies.id = ratings.movie_id
WHERE year = 2002 AND rating IS NOT NULL
ORDER BY rating DESC, title ASC

title	rating
Matanza	9.4
Peace Pilgrim: An American Sage Who Walked Her Talk	9.4
Punarjani	9.4
The Myster General	9.4
Truth & Conviction	9.4
Welcome to San Pedro	9.4
Old Coaches	9.3
Tikkun	9.3
Togbe	9.3
Americanos	9.2
```

3.	Write a SQL query to list the names of all people who starred in “The Lord of the Rings”.

	Hint: You need to do 2 joins to achieve that. Still remember how to use subqueries?

Output: a table with a single column for the name of each person. You may assume that there is only one movie in the database with the title The Lord of the Rings.

```sql
SELECT name
FROM people AS pp
   JOIN
   stars AS s
   ON pp.id = s.person_id
   JOIN
   movies AS m
   ON s.movie_id = m.id
WHERE title = 'The Lord of the Rings'

name
Christopher Guard
William Squire
Michael Scholes
John Hurt
```

4.	Write a SQL query to list the names of all people who starred in a movie released in 2010, ordered by birth year in ascending order.

Hint: You need to do 2 joins to achieve that. Also, you will need to use DISTINCT to make sure each name appears once only.

Output: a table with a single column for the name of each person. People with the same birth year may be listed in any order. No need to worry about people who have no birth year listed, so long as those who do have a birth year are listed in order. If a person appeared in more than one movie in 2010, they should only appear in your results once.

```sql
SELECT DISTINCT name
FROM people AS pp
   JOIN
   stars AS s
   ON pp.id = s.person_id
   JOIN
   movies AS m
   ON s.movie_id = m.id
WHERE year = 2010
ORDER by birth ASC

name
Éva Gábor
Ande Cira
Frankie J. Mosca
Jennifer Jelsema
Alaina Fleming
Mark Boyd
Carsten Brandt
Kirstine Brandt
Steffany Huckaby
Amanda Troop
```

5.	Write a SQL query to list the names of all people who have directed a movie that received a rating > 8.5.

	Hint: You will need to use 2 joins to solve this question.

Expected Output: a table with a single column for the name of each person.

```sql
WITH director_names
AS (SELECT id, name FROM (people JOIN directors
ON people.id = directors.person_id))
SELECT name FROM (ratings JOIN director_names
ON ratings.movie_id = director_names.id)
WHERE ratings.rating > 8.5

name
Rick Beren
Jeff Blyth
Jeff Blyth
Peter Tyler Boullata
Diana Boylston
Dominick Brascia
Dominick Brascia
Mike Burstyn
Corin Campbell Hill
Jingbo Chen
```

6.	Write a SQL query to list the titles of the five highest rated movies (in order) that Leonardo DiCaprio starred in, starting with the highest rated.

Hint: If you find it too difficult to do it in one SQL query, feel free to loop up the id of Leonardo DiCaprio in the people table first.

Expected Output: a table with a single column for the title of each movie. You may assume that there is only one person in the database with the name Leonardo DiCaprio.

```sql
WITH leonardo_movies
AS (SELECT id, title
FROM
(movies JOIN stars
ON movies.id = stars.movie_id)
WHERE stars.person_id = 138)
SELECT title
FROM leonardo_movies JOIN ratings
ON leonardo_movies.id = ratings.movie_id
ORDER by ratings.rating DESC
LIMIT 5

title
Inception
The Departed
Django Unchained
Before the Flood
The Wolf of Wall Street
```
