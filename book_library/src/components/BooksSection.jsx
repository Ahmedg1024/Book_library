import BookCard from "./BookCard";
import React from 'react'

function BooksSection() {
  return (
    <div className="flex w-10/12 justify-center content-center flex-wrap ">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
    </div>
  )
}

export default BooksSection