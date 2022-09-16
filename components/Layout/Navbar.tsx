import Link from "next/link";
import {motion, AnimatePresence} from 'framer-motion'
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter()

  const navLinks = [
    {
      title: "Home",
      href: "/",
      active: router.asPath === "/",
    },

    {
      title: "About Us",
      href: "/about",
      active: router.asPath === "/about",
    },
    {
      title: "Promise",
      href: "/promise",
      active: router.asPath === "/promise",
    },
  ];


  return (
    <header className="absolute z-20 bg-transparent top-0 left-0 right-0">
      {/**Desktop Navigation Starts**/}
      <nav className="hidden md:flex max-w-7xl mx-auto px-4 justify-between items-center">
        <h3 className="text-2xl font-light font-sans text-gray-700 uppercase">
          Mudita
        </h3>

        <div className="flex items-center">
          <ul className="flex items-center  h-full">
            {navLinks.map((item) => (
              <motion.li
                layout
                key={item.title}
                className={`h-full transition-all duration-500 py-4 px-2 cursor-pointer ${
                  item.active ? "bg-slate-200" : ""
                }`}
              >
                <Link href={item.href}>
                  <motion.a
                    layout
                    transition={{ duration: 0.3 }}
                    className={`uppercase font-medium transition-all duration-500 ${
                      item.active ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </motion.a>
                </Link>
              </motion.li>
            ))}
          </ul>

        </div>
      </nav>

      {/**Desktop Navigation Ends**/}

      {/**Mobile Navigation Starts**/}

      {/**Mobile Navigation Ends**/}
    </header>
  );
};
export default Navbar;
