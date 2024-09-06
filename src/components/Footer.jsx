import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Company Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-white text-lg font-semibold capitalize mb-8 relative">
              company
              <span className="block w-12 h-0.5 bg-pink-500 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
            </h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  about us
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  our services
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  privacy policy
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  affiliate program
                </a>
              </li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-white text-lg font-semibold capitalize mb-8 relative">
              get help
              <span className="block w-12 h-0.5 bg-pink-500 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
            </h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  shipping
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  returns
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  order status
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  payment options
                </a>
              </li>
            </ul>
          </div>

          {/* Online Shop Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-white text-lg font-semibold capitalize mb-8 relative">
              online shop
              <span className="block w-12 h-0.5 bg-pink-500 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
            </h4>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  watch
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  bag
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  shoes
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                  dress
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h4 className="text-white text-lg font-semibold capitalize mb-8 relative">
              follow us
              <span className="block w-12 h-0.5 bg-pink-500 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
            </h4>
            <div className="flex space-x-4">
              <a href="/" className="w-10 h-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center transition duration-500 ease-in-out hover:bg-white hover:text-gray-800">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="w-10 h-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center transition duration-500 ease-in-out hover:bg-white hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="w-10 h-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center transition duration-500 ease-in-out hover:bg-white hover:text-gray-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="w-10 h-10 bg-white bg-opacity-20 text-white rounded-full flex items-center justify-center transition duration-500 ease-in-out hover:bg-white hover:text-gray-800">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
