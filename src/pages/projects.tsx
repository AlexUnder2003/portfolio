import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { useLanguage } from "@/context/LanguageContext";

const projects = {
  ru: [
    {
      title: "FinAssist",
      img: "/finassist.png",
      alt: "Скриншот FinAssist",
      description:
        "Pet-проект финансового помощника для себя и семьи: проектирую архитектуру, разрабатываю backend на FastAPI и постепенно собираю фронтенд на React; сейчас в активной стадии разработки интерфейса.",
    },
    {
      title: "FMS",
      img: "/family.png",
      alt: "Скриншот FMS",
      description:
        "Семейный менеджер с распределением задач и управлением семьей: поднял с нуля полный стек на FastAPI, React и PostgreSQL, настроил крон-задачи и уведомления, CI/CD пайплайн и деплой в облако.",
    },
    {
      title: "pywebpush",
      img: "/pywebpush.png",
      alt: "Скриншот pywebpush",
      description:
        "Open source: добавил в pywebpush асинхронный API на asyncio, переписал отправку push-уведомлений, обновил тесты и документацию, помогал готовить релиз.",
    },
    {
      title: "Art Perspektiva",
      img: "/artperspektiva.png",
      alt: "Скриншот Art Perspektiva",
      description:
        "Интерактивная онлайн-галерея живописи с контентно-ориентированными рекомендациями картин по тегам (жанр, техника, эпоха, цветовая палитра). Backend на Django и DRF, frontend на React + TypeScript, контейнеризация Docker + Nginx, регистрация и сохранение избранного.",
    },
    {
      title: "ForEachPartners",
      img: "/for-each-partners.png",
      alt: "Скриншот ForEachPartners",
      description:
        "Платформа для управления командами разработчиков: создание проектов и ролей, управление доступом, JWT-авторизация на FastAPI, WebSockets для нотификаций, админ-панель, PostgreSQL + SQLAlchemy, фоновые задачи через Celery и Redis.",
    },
    {
      title: "Foodgram",
      img: "/foodgram.png",
      alt: "Скриншот Foodgram",
      description:
        "Социальная сеть для обмена рецептами с пошаговыми инструкциями, рейтингом и комментариями. Backend на Django + DRF, система избранного и подписок, поиск и фильтры по категориям, frontend на React + TailwindCSS.",
    },
    {
      title: "Blogicum",
      img: "/blogicum.jpg",
      alt: "Скриншот Blogicum",
      description:
        "Учебный проект блог, с возможность создания блогов, комментирования записей, фильтрация по категориям и тегам, поиск, админ-панель, backend на Django + DRF, frontend на Bootstrap.",
    },
    {
      title: "DailyDot",
      img: "/dailydot.png",
      alt: "Скриншот DailyDot",
      description:
        "Кросс-платформенное desktop-приложение на Electron + React для трекинга привычек: календарь выполнения, уведомления, статистика и графики, локальное хранение через SQLite, экспорт/импорт и тёмная тема.",
    },
  ],
  en: [
    {
      title: "FinAssist",
      img: "/finassist.png",
      alt: "FinAssist screenshot",
      description:
        "Personal finance helper for my family: designing the architecture, building the FastAPI backend, and currently focusing on the React frontend which is under active development.",
    },
    {
      title: "FMS",
      img: "/family.png",
      alt: "FMS screenshot",
      description:
        "Family management system I built from scratch: full-stack FastAPI, React and PostgreSQL app with scheduled cron jobs, notification pipeline, and end-to-end CI/CD deployment to the cloud.",
    },
    {
      title: "pywebpush",
      img: "/pywebpush.png",
      alt: "pywebpush screenshot",
      description:
        "Open-source: introduced an asyncio-based asynchronous API to pywebpush, refactored push delivery internals, refreshed tests and docs, and supported the release process.",
    },
    {
      title: "Art Perspektiva",
      img: "/artperspektiva.png",
      alt: "Art Perspektiva screenshot",
      description:
        "Interactive online painting gallery with content-based recommendations by tags (genre, technique, era, color palette). Backend with Django and DRF, frontend with React + TypeScript, Docker + Nginx containerization, user registration and favorites saving.",
    },
    {
      title: "ForEachPartners",
      img: "/for-each-partners.png",
      alt: "ForEachPartners screenshot",
      description:
        "Platform for managing developer teams: creating projects and roles, access control, JWT authorization on FastAPI, WebSockets for notifications, admin panel, PostgreSQL + SQLAlchemy, background tasks with Celery and Redis.",
    },
    {
      title: "Foodgram",
      img: "/foodgram.png",
      alt: "Foodgram screenshot",
      description:
        "Social network for sharing recipes with step-by-step instructions, ratings and comments. Backend on Django + DRF, favorites and subscriptions system, search and filters by categories, frontend with React + TailwindCSS.",
    },
    {
      title: "Blogicum",
      img: "/blogicum.jpg",
      alt: "Blogicum screenshot",
      description:
        "Educational blog project with features to create blogs, comment posts, filtering by categories and tags, search, admin panel, backend on Django + DRF, frontend with Bootstrap.",
    },
    {
      title: "DailyDot",
      img: "/dailydot.png",
      alt: "DailyDot screenshot",
      description:
        "Cross-platform desktop app on Electron + React for habit tracking: calendar, notifications, statistics and charts, local storage via SQLite, export/import and dark theme.",
    },
  ],
};

export default function ProjectsPage() {
  const { lang } = useLanguage();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center">
          <h1 className={title()}>{lang === "ru" ? "Проекты" : "Projects"}</h1>
        </div>

        {projects[lang].map((proj) => (
          <Card
            key={proj.title}
            className="max-w-5xl mt-5 order-1 md:order-1 md:col-span-8 row-span-1 flex flex-col p-6 bg-white/10 backdrop-blur-md border border-white/10"
            radius="lg"
          >
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

        <h1 className="text-3xl mt-10">
          {lang === "ru" ? "Этот сайт тоже сделал я." : "I also made this website."}
        </h1>
      </section>
    </DefaultLayout>
  );
}
