import React from 'react'
import NavBar from '../../components/NavBar'
import SearchBar from '../../components/SearchBar'
import BookCard from '../../components/BookCard'

function Home() {
  return (
    <div>
        <NavBar />
        <SearchBar /> 
        <BookCard />
    </div>
  )
}

export default Home