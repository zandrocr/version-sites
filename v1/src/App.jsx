//import css
import '../src/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import components
import Header from './components/Header'
import Main from './components/Main'
import KiDelicia from './components/Portfolio/KiDelicia'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App container">
        <Header />
        <Main />
        <KiDelicia />
        <Footer />
    </div>
  )
}

export default App
