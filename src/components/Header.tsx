import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">💅</span>
          <h1 className="text-2xl font-bold text-gray-800">Нарния</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#booking"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Запись
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Записаться
        </Button>
      </div>
    </header>
  );
};

export default Header;
