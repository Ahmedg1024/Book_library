import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import BookCard from '../components/BookCard'

function Home() {
  return (
    <div>
        <SearchBar /> 
        <NavBar />
        <BookCard />
    </div>
  )
}

export default Home