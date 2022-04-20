# 06-complex-select-statements

## Complex SELECT statements

### Understanding the database

1.	Study the table schema and the data in the “people” and “directors” table and describe the relation between the tables “people” and “directors”

```sql

```

2.	Study the table schema and the data in the “movies” and “directors” table and describe the relation between the tables “movies” and “directors”

```sql

```

### Query Exercises

1.	Write a SQL query to obtain the movie_id who is directed by “Joris Ivens” without using WITH keyword
Expected Output: a table with a single column for the movie_id of the director’s movie.

```sql

 ```

2.	Write a SQL query to obtain the movie title who is directed by “Joris Ivens”
Expected Output: a table with a single column for the movie title of the director’s movie.

```sql

```

3.	Organize and rewrite the SQL query of Q1 using WITH keyword
Expected Output: The SQL query in WITH keyword

```sql

```

4.	Write a SQL query to show each person’s name and whether the person is born before 1970, born in 1970, born after 1970
Expected Output: The SQL query fulfilling the required data

```sql

```

5.	Write a SQL query to count the number of people in the “people” table by each birth year.
Expected Output: The SQL query fulfilling the required data. Note that having the NULL birth year on the query result is normal.

```sql

```

6.	Write a SQL query to count the number of directors by each birth year. Only the years with more than 500 directors born are interested.
Expected Output: a table with two columns for the birth year and count of directors.

```sql

```
