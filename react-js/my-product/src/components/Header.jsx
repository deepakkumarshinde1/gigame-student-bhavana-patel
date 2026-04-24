import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/project">Project</NavLink>
          <ul>
            <li>
              <NavLink to="/project/java">Java</NavLink>
            </li>
            <li>
              <NavLink to="/project/php">PHP</NavLink>
            </li>
            <li>
              <NavLink to="/project/javascript">Javascript</NavLink>
            </li>
            <li>
              <NavLink to="/project/python">Python</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Header;
