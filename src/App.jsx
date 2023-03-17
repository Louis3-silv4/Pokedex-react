import Header from './components/Header/Header'
import TopBar from './components/TopBar/TopBar'
import './App.css'
import { SearchProvider } from './context/SearchContext'
import { FavoriteProvider } from './context/FavoritesContext'
import PokedexRoute from './routes/PokedexRoute'

export default function App() {
  return (
    <FavoriteProvider>
      <SearchProvider>
        <Header/>
        <TopBar/>
        <PokedexRoute/>
      </SearchProvider>
    </FavoriteProvider>
  )
}


