import ProductCard from "./ProductCard";

const Products = () => {
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
      features: [
        "Стандарт Евро-5",
        "Температура застывания до -32°C",
        "Улучшенные низкотемпературные свойства",
        "Антигелевые присадки",
      ],
      isPopular: true,
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
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Наша продукция
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент качественного дизельного топлива для любых
            погодных условий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Минимальный заказ от 500 литров</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
            Посмотреть полный каталог
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
