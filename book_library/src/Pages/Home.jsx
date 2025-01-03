import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import BooksSection from '../components/BooksSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <SearchBar /> 
        <NavBar />
        <BooksSection />
        <Footer />
    </div>
  )
}

export default Home