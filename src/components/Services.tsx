import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Классический массаж",
      description:
        "Расслабляющий массаж всего тела с использованием натуральных масел",
      price: "4 500 ₽",
      duration: "60 мин",
      image:
        "https://images.unsplash.com/photo-1596178060810-4d63d6b5e412?w=400&h=300&fit=crop",
    },
    {
      title: "Аромотерапия",
      description: "Глубокое расслабление с эфирными маслами премиум класса",
      price: "5 200 ₽",
      duration: "90 мин",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
    },
    {
      title: "Стоун-терапия",
      description:
        "Массаж горячими камнями для глубокого мышечного расслабления",
      price: "6 800 ₽",
      duration: "75 мин",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      title: "Гидротерапия",
      description:
        "Лечебные ванны с минералами и травами для восстановления сил",
      price: "3 900 ₽",
      duration: "45 мин",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      title: "Уход за лицом",
      description:
        "Профессиональная косметология с использованием органических средств",
      price: "7 500 ₽",
      duration: "90 мин",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    },
    {
      title: "Детокс-обертывание",
      description:
        "Очищающие обертывания для выведения токсинов и улучшения кожи",
      price: "5 900 ₽",
      duration: "60 мин",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий спектр SPA-процедур для полного восстановления и релаксации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">
                    {service.duration}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    {service.price}
                  </span>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
