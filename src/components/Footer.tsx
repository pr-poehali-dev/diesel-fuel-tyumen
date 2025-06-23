import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Fuel" size={20} className="text-white" />
              </div>
              <div className="font-montserrat font-bold text-lg">
                ДизельТопливо72
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Надежный поставщик качественного дизельного топлива в Тюмени и
              области
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Icon name="Phone" size={16} />
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Icon name="Mail" size={16} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Продукция</h3>
            <ul className="space-y-2 text-gray-300">
              <li>ДТ-Л-К5 (летнее)</li>
              <li>ДТ-З-К5 (зимнее)</li>
              <li>ДТ-А-К5 (арктическое)</li>
              <li>Мазут топочный</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-blue-400" />
                <span>+7 (3452) 555-777</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-blue-400" />
                <span>info@diesel72.ru</span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={16} className="text-blue-400 mt-1" />
                <span>г. Тюмень, ул. Промышленная, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-blue-400" />
                <span>Круглосуточно</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ДизельТопливо72. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
