import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  const zones = [
    {
      name: "Центральная зона",
      areas: ["Центральный район", "Калининский район", "Ленинский район"],
      price: "Бесплатно",
      time: "2-4 часа",
    },
    {
      name: "Ближние районы",
      areas: ["Тюменский район", "Ялуторовский район"],
      price: "150₽/км",
      time: "4-6 часов",
    },
    {
      name: "Дальние районы",
      areas: ["Ишимский район", "Тобольский район", "Заводоуковский район"],
      price: "200₽/км",
      time: "6-12 часов",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Доставка топлива
          </h1>
          <p className="text-xl text-gray-600">
            Быстрая и надежная доставка дизельного топлива по всей Тюменской
            области
          </p>
        </div>

        {/* Delivery Zones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {zones.map((zone, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                {zone.name}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={16}
                    className="text-gray-400 mr-2"
                  />
                  <div>
                    {zone.areas.map((area, i) => (
                      <div key={i} className="text-sm text-gray-600">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Truck" size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{zone.price}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm">{zone.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Conditions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="font-bold text-2xl mb-6">Условия доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                Минимальные объемы
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Дизельное топливо: от 500 л
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Мазут: от 1000 л
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Оптовые поставки: от 10 000 л
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                Требования к месту доставки
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Проезд для автоцистерны
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Наличие емкости для слива
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Представитель заказчика
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="font-bold text-2xl mb-6">Калькулятор доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Тип топлива
              </label>
              <select className="w-full p-3 border rounded-lg">
                <option>ДТ-Л-К5</option>
                <option>ДТ-З-К5</option>
                <option>ДТ-А-К5</option>
                <option>Мазут М-100</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Объем (л)
              </label>
              <input
                type="number"
                className="w-full p-3 border rounded-lg"
                placeholder="1000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Адрес доставки
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="г. Тюмень"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Рассчитать
              </button>
            </div>
          </div>
        </div>

        {/* Fleet Info */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="font-bold text-2xl mb-4">Наш автопарк</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Icon name="Truck" size={32} className="mx-auto mb-2" />
              <div className="font-bold">Автоцистерны</div>
              <div className="text-blue-200">5-25 тонн</div>
            </div>
            <div>
              <Icon name="Shield" size={32} className="mx-auto mb-2" />
              <div className="font-bold">Безопасность</div>
              <div className="text-blue-200">Все разрешения ADR</div>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-2" />
              <div className="font-bold">GPS-мониторинг</div>
              <div className="text-blue-200">
                Отслеживание в реальном времени
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;
