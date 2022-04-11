const bookList = [
    {title: "Harry Potter", author: "J.K. Rowling", alreadyRead: true},
    {title: "Never Eat Alone", author: "Keith Ferrazzi", alreadyRead: false},
    {title: "INSPIRED", author: "Marty Cagan", alreadyRead: false},
    {title: "Zero to One", author: "Peter Thiel", alreadyRead: true}
]

// Task 1: Write a loop to print out the bookList in the following format
// For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Add in your code here:



// Expected Output 1:
// Harry Potter by J.K. Rowling
// Never Eat Alone by Keith Ferrazzi
// INSPIRED by Marty Cagan
// Zero to One by Peter Thiel



// Task 2:
// Now build a function which take an input of "print read book" or "print unread books"
// Tips: Using the array.filter function would make life easier, but not using array.filter is also okay

function printBookList(bookList, completedReadingBook){
    // Add your code here:


    
}

// DO NOT EDIT THE CODE BELOW
// Test Case:
console.log("Task 2: ")
printBookList(bookList, true)


// Expected Output: 
// Task 2: 
// Harry Potter by J.K. Rowling
// Zero to One by Peter Thiel