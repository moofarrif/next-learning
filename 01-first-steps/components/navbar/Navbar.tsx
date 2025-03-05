

export const Navbar = () => {
  console.log("first")
  return (
    <nav className="flex bg-blue-900 bg-opacity-90 p-2 m-2  rounded">
      <a href="/" className="text-white hover:text-gray-200">
        Home
      </a>
      <div className="flex flex-1"></div>
      <a href="/pricing" className=" mr-3 text-white hover:text-gray-200">
        Pricing
      </a>
      <a href="/contact" className=" mr-3 text-white hover:text-gray-200>">
        Contact
      </a>
      <a href="/about" className=" mr-3 text-white hover:text-gray-200">
        About
      </a>
    </nav>
  );
};
