import './App.css';
import { CardList } from './components/CardList/CardList.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header.jsx';
import data from './data/data.json';

function App() {
  return (
    <div className='App'>
      <Header />
      <CardList cards={data} />
      <Footer />
    </div>
  );
}

export default App;
