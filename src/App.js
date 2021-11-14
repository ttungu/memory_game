import './App.css';
import Header from './modules/header';
import Footer from './modules/footer';
import Cards from './modules/cards'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
