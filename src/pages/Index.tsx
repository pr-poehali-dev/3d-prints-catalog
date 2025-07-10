import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const toys = [
    {
      id: 1,
      name: "Роботик-помощник",
      category: "Игрушки",
      image: "/img/971faf04-5511-4812-9be5-22998b0a6283.jpg",
      description: "Интерактивный робот для развития логики и творчества",
      printTime: "4 часа",
      material: "PLA",
      buyLink: "https://example.com/robot",
      printVideo: "https://example.com/video1",
    },
    {
      id: 2,
      name: "Пазл-головоломка",
      category: "Образование",
      image: "/img/e9654ac7-9fc1-448e-954b-992e508c02f9.jpg",
      description: "3D пазл для развития пространственного мышления",
      printTime: "2 часа",
      material: "PETG",
      buyLink: "https://example.com/puzzle",
      printVideo: "https://example.com/video2",
    },
    {
      id: 3,
      name: "Мини-домик",
      category: "Декор",
      image: "/img/fdc48192-7793-4f48-8507-a85cad5d841e.jpg",
      description: "Архитектурная модель для игр и украшения",
      printTime: "6 часов",
      material: "PLA",
      buyLink: "https://example.com/house",
      printVideo: "https://example.com/video3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender via-white to-mint font-nunito">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-coral/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-coral rounded-xl flex items-center justify-center">
                <Icon name="Box" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-fredoka text-coral">
                3D TOYS CATALOG
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Каталог
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-fredoka text-coral mb-4 animate-bounce-gentle">
              Игрушки будущего! 🎯
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Откройте мир креативных игрушек и полезных вещей, напечатанных на
              3D принтере. Каждая модель создана с любовью к деталям и
              безграничной фантазией.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge
              variant="secondary"
              className="bg-turquoise text-white px-4 py-2 text-sm"
            >
              <Icon name="Zap" size={16} className="mr-2" />
              Быстрая печать
            </Badge>
            <Badge
              variant="secondary"
              className="bg-sky text-white px-4 py-2 text-sm"
            >
              <Icon name="Shield" size={16} className="mr-2" />
              Безопасные материалы
            </Badge>
            <Badge
              variant="secondary"
              className="bg-mint text-white px-4 py-2 text-sm"
            >
              <Icon name="Heart" size={16} className="mr-2" />
              Уникальный дизайн
            </Badge>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-fredoka text-center text-coral mb-12">
            Наш каталог 🎨
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toys.map((toy) => (
              <Card
                key={toy.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-coral/20 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={toy.image}
                      alt={toy.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-sunshine text-gray-800">
                      {toy.category}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {toy.material}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-fredoka text-coral mb-2">
                    {toy.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {toy.description}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {toy.printTime}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Printer" size={16} className="mr-1" />
                      3D печать
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button
                      className="w-full bg-coral hover:bg-coral/90 text-white"
                      onClick={() => window.open(toy.buyLink, "_blank")}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
                      onClick={() => window.open(toy.printVideo, "_blank")}
                    >
                      <Icon name="Play" size={16} className="mr-2" />
                      Процесс печати
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-fredoka text-center text-coral mb-12">
            Почему выбирают нас? ✨
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-fredoka text-coral mb-2">
                Инновационный дизайн
              </h4>
              <p className="text-gray-600">
                Каждая модель разработана с использованием современных
                технологий и творческого подхода
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-sky rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-fredoka text-coral mb-2">
                Качество материалов
              </h4>
              <p className="text-gray-600">
                Используем только безопасные и экологичные материалы для 3D
                печати
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-fredoka text-coral mb-2">
                Сообщество
              </h4>
              <p className="text-gray-600">
                Присоединяйтесь к сообществу любителей 3D печати и делитесь
                опытом
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-fredoka text-coral mb-8">
            Свяжитесь с нами! 📧
          </h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Есть вопросы? Хотите заказать индивидуальную модель? Мы всегда
              рады помочь!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-turquoise hover:bg-turquoise/90 text-white px-8 py-3">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать нам
              </Button>
              <Button
                variant="outline"
                className="border-coral text-coral hover:bg-coral hover:text-white px-8 py-3"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coral text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Icon name="Box" className="text-coral" size={20} />
            </div>
            <h4 className="text-xl font-fredoka">3D TOYS CATALOG</h4>
          </div>
          <p className="text-coral-200">
            &copy; 2024 Каталог 3D игрушек. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
