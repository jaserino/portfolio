import './App.css';
import { NavBar } from './components/Nav';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
