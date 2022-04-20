# 01-intro-to-databases

## Intro To Databases

### Database 101

1.	Suggest 3 applications/softwares/apps which can utilize Database.

```
Payment application (PayPal)
Social application (Twitter, Facebook)
Messaging applications (WhatsApp, Messenger)
```

2.	Consider a payment application (Like Paypal or a banking app). How would a database play a role in the payment system? Can you mention 2 user operations that rely on the database of a payment application?

```
Database in the payment system can contain information or data about the transaction we made and can retrieve that transaction history more organized.
We can check who the sender is, when and where the transaction occurs etc.

User history – contain historical transactions about the payment made where user can check their payment history with other users such as 
to see the sender name, time of the transaction, payment amount etc. Also can track on their spending history when using with other applications.

User data – personal information of the user such as name, age, and account number  etc that the user provided to the app 
where it can be retrieve/update information.
```

### Database Concept

Consider a movie rating website. The website is able to display movie details e.g. movie name, directors, actors etc. Also, users can rank and review the movies.

1.	Suggest 3 data tables for the website.

```
movies
popularity
people
```

2.	Suggest 5 data fields that should be available on the database.

```
movie_name
vote
birth
genre
year
```

### Types of Databases

1.	Name 2 Relational Database Software.

```
MySQL
PostgreSQL
```

### Roles of Database in Detail
Consider a user registering an account on a social media website (e.g. Twitter). Describe the role of the below elements when the user pressed the “Register” button.

1.	App / Website

```
When a user registers an account, Twitter or other social media websites will create all the information given such as name, email address, and age in the database. Then, once registered, Twitter will send instructions to the database to store the information.
```

2.	Database

```
The database then saves/retrieves the information given by the user once the “Register” button is clicked. Once the data is retrieved, the data is then displayed in the user interfaces saying it has completed registration.
```
