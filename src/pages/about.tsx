import { title } from "@/components/primitives";
import { Image } from "@heroui/image"
import DefaultLayout from "@/layouts/default";

const experiences = [
    {
      period: "2024 – Present",
      role: "Full-Stack Developer",
      company: "ArtPerspektiva",
      description:
        "Разработал фронтенд на React, создал аналог Pinterest. " +
        "Спроектировал и реализовал систему рекомендаций картин по тегам (контентно-ориентированный подход без ИИ). " +
        "Настроил backend на Django + DRF, frontend на React, и контейнеризацию через Docker + Nginx."
    },
    {
      period: "2023 – 2024",
      role: "Backend Developer",
      company: "ForEachPartners",
      description:
        "Разрабатывал REST-API на FastAPI, интегрировал Celery + Redis для фоновых задач, обеспечил защиту JWT-токенами. " +
        "Настроил SMTP-сервер для отправки писем. Настроил CI/CD Pipeline через GitHub Actions. Управлял проектом на Linux-сервере."
    },
  ];
  
export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>Обо мне</h1>
        </div>
        <div className="gap-4">
          <div className="max-w-5xl text-start text-3xl mb-5">
            <p>Меня зовут Назимов Александр, мне 21 год, я родом из Санкт‑Петербурга.
             <br />Я backend‑разработчик со специализацией на Python.
             <br />
             <br />
             Я создаю эффективные и четко организованные системы — например, разработал собственную систему рекомендаций картин по тегам, которая не использует нейросети, а работает по классической логике — сопоставлению метаданных. 
             <br />
             <br />Каждый тег — это ключевая характеристика изображения, создающая точную картину предпочтений пользователя. 
             <br />Такая схема — вариант контентно‑ориентированной системы рекомендаций, где похожие объекты предлагаются на основе совпадения атрибутов.
             <br />
             <br />Помимо backend-разработки, активно использую JavaScript, TypeScript и React для создания интерактивных и отзывчивых пользовательских интерфейсов. 
             <br />Также имею значительный опыт в парсинге данных и асинхронном программировании. 
             <br />В работе стремлюсь к чистому и эффективному коду, постоянно развиваюсь и быстро адаптируюсь к новым задачам и технологиям.</p>
          </div>
        </div>
        
        <Image src="/IMG_0509.JPG" alt="me" width={500} />
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10">
              Опыт работы
            </h2>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <div
                  key={exp.period + exp.role}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr_2fr] gap-x-8"
                >
                  {/* Период */}
                  <div className="mb-2 md:mb-0">
                    {exp.period}
                  </div>

                  {/* Должность и компания */}
                  <div className="mb-2 md:mb-0">
                    <div className="font-semibold">{exp.role}</div>
                    <div className="">{exp.company}</div>
                  </div>

                  {/* Описание */}
                  <p className="text-zinc-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      
    </DefaultLayout>
  );
}
