import React, { useLayoutEffect } from "react";
import { SiFuraffinity } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            to="/"
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <SiFuraffinity className="text-6xl text-primary" />
            <span class="ml-3 text-xl">AapkiBook</span>
          </Link>
          <p class="mt-2 text-sm text-gray-500">
            A unique place to get your dream furniture
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <nav class="list-none mb-10">
              <li>
                <Link to="/contact" class="text-gray-600 hover:text-gray-800">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" class="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Corporate </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              HELP
            </h2>
            <nav class="list-none mb-10">
              <li>
                <Link to="/payment" class="text-gray-600 hover:text-gray-800">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/shipping" class="text-gray-600 hover:text-gray-800">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/faq" class="text-gray-600 hover:text-gray-800">
                  FAQ
                </Link>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Report</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Social
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">Facebook</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Twitter</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Instagram</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Linkdin</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              POLICY
            </h2>
            <nav class="list-none mb-10">
              <li>
                <Link to="/policy" class="text-gray-600 hover:text-gray-800">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" class="text-gray-600 hover:text-gray-800">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/security" class="text-gray-600 hover:text-gray-800">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/privacy" class="text-gray-600 hover:text-gray-800">
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Furniturelelo —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              info@pacifencesolutions.com
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
