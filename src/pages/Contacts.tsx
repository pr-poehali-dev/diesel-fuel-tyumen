import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-4xl mb-4">Контакты</h1>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6">Контактная информация</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Телефон</h3>
                  <p className="text-lg font-bold text-blue-600">
                    +7 (3452) 555-777
                  </p>
                  <p className="text-sm text-gray-600">Круглосуточно</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-blue-600">info@diesel72.ru</p>
                  <p className="text-blue-600">sales@diesel72.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Адрес</h3>
                  <p>625000, г. Тюмень</p>
                  <p>ул. Промышленная, 15</p>
                  <p className="text-sm text-gray-600">База нефтепродуктов</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Режим работы</h3>
                  <p>Отдел продаж: Пн-Пт 8:00-20:00</p>
                  <p>Суббота: 9:00-18:00</p>
                  <p>Доставка: круглосуточно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-bold text-2xl mb-6">Обратная связь</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="example@mail.ru"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Тип запроса
                </label>
                <select className="w-full p-3 border rounded-lg">
                  <option>Заказ топлива</option>
                  <option>Узнать цены</option>
                  <option>Условия доставки</option>
                  <option>Техническая поддержка</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg h-32"
                  placeholder="Опишите ваш запрос..."
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="font-bold text-2xl mb-6">Реквизиты компании</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                ООО "ДизельТопливо72"
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">ИНН:</span> 7203123456
                </p>
                <p>
                  <span className="font-medium">КПП:</span> 720301001
                </p>
                <p>
                  <span className="font-medium">ОГРН:</span> 1027200123456
                </p>
                <p>
                  <span className="font-medium">ОКПО:</span> 12345678
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                Банковские реквизиты
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Р/с:</span> 40702810712345678901
                </p>
                <p>
                  <span className="font-medium">Банк:</span> ПАО "Сбербанк"
                </p>
                <p>
                  <span className="font-medium">К/с:</span> 30101810500000000653
                </p>
                <p>
                  <span className="font-medium">БИК:</span> 047102651
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
