import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Fuel" size={24} className="text-white" />
            </div>
            <div className="font-montserrat font-bold text-xl text-gray-800">
              ДизельТопливо72
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Каталог
            </Link>
            <Link
              to="/delivery"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Контакты
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-blue-600 font-bold text-lg">
                +7 (3452) 555-777
              </div>
              <div className="text-sm text-gray-600">Круглосуточно</div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </Link>
              <Link
                to="/catalog"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Каталог
              </Link>
              <Link
                to="/delivery"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Доставка
              </Link>
              <Link
                to="/contacts"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </Link>
              <div className="pt-4 border-t">
                <div className="text-blue-600 font-bold">+7 (3452) 555-777</div>
                <div className="text-sm text-gray-600">Круглосуточно</div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
