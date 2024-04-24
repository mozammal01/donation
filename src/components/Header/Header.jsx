import './Header.css';

const Header = () => {
  return (
    <div id="bg" className="text-center py-48">
      <h1 className="text-5xl font-bold py-6">I Grow By Helping People In Need</h1>
      <input className="border-2 rounded-lg -mx-2 px-2 py-1 bg-white" type="text" placeholder="Search here"/>      
      <button className="bg-red-500 px-4 py-2 rounded-lg text-white">Search </button>
    </div>
  );
};

export default Header;

//  className="bg-[url('/public/images/Clothing.png')] bg-no-repeat bg-cover"