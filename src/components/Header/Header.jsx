// Router
import { Link } from 'react-router-dom';

const Header = ({ navLinks }) => {
  return (
    <nav>
      <ul>
        {navLinks.map((path) => (
          <li key={path.name}>
            <Link to={path.link}>{path.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
