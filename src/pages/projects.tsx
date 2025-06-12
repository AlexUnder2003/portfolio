import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";

const projects = [
  {
    title: "Art Perspektiva",
    img: "/artperspektiva.png",
    alt: "Art Perspektiva screenshot",
    description: "Интерактивная онлайн-галерея живописи с контентно-ориентированными рекомендациями картин по тегам (жанр, техника, эпоха, цветовая палитра). Backend на Django и DRF, frontend на React + TypeScript, контейнеризация Docker + Nginx, регистрация и сохранение избранного.",
  },
  {
    title: "ForEachPartners",
    img: "/for-each-partners.png",
    alt: "ForEachPartners screenshot",
    description: "Платформа для управления командами разработчиков: создание проектов и ролей, управление доступом, JWT-авторизация на FastAPI, WebSockets для нотификаций, админ-панель, PostgreSQL + SQLAlchemy, фоновые задачи через Celery и Redis.",
  },
  {
    title: "Foodgram",
    img: "/foodgram.png",
    alt: "Foodgram screenshot",
    description: "Социальная сеть для обмена рецептами с пошаговыми инструкциями, рейтингом и комментариями. Backend на Django + DRF, система избранного и подписок, поиск и фильтры по категориям, frontend на React + TailwindCSS.",
  },
  {
    title: "Blogicum",
    img: "/blogicum.jpg",
    alt: "Blogicum screenshot",
    description: "Учебный проект блог, с возможность создания блогов, комментирования записей, фильтрация по категориям и тегам, поиск, админ-панель, backend на Django + DRF, frontend на Bootstrap.",
  },
 {
    title: "DailyDot",
    img: "/dailydot.png",
    alt: "DailyDot screenshot",
    description: "Кросс-платформенное desktop-приложение на Electron + React для трекинга привычек: календарь выполнения, уведомления, статистика и графики, локальное хранение через SQLite, экспорт/импорт и тёмная тема.",
  }
];


export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center">
          <h1 className={title()}>Проекты</h1>
        </div>

        {projects.map((proj) => (
          <Card key={proj.title} className=" max-w-5xl mt-5 order-1 md:order-1 md:col-span-8 row-span-1 flex flex-col p-6 bg-white/10 backdrop-blur-md border border-white/10" radius="lg">
            <CardHeader className="m-3 pl-3 flex-col items-start">
              <h4 className="text-3xl">{proj.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={proj.alt}
                className="object-cover rounded-xl"
                src={proj.img}
                width={1000}
              />
            </CardBody>
            <CardFooter className="flex-col items-start p-4 text-xl">
              <p>{proj.description}</p>
            </CardFooter>
          </Card>
        ))}
        <h1 className="text-3xl">Этот сайт тоже сделал я.</h1>
      </section>
    </DefaultLayout>
  );
}
