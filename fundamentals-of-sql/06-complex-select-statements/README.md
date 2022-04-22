# 06-complex-select-statements

## Things-to-know

### Subqueries

This is also called as nested statement. The `movie_id` column is related or connected with the `id` column/field from movies table.

```sql
SELECT rating FROM ratings
WHERE movie_id = (
	SELECT id FROM movies WHERE title='Toy Story'
};
```

## Complex SELECT statements

### Understanding the database

1.	Study the table schema and the data in the “people” and “directors” table and describe the relation between the tables “people” and “directors”

```txt
Inside the data in the “people” table, there are 3 columns/fields which are id, name, and birth. For “directors” table, there are 2 columns which are movie_id and person_id.

Then, the “people” table for the table schema shows CREATE TABLE people (id INTEGER, name TEXT NOT NULL, birth NUMERIC, PRIMARY KEY(id) ).
While, the “directors” table for the table schema shows CREATE TABLE directors (movie_id INTEGER NOT NULL, person_id INTEGER NOT NULL, FOREIGN KEY (movie_id) REFERENCES movies(id), FOREIGN KEY(person_id) REFERENCES people(id) ).

Schema is the complete definition of a database that includes the descriptions of the fields, tables and relationships. Based on the table schema, shows that the “people” and “directors” tables are related to each other as a concept of a relational database. 

The primary key is a field or multiple fields that are unique and identify a particular value of data. While a foreign key is a field in one table that matches a primary key value in another table to link the relationship between two tables and can appear any number of times in the “directors” table.

Here, “directors” table has a foreign key set to “person_id” in reference to the “people” table of PRIMARY KEY “id” column. 

The details about people’s information are stored in tables called “people”. 
The “directors” table contains details of each director, using the value in the person_id column to identify each one. That value acts as a unique key that connects both tables, giving the ability to create rows using the “id” column of “people” table. This is to reduce the redundancy of data.

The INTEGER, TEXT, NUMERIC are a data type of the column’s value. NOT NULL means that a column to NOT accept NULL values that the column to always contain a value.
```

2.	Study the table schema and the data in the “movies” and “directors” table and describe the relation between the tables “movies” and “directors”

```txt
Inside the data in the “movies” table, there are 3 columns/fields which are id, title, and year. For “directors” table, there are 2 columns which are movie_id and person_id.

Then, the “movies” table for the table schema shows CREATE TABLE movies (id INTEGER, title TEXT NOT NULL, year NUMERIC, PRIMARY KEY(id) ).
While, the “directors” table for the table schema shows CREATE TABLE directors (movie_id INTEGER NOT NULL, person_id INTEGER NOT NULL, FOREIGN KEY (movie_id) REFERENCES movies(id), FOREIGN KEY(person_id) REFERENCES people(id) ).

The foreign key is a field in one table that matches a primary key value in another table to link the relationship between two tables and can appear any number of times in the “directors” table.

Here, “directors” table has a foreign key set to “movie_id” in reference to the “movies” table of  PRIMARY KEY “id” column. 

The details about movie’s information are stored in tables called “movies”. 
The “directors” table contains details of each directed movie, using the value in the movies_id column to identify each one. That value acts as a unique key that connects both tables, giving the ability to create rows using the “id” column of “movies” table. This is to reduce the redundancy of data.

The INTEGER, TEXT, NUMERIC are a data type of the column’s value. NOT NULL means that a column to NOT accept NULL values that the column to always contain a value.
```

### Query Exercises

1.	Write a SQL query to obtain the movie_id who is directed by “Joris Ivens” without using WITH keyword

Expected Output: a table with a single column for the movie_id of the director’s movie.

```sql
SELECT movie_id FROM directors
WHERE person_id = (
  SELECT id
  FROM people
  WHERE name = “Joris Ivens”
);
```

```txt
movie_id
23331
74334
178394
1067718
```

2.	Write a SQL query to obtain the movie title who is directed by “Joris Ivens”

Expected Output: a table with a single column for the movie title of the director’s movie.

```sql
SELECT title FROM movies
WHERE id = (
    SELECT movie_id FROM directors
    WHERE person_id = (
        SELECT id FROM people
        WHERE name = "Joris Ivens"
	)
);

```

```txt
title
Pesn o geroyakh
```

3.	Organize and rewrite the SQL query of Q1 using WITH keyword
Expected Output: The SQL query in WITH keyword

```sql
WITH
director_joris_ivens AS (
    SELECT id
    FROM people
    WHERE name = "Joris Ivens"
)
SELECT movie_id FROM directors
WHERE person_id IN (
    SELECT id FROM director_joris_ivens
);
```

```txt
movie_id
23331
74334
178394
1067718
```

4.	Write a SQL query to show each person’s name and whether the person is born before 1970, born in 1970, born after 1970

Expected Output: The SQL query fulfilling the required data

```sql
SELECT name,
CASE
    WHEN birth < 1970 THEN “Born before 1970”
    WHEN birth = 1970 THEN “Born in 1970”
    WHEN birth > 1970 THEN “Born after 1970”
END AS born_year
FROM people;
```

```txt
name	            born_year
Fred Astaire	Born before 1970
Lauren Bacall	Born before 1970
Brigitte Bardot	Born before 1970
John Belushi	Born before 1970
Ingmar Bergman	Born before 1970
Ingrid Bergman	Born before 1970
Humphrey Bogart	Born before 1970
Marlon Brando	Born before 1970
Richard Burton	Born before 1970
James Cagney	Born before 1970
```

5.	Write a SQL query to count the number of people in the “people” table by each birth year.

Expected Output: The SQL query fulfilling the required data. Note that having the NULL birth year on the query result is normal.

```sql
SELECT birth,
    COUNT(*) AS number_of_people
FROM people
GROUP BY birth;
```

```txt
birth	number_of_people
null	876148
4	1
21	1
37	1
973	1
1067	1
1098	1
1130	1
1150	1
1207	1
```

6.	Write a SQL query to count the number of directors by each birth year. Only the years with more than 500 directors born are interested.

Expected Output: a table with two columns for the birth year and count of directors.

```sql
SELECT birth,
	COUNT(birth) AS count_of_directors
FROM people
GROUP BY birth
HAVING COUNT(birth) > 500;
```

```txt
birth	count_of_directors
1912	516
1914	560
1915	540
1916	586
1917	585
1918	657
1919	698
1920	949
1921	999
1922	1107
```
