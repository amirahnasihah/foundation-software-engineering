# 07-table-relationship

One-to-one: Use a foreign key to the referenced table:

```sql
student: student_id, first_name, last_name, address_id
address: address_id, address, city, zipcode, student_id # you can have a
                                                        # "link back" if you need
```

You must also put a unique constraint on the foreign key column (addess.student_id) to prevent multiple rows in the child table (address) 
from relating to the same row in the referenced table (student).

One-to-many: Use a foreign key on the many side of the relationship linking back to the "one" side:

```sql
teachers: teacher_id, first_name, last_name # the "one" side
classes:  class_id, class_name, teacher_id  # the "many" side
```

Many-to-many: Use a junction table (example):

```sql
student: student_id, first_name, last_name
classes: class_id, name, teacher_id
student_classes: class_id, student_id     # the junction table
```

Example queries:

```sql
 -- Getting all students for a class:

    SELECT s.student_id, last_name
      FROM student_classes sc 
INNER JOIN students s ON s.student_id = sc.student_id
     WHERE sc.class_id = X

 -- Getting all classes for a student: 

    SELECT c.class_id, name
      FROM student_classes sc 
INNER JOIN classes c ON c.class_id = sc.class_id
     WHERE sc.student_id = Y
```
