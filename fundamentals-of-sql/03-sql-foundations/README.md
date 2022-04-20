# 03-sql-foundations

## SQL Foundations

### CRUD

1.	Which 4 operations does C, R, U, D stand for?

```
C = Create
R = Read
U = Update
D = Delete
```

2.	Which 5 SQL keywords that are related to CRUD operations.

```
SELECT
CREATE
DELETE
UPDATE
INSERT INTO
```

3.	Consider a messaging app (e.g. Whatsapp). Which app functions can lead to CRUD operations? Suggest at least one app function for each CRUD operation.

```
C = Create new group
R = Read the chat messages
U = Update status
D = Delete messages
```

### SQL Data Types

1.	Imagine you are building a Whatsapp like app. Name two data fields and the corresponding SQL data types which would be used for storing records of chat messages.

contacts = INTEGER
messages = TEXT

2.	Name a data type that’s not available in SQLite.

```
BOOLEAN
```

3.	For the data type that’s not available in SQLite, what would we use as a replacement? And how?

```
Use 0 and 1 which represent an INTEGER. It recognizes the word ‘TRUE’ and ‘FALSE’ but makes an alias for the integer values of 0 and 1. That is 0 mean false, 1 mean true.
```
