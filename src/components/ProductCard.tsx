
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const ProductCard = ({ title, description, price, features, isPopular }: ProductCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 relative ${4xl mx-auto text-center">
          isPopular ? 'ring-2 ring-blue-500' : ''}`<h1 className="text-5xl font-bold mb-6 font-mont}>
      {isPopular && (
        serrat">
            Качественное дизельное топливо
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1<span className="text-blue-400  rounded-full text-sm fontblock mt-2">в Тюмени и области</span>
          </h1>
          <p className="text-xl mb--bold">
            Попул8 text-gray-200 max-w-ярный
          </span>
        </div>
      2xl mx-auto">
            Над)}
      
      <div className="text-centerежные поставки для частных л mb-6">
        <h3иц и предприятий. className="font-montserrat 
            Высокое качество font-bold text-xl mb-2">{title}</h3>
        <p className="text-, выгодные цены, быgray-600 mb-4">{страя доставка.
          </pdescription}</p>
        <div>
          <div className="flex className="text-3xl font-bol flex-col sm:flex-rowd text-blue-600 mb- gap-4 justify-center">
            <Button2">{price}</div> size="lg" className="bg-orange
        <div className="text-sm text--500 hover:bg-orangegray-500">за литр</div>-600 text-white px
      </div>

      -8 py-3">
              <ul className="space-y-2 mb-6<Icon name="Phone" className="mr">
        {features.map((feature, index)-2" />
              За => (
          <li key={казать сейчас
            </Button>index} className="flex items-center
            <Button size="lg" variant text-sm">
            <Icon="outline" className="border-white name="Check" size={16} text-white hover:bg-white hover:text- className="text-green-500 mr-2 slate-900 px-8 pyflex-shrink-0" />-3">
              <Icon name="Calculator
            {feature}
          </li>
        )" className="mr-2" />
              Р)}
      </ul>

      ассчитать стоимость<button className={`w-full py-3 
            </Button>
          rounded-lg font-bold transition</div>
        </div>
      </div>-colors ${
        isPopular
      <div className="absolute bottom-0 left-0 
          ? 'bg- right-0 h-24blue-600 text-white hover:bg-blue-700'  bg-gradient-to-t
          : 'bg-gray from-white to-transparent">-100 text-gray-800</div>
    </section>
  );
};

export default Hero hover:bg-gray-200;
