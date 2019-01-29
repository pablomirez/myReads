# MyReads Project
MyRead projects is a book application which displays a list of books divided in three different categories:

* Currently Reading 
* Want to read 
* Read

Every book is displayed with its respective title, thumbnail and a dropdown menu that let you change the category accordingly. 

Also you can search for more books and move them to any of the categories mentioned previously

## TL;DR

To get started developing right away:


* install all project dependencies with `npm install`
* start the development server with `npm start`

Also you can install yarn, an excellent package manger. Please follow instruction for your OS 
https://yarnpkg.com/en/docs/getting-started

Once yarn is isntall you can set up and start the project with:

* `yarn install`
* `yarn start `
 
 
 ## Project Modules
 
 * BookRow: Functional component without state, it represents the categories "Currently reading", "Want to read" and "Read".
 * SingleBook: Class Component with state. It represents every single book.
 * BookShelf: Class component with state. It represent the whole container for all three book categories.
 * BookSearch: Class component with state. It handle the search of book on the BookAPI and let us change books of category. 
 * BookAPI: Backend for search books, please see Backend Server section below.
 

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

