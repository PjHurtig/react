import React from 'react'
import Book from './Book'

function RenderingList() {
    const bookList = [
        'to kill a mockingbird',
        'the grat gatsby',
        'catcher in the rye',
    ]

const books = [
    {
        title: 'to kill a mockingbird',
        author: 'harper lee',
        pages: 324,
    },
    {
        title: 'the grat gatsby',
        author: 'harper lee2',
        pages: 3242,
    },
    {
        title: 'catcher in the rye',
        author: 'harper lee3',
        pages: 3243,
    },
]

  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
        <hr />
        {books.map(book => {
            return <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
            </div>
        })}
        <hr />
        {books.map(book => {
            return <Book book={book} />
        })}
    </div>
  )
}

export default RenderingList