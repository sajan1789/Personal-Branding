const Navbar = () => {
    return (
      <div className="fixed top-0 left-0 w-full z-[100] bg-black/30 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Sajan Gupta</h1>
          <nav className="space-x-6">
            <a
              href="#aboutme"
              className="hover:text-blue-300 transition duration-300"
            >
              About Me
            </a>
            <a
              href="#my-hobbies"
              className="hover:text-blue-300 transition duration-300"
            >
              My Hobbies
            </a>
            <a
              href="#contact"
              className="hover:text-blue-300 transition duration-300"
            >
              Contact
            </a>
            <a
              href="#memory"
              className="hover:text-blue-300 transition duration-300"
            >
              Memory
            </a>
          </nav>
        </div>
      </div>
    );
  };
  export default Navbar