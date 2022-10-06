import { useEffect } from 'react';
import { useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <header className="header">
      <div className="header-items">
        <Link to={'/'}>Were in the world?</Link>
        <div className="mode-pack">
          <IoMoon />
          <h3 onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}>Dark mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
