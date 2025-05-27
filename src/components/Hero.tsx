import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Салон красоты в центре Твери
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональные услуги красоты: маникюр, педикюр, наращивание
            ресниц, массаж и косметология. Создаем красоту с заботой о вас.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              Забронировать процедуру
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
            >
              Посмотреть услуги
            </Button>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=500&fit=crop&crop=center"
              alt="SPA интерьер"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
