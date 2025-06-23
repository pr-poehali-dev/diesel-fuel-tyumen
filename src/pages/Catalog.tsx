import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const products = [
    {
      title: "ДТ-Л-К5",
      description: "Летнее дизельное топливо класса К5",
      price: "52₽",
      features: [
        "Стандарт Евро-5",
        "Температура застывания до -10°C",
        "Высокое цетановое число",
        "Низкое содержание серы",
      ],
    },
    {
      title: "ДТ-З-К5",
      description: "Зимнее дизельное топливо класса К5",
      price: "55₽",
      isPopular: true,
      features: [
        "Стандарт Евро-5",
        "Температура застывания до -32°C",
        "Улучшенные низкотемпературные свойства",
        "Антигелевые присадки",
      ],
    },
    {
      title: "ДТ-А-К5",
      description: "Арктическое дизельное топливо класса К5",
      price: "58₽",
      features: [
        "Стандарт Евро-5",
        "Температура застывания до -52°C",
        "Специальные арктические присадки",
        "Гарантированный запуск при -40°C",
      ],
    },
    {
      title: "Мазут М-100",
      description: "Топочный мазут для котельных",
      price: "28₽",
      features: [
        "ГОСТ 10585-2013",
        "Высокая теплотворная способность",
        "Низкое содержание золы",
        "Стабильные характеристики",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Каталог продукции
          </h1>
          <p className="text-xl text-gray-600">
            Полный ассортимент нефтепродуктов с доставкой по Тюмени
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">Фильтры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Тип топлива
              </label>
              <select className="w-full p-2 border rounded-lg">
                <option>Все типы</option>
                <option>Летнее</option>
                <option>Зимнее</option>
                <option>Арктическое</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Минимальный объем
              </label>
              <select className="w-full p-2 border rounded-lg">
                <option>Любой объем</option>
                <option>От 500 л</option>
                <option>От 1000 л</option>
                <option>От 5000 л</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Цена за литр
              </label>
              <select className="w-full p-2 border rounded-lg">
                <option>Любая цена</option>
                <option>До 50₽</option>
                <option>50-60₽</option>
                <option>Свыше 60₽</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="font-bold text-2xl mb-4">Нужна консультация?</h3>
          <p className="mb-6">
            Поможем подобрать оптимальный вид топлива для ваших задач
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            <Icon name="Phone" size={16} className="inline mr-2" />
            Связаться с менеджером
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
