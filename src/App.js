import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Country from './pages/country/Country';
import Content from './components/content/Content';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Content />} />
          <Route path=":country" element={<Country />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
