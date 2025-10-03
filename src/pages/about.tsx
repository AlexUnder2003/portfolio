import { useLanguage } from "@/context/LanguageContext";
import { title } from "@/components/primitives";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import DefaultLayout from "@/layouts/default";

const experiences = {
  ru: [
    {
      period: "2025 – Present",
      role: "Full-Stack разработчик",
      company: "USP PT",
      description:
        "Разрабатываю семейного менеджера FMS: проектирую backend на FastAPI и PostgreSQL, " +
        "развиваю интерфейс на React, поддерживаю cron-задачи и систему уведомлений. " +
        "Настроил CI/CD пайплайн и отвечаю за облачное развёртывание и сопровождение.",
    },
    {
      period: "2024 – 2025",
      role: "Full-Stack разработчик",
      company: "ArtPerspektiva",
      description:
        "Разработал фронтенд на React, создал аналог Pinterest. " +
        "Спроектировал и реализовал систему рекомендаций картин по тегам используя индексы и PGSQL. " +
        "Настроил backend на FastAPI, frontend на React, и контейнеризацию через Docker + Nginx."
    },
    {
      period: "2023 – 2024",
      role: "Backend разработчик",
      company: "ForEachPartners",
      description:
        "Разрабатывал REST-API на Django, интегрировал Celery + Redis для фоновых задач, обеспечил защиту JWT-токенами. " +
        "Настроил SMTP-сервер для отправки писем. Настроил CI/CD Pipeline через GitHub Actions. Управлял проектом на Linux-сервере."
    },
  ],
  en: [
    {
      period: "2025 – Present",
      role: "Full-Stack Developer",
      company: "USP PT",
      description:
        "Developing the FMS family-management platform: architecting the FastAPI and PostgreSQL backend, " +
        "building the React frontend, and maintaining cron-driven notification services. " +
        "Set up the CI/CD pipeline and manage cloud deployment and operations.",
    },
    {
      period: "2024 – Present",
      role: "Full-Stack Developer",
      company: "ArtPerspektiva",
      description:
        "Developed frontend with React, created a Pinterest clone. " +
        "Designed and implemented a painting recommendation system using tags and PGSQL indexes. " +
        "Set up backend on FastAPI, frontend on React, and containerization via Docker + Nginx."
    },
    {
      period: "2023 – 2024",
      role: "Backend Developer",
      company: "ForEachPartners",
      description:
        "Developed REST API on Django, integrated Celery + Redis for background tasks, secured with JWT tokens. " +
        "Configured SMTP server for emails. Set up CI/CD pipeline with GitHub Actions. Managed project on Linux server."
    },
  ]
};

const skills = {
  ru: [
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "Celery",
    "Redis",
    "PostgreSQL",
    "Docker",
    "Docker Compose",
    "Rest API",
    "Nginx",
    "Git",
    "GitHub Actions",
    "React",
    "TypeScript",
    "CI/CD",
    "Linux",
  ],
  en: [
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "Celery",
    "Redis",
    "PostgreSQL",
    "Docker",
    "Docker Compose",
    "Rest API",
    "Nginx",
    "Git",
    "GitHub Actions",
    "React",
    "TypeScript",
    "CI/CD",
    "Linux",
  ],
};

const aboutMeText = {
  ru: (
    <>
      Меня зовут Назимов Александр, мне 21 год, я родом из Санкт‑Петербурга.
      <br />
      Я backend‑разработчик со специализацией на Python.
      <br />
      <br />
      Я создаю эффективные и четко организованные системы — например, разработал собственную систему рекомендаций картин по тегам, которая не использует нейросети, а работает по классической логике — сопоставлению метаданных.
      <br />
      <br />
      Помимо backend-разработки, активно использую JavaScript, TypeScript и React для создания интерактивных и отзывчивых пользовательских интерфейсов.
      <br />
      <br />
      Также имею опыт в парсинге данных и асинхронном программировании.
      <br />
      <br />
      В open source-проектах развиваю библиотеку pywebpush: добавил асинхронную поддержку на asyncio, помог подготовить и протестировать релиз новой версии.
      <br />
      <br />
      В работе стремлюсь к чистому и эффективному коду, постоянно развиваюсь и быстро адаптируюсь к новым задачам и технологиям.
    </>
  ),
  en: (
    <>
      My name is Alexander Nazimov, I am 21 years old and I come from Saint Petersburg.
      <br />
      I am a backend developer specializing in Python.
      <br />
      <br />
      I create efficient and well-structured systems — for example, I developed my own painting recommendation system based on tags, which does not use neural networks but relies on classical metadata matching logic.
      <br />
      <br />
      Besides backend development, I actively use JavaScript, TypeScript, and React to build interactive and responsive user interfaces.
      <br />
      <br />
      I also have experience in data parsing and asynchronous programming.
      <br />
      <br />
      In open-source, I contribute to pywebpush: implemented asyncio-based support and helped prepare and test the project's latest release.
      <br />
      <br />
      I strive for clean and efficient code, continuously improve, and quickly adapt to new tasks and technologies.
    </>
  ),
};

export default function DocsPage() {
  const { lang } = useLanguage();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>{lang === "ru" ? "Обо мне" : "About Me"}</h1>
        </div>
        <div className="gap-4">
          <div className="max-w-5xl text-start text-xl md:text-3xl mb-10 mx-3 mt-2">
            <p>{aboutMeText[lang]}</p>
          </div>
        </div>

        <section className="w-full py-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            {lang === "ru" ? "Навыки" : "Skills"}
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills[lang].map((skill) => (
              <Chip key={skill} variant="shadow">
                {skill}
              </Chip>
            ))}
          </div>
        </section>

        <Image src="/IMG_0509.JPG" alt="me" width={500} className="mt-5" />

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
              {lang === "ru" ? "Опыт работы" : "Work Experience"}
            </h2>

            <div className="space-y-12">
              {experiences[lang].map((exp) => (
                <div
                  key={exp.period + exp.role}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr_2fr] gap-x-8"
                >
                  <div className="mb-2 md:mb-0">{exp.period}</div>
                  <div className="mb-2 md:mb-0">
                    <div className="font-semibold">{exp.role}</div>
                    <div>{exp.company}</div>
                  </div>
                  <p className="text-zinc-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
