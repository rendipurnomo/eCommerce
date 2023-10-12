import { ShoppingBagOpen, ShoppingCartSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 mt-4 p-5 rounded-xl bg-primary shadow-xl'>
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <Language />
          <Search />
        </div>
        <Logo />
        <div className="flex items-center gap-4 text-light">
          <Button to='/register'>Register</Button>
          <Button to='/login'>Login</Button>
          <Cart/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function Search(){
  return (
      <input
        className="max-w-[150px] bg-transparent border-2 border-slate-200 rounded-lg px-2 bg-search bg-no-repeat bg-right bg-contain focus:ring-0 focus:outline-slate-400 placeholder:text-dark"
        type="text"
        placeholder="Search"
      />
  );
}

function Logo(){
  return (
    <div className="flex items-center gap-2 text-3xl font-bold">
      <h1 className="text-light">Shopper </h1>
      <span className="text-secondary">
        <ShoppingBagOpen />
      </span>
    </div>
  );
}

function Language(){
  return (
    <select className='rounded-xl px-1'>
      <option value="English">EN</option>
      <option value="Indonesia">ID</option>
    </select>
  );
}

function Button({children, to}){
  return (
    <button><Link to={to}>{children}</Link></button>
  );
}

function Cart(){
  return (
    <div className="relative text-xl">
      <ShoppingCartSimple />
      <div className="absolute -top-2 -right-1 w-3 h-3 bg-accent2 rounded-full flex items-center justify-center text-xs font-semibold p-2 text-light">
        3
      </div>
    </div>
  );
}
