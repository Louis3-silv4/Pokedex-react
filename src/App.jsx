import Header from './components/Header/Header'
import TopBar from './components/TopBar/TopBar'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import { SearchProvider } from './context/SearchContext'



export default function App() {
  return (
      <SearchProvider>
        <Header/>
        <TopBar/>
        <Pokedex/>
      </SearchProvider>
  )
}


