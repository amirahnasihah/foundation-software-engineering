# task 1

**HTML**
```html
<ul class="shopping-list" id="awesome">
<li><span>Milk</span></li>
<li class="favourite" id="must-buy"><span class="highlight">Sausage</span></li>
</ul>
```

**CSS:**
```css
ul {
color: red;
}

li {
color: blue;
}
```

What is the color of the text Sausage?

The color of the text "Sausage" is **blue**. This is because the CSS style for `li` elements sets the color to blue. The CSS rule `li { color: blue; }` applies to all `li` elements within the `ul` element, including the one containing "Sausage."

# task 2
```javascript
x = 1;

function bar() {
  this.x = 2;
  return x;
}

var foo = new bar();
alert(foo.x);
```

What value is alerted?

In the given code, the value alerted is `2`.

Here's how the code works step by step:

1. A global variable `x` is declared and assigned the value `1`.
2. A function `bar()` is defined. Inside the `bar()` function, `this.x` is set to `2`, and then it returns the value of the global variable `x`.
3. A new instance of the `bar()` function is created using the `new` keyword and assigned to the variable `foo`.
4. When the `bar()` function is called as a constructor with the `new` keyword, `this.x` is set to `2`, which modifies the value of the global variable `x`.
5. The constructor does not explicitly return a value, so the newly created object (`foo`) is returned.
6. Finally, `alert(foo.x);` alerts the value of the `x` property of the `foo` object, which was set to `2` by the constructor function.

So, the value alerted is `2`.

# task 3

JavaScript code below:

`4 + 3 + 2 + "1"`

What does the above statement evaluate to?

The above JavaScript statement will evaluate to the **string "91"**.

Let's break down the evaluation step by step:

1. The first three numbers are added together: 4 + 3 + 2 = 9
2. The result of the addition is then concatenated with the string "1".

Since JavaScript performs implicit type conversion when using the `+` operator with different data types, the number 9 is converted to a string and concatenated with "1" to produce "91".

# task 4 MySQL

Write a MySQL statement to create table and insert data with the following fields: "Username, Password, Email & Created Time"

To create a table and insert data with the specified fields ("Username", "Password", "Email", and "Created Time") in MySQL, you can use the following SQL statements:

1. Create the table:

```sql
CREATE TABLE users (
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    CreatedTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (Username)
);
```



In this statement:
- We create a table named "users".
- The "Username", "Password", and "Email" fields are defined as VARCHAR, which can hold up to 50, 100, and 100 characters, respectively. The `NOT NULL` constraint ensures these fields cannot be empty.
- The "CreatedTime" field is defined as TIMESTAMP with the `DEFAULT CURRENT_TIMESTAMP` attribute, which means it will automatically use the current timestamp when a new row is inserted.
- The `PRIMARY KEY` constraint is set on the "Username" field to ensure its uniqueness.

> DATE type is used for values with a date part but no time part, in 'YYYY-MM-DD' format.
>  DATETIME type is used for values that contain both date and time parts, in 'YYYY-MM-DD hh:mm:ss' format.
> TIMESTAMP data type is used for values that contain both date and time parts, a range of '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC.
> For any TIMESTAMP or DATETIME column in a table, you can assign the current timestamp as the default value, the auto-update value, or both. a. **An auto-initialized column is set to the current timestamp for inserted rows that specify no value for the column**. b. **An auto-updated column is automatically updated to the current timestamp when the value of any other column in the row is changed from its current value. To update an auto-updated column even when other columns do not change, explicitly set it to the value it should have (for example, set it to CURRENT_TIMESTAMP).**

```sql
CREATE TABLE pet (
    name VARCHAR(20),
    owner VARCHAR(20),
    species VARCHAR(20),
    sex CHAR(1),
    birth DATE,
    death DATE
);
```

> CHAR column is fixed to the length that you declare when you create the table, if it up to 4 characters it will fixed to 4 including the space. VARCHAR columns are variable-length strings.

ex;
CHAR(4)
'    '
'ab  '
'abcd'

VARCHAR(4)
''
'ab'
'abcd'


2. Insert data into the table:

```sql
INSERT INTO users (Username, Password, Email) VALUES
    ('john_doe', 'hashed_password_123', 'john@example.com'),
    ('jane_smith', 'hashed_password_456', 'jane@example.com'),
    ('user3', 'hashed_password_789', 'user3@example.com');
```

This statement inserts three sample records into the "users" table. You can adjust the data as needed for your specific use case. The "CreatedTime" field will automatically be populated with the current timestamp when each record is inserted.

# task 5 (CMS)

Share your experience on Content Management System and which CMS used.

- I don't have any direct experience with Content Management Systems. However, I am familiar with WordPress. While I haven't extensively used WordPress, I had the opportunity to explore with it on a couple of times. I created and customized a basic website for the purpose of self-learning.

# task 6 (experience)

Define Responsive Website and share your development experience and framework used.

- Responsive website is web pages that user-friendly on various devices such as desktop browsers, tablets and phones.
- I have worked on several projects in web development such as Food Ordering App, Find News App and Contact Manager App and the frameworks I've used mainly with popular libraries and frameworks such as React, Material UI, Semantic UI, and Tailwind. In terms of tools and platforms, I have experience with version control using Git and Github, deployment on Netlify and Vercel, and working with REST APIs and GraphQL. For design purposes, I have utilized Figma and Canva.
