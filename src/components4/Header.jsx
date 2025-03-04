import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">MyApp</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/add">Himoyalangan</Link>
          <Link className="mr-5 hover:text-gray-900" to="/edit">Himoyalangan</Link>
          <Link className="mr-5 hover:text-gray-900" to="/signup">Sign Up</Link>
          <Link className="mr-5 hover:text-gray-900" to="/signin">Sign In</Link>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;
