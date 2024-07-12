import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/main.css';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/about_me" className={`nav-link ${activeLink === '/about_me' ? 'active' : ''}`}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/comic" className={`nav-link ${activeLink === '/comic' ? 'active' : ''}`}>
              COMIC
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;