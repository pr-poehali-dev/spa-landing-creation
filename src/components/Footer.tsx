const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌿</span>
              <h3 className="text-2xl font-bold">Serenity SPA</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Премиальный SPA-салон в центре Москвы. Мы создаем атмосферу
              гармонии и восстановления для вашего полного релакса.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                📱
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                📧
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                🌐
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Классический массаж
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Аромотерапия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Стоун-терапия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Уход за лицом
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Детокс-программы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Москва, ул. Тверская, д. 15</p>
              <p>📞 +7 (495) 123-45-67</p>
              <p>📧 info@serenity-spa.ru</p>
              <p>🕒 Пн-Вс: 9:00 — 21:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Serenity SPA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
