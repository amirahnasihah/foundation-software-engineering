# 04-basic-SELECT-queries

1.	Write a SQL query to list the titles of any 5 movies.

Expected Output: a table with a single column for the title of 5 movies.

title
Dama de noche
Pesn o geroyakh
El huésped del sevillano
Kate & Leopold
Another Time, Another Place

```sql
SELECT title FROM movies;
```

2.	Write a SQL query to list the movie titles sorted alphabetically.

Expected Output: a table with a single column containing a sorted movie title list. You can only capture the first 10 rows for illustration.

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

```sql
SELECT title FROM movies ORDER BY title ASC;
```

3.	Write a SQL query to list the movie titles sorted alphabetically and reverse chronologically.

Expected Output: a table with a single column containing a sorted movie title list. You can only capture the first 10 rows for illustration.

title
Šiška Deluxe
împetu
élèctions piege à cons
è solo questione di tempo
è solo questione di punti di vista
ärtico
âmes soeurs
à propos: philosophie
Þorsti
Üçüzler

```sql
SELECT title FROM movies ORDER by title DESC;
```

4.	Write a SQL query to list all the unique people name in alphabetical order

Expected Output: a table with a single column containing a sorted unique name list. You can only capture the first 10 rows for illustration.

name
!'aru Ikhuisi Piet Berendse
!Nqate Xqamxebe
$hutter
'A.J.' Marriot
'Aha Punana Leo
'Atlas' Ramachandran
'Atolomake Helu
'Bad' Chad Broussard
'Beatle' Bob Matonis
'Big' James Wroblewski

Result: 979440 rows

```sql
SELECT DISTINCT name FROM people ORDER by name ASC;
```

- End of Assignment -
