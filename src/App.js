import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import {data} from './data';

function App() {
  const places = data.map(place => {
    return (
      <Card 
        key={place.id}
        {...place}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <section>
        {places}
      </section>
    </div>
  );
}

export default App;
