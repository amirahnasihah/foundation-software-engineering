# 09-other-sql-operations

Lab Assignment 9 - Other SQL Operations

Instructions
1.	Answer the below question in the boxes. 
2.	Please submit the assignment through TalentLabs Learning System.

Open the Movies database
Follow the step illustrated in Chapter 3 to open the Movies database using DB Browser for SQLite. You should see 5 tables in the database.

 
 
Query Exercises

1.	Write a SQL query to create a table “actors” which has two columns - movie_id, person_id

Expected Output: a new table with two columns - movie_id and person_id

```sql
CREATE TABLE actors (
	movie_id INTEGER,
	person_id INTEGER
)
```

2.	Write a SQL query to insert the movie_id of “Titanic” and person_id of “Leonardo DiCaprio” into the “actors” table, in one row.

Expected Output: A new record in the “actors” table
Hint: You may want to look up the movie_id of “Titanic” and person_id of “Leonardo DiCaprio” first.

```sql
Insert into actors
(movie_id, person_id)
Values
(‘Titanic’,
```

```sql
SELECT person_id, movie_id
FROM stars
   JOIN
   people
   ON people.id = stars.person_id
   JOIN
   movies
   ON stars.movie_id = movies.id
WHERE title = "Titanic" AND name = "Leonardo DiCaprio"


person_id
138

movie_id
120338

-- to look up movie_id and person_id
```

3.	Write a SQL query to update the record input on exercise 2 into the movie_id of the movie “Celebrity”

Expected Output: The record in the “actors” table being updated to the movie_id of “Celebrity”
Hint: You may want to look up the movie_id of “Celebrity” first

```sql
UPDATE actors
SET movie_id = 120533
``` 

4.	Write a SQL query to change the table name of “actors” into “movie_actors”

Expected Output: The name of the “actors” table is being to updated to “movie_actors”

```sql
ALTER TABLE actors
RENAME TO movie_actors
```

5.	Write a SQL query to delete the “actors” table on the movie database. (Be careful not to delete the wrong table, or you will need to download the movie database once again.)

Output: A series of SQL query composed with DROP operation

```sql
DROP TABLE movie_actors
```
