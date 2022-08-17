import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import "./styles.scss"

const Navigation = () => {
  return (
    <>
      <nav aria-label="Main">
        <Link to='/' className='logo'>
          <CrownLogo aria-label="Homepage" />
        </Link>

        <ul>
          <li><Link to='/shop'>shop</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
