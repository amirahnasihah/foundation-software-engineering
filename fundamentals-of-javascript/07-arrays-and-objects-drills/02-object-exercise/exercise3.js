// Book List

// Task:
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), 
// and alreadyRead (a boolean indicating if you read it yet).

// There should be 4 books in the list:
// Harry Potter, J.K. Rowling, Read
// Never Eat Alone , Keith Ferrazzi, Unread
// INSPIRED, Marty Cagan, Unread
// Zero to One, Peter Thiel, Read



const bookList = [
    // Add your code here
    {title: "Harry Potter", author: "J.K. Rowling", alreadyRead: true},
    {title: "Never Eat Alone", author: "Keith Ferrazzi", alreadyRead: false},
    {title: "INSPIRED", author: "Marty Cagan", alreadyRead: false},
    {title: "Zero to One", author: "Peter Thiel", alreadyRead: true}
]



// DO NOT EDIT CODE BELOW
// Test Case
for (book of bookList){
    console.log(book.title + " by " + book.author)
}


// Expected Output:
// Harry Potter by J.K. Rowling
// Never Eat Alone by Keith Ferrazzi
// INSPIRED by Marty Cagan
// Zero to One by Peter Thiel