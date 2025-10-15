import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const themeClass = (theme, lightClass, darkClass) =>
  theme ? darkClass : lightClass;

const NavButton = ({ item, onClick, theme, hoverAnim = {} }) => (
  <motion.button
    whileHover={hoverAnim}
    onClick={onClick}
    className={`text-sm uppercase tracking-wider transition-colors ${themeClass(
      theme,
      'text-gray-600 hover:text-gray-900',
      'text-gray-400 hover:text-white'
    )}`}
  >
    {item}
  </motion.button>
);

const ThemeToggle = ({ theme, setTheme }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setTheme(theme ? 'light' : 'dark')}
    className={`p-2 rounded-full transition-colors ${themeClass(
      theme,
      'text-gray-600 hover:text-gray-900 hover:bg-gray-200',
      'text-gray-400 hover:text-white hover:bg-gray-800'
    )}`}
  >
    {theme ? <Sun size={18} /> : <Moon size={18} />}
  </motion.button>
);

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Skills', 'Work', 'About', 'Contact'];

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 ${themeClass(
        theme,
        'bg-gray-50/80 border-gray-200',
        'bg-gray-950/80 border-gray-800'
      )}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Code2 size={24} className="text-blue-500" />{' '}
          <span className="text-lg ml-1">Time To Program</span>
        </motion.div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(item => (
            <NavButton
              key={item}
              item={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              theme={theme}
              hoverAnim={{ y: -2 }}
            />
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${themeClass(
              theme,
              'text-gray-600 hover:text-gray-900 hover:bg-gray-200',
              'text-gray-400 hover:text-white hover:bg-gray-800'
            )}`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md-hidden mt-4 p-4 rounded-lg ${themeClass(
              theme,
              'bg-white border-gray-200',
              'bg-gray-900 border-gray-800'
            )}`}
          >
            {navLinks.map(item => (
              <motion.div
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${
                  theme
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
