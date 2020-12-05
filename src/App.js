import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './layout/Content';
import Navigation from './layout/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Content />
      </Router>
    </div>
  );
}

export default App;
