import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingForm = () => {
  return (
    <section
      id="booking"
      className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Записаться на процедуру
            </h2>
            <p className="text-xl text-gray-600">
              Заполните форму, и наш администратор свяжется с вами для
              подтверждения записи
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Форма записи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Услуга *
                    </label>
                    <select className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md">
                      <option>Выберите услугу</option>
                      <option>Маникюр</option>
                      <option>Педикюр</option>
                      <option>Наращивание ресниц</option>
                      <option>Массаж</option>
                      <option>Косметология лица</option>
                      <option>Окрашивание бровей</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Желаемая дата
                    </label>
                    <Input type="date" className="w-full" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий
                  </label>
                  <textarea
                    placeholder="Особые пожелания или вопросы"
                    className="w-full min-h-20 px-3 py-2 text-sm border border-input bg-background rounded-md resize-none"
                  />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Обязательные поля. Мы перезвоним вам в течение 15 минут.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    📍 Наш адрес
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Москва, ул. Тверская, д. 15
                  </p>
                  <p className="text-gray-600">м. Тверская, 2 минуты пешком</p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🕒 Время работы
                  </h3>
                  <p className="text-gray-600 mb-1">Пн-Пт: 9:00 — 21:00</p>
                  <p className="text-gray-600 mb-1">Сб-Вс: 10:00 — 20:00</p>
                  <p className="text-sm text-green-600 font-medium">
                    Без выходных
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    📞 Контакты
                  </h3>
                  <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
                  <p className="text-gray-600 mb-2">info@serenity-spa.ru</p>
                  <p className="text-sm text-gray-500">Звонки принимаем 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
