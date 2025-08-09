import { Card, CardHeader } from "@heroui/card";
import DefaultLayout from "@/layouts/default";
import { useLanguage } from "@/context/LanguageContext"; // путь подставь свой

export default function IndexPage() {
  const { lang } = useLanguage(); // ← теперь ты берешь язык отсюда

  return (
    <DefaultLayout>
      <div className="flex-1 h-full grid grid-cols-1 grid-rows-3 md:grid-cols-12 md:grid-rows-1 gap-2 w-full p-3">
        <Card
          className="order-1 md:order-1 md:col-span-8 row-span-1 flex flex-col p-6 bg-white/10 backdrop-blur-md border border-white/10"
          radius="lg"
        >
          <CardHeader className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-6xl xl:text-9xl mb-2 leading-tight">
              {lang === "ru" ? "Меня зовут Александр." : "My name is Alexander."}
            </h1>

            <p className="text-2xl xl:text-5xl xl:ml-1 mt-2">
              {lang === "ru"
                ? "Я Python Backend-разработчик, но, как видите, Frontend тоже умею."
                : "I'm a Python Backend Developer, but as you can see - I also do Frontend."}
            </p>
          </CardHeader>
        </Card>

        <div className="order-2 md:order-2 md:col-span-4 md:row-span-1 row-span-2 flex flex-col space-y-2">
          <Card
            isFooterBlurred
            className="h-full border-none bg-cover bg-center"
            radius="lg"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/bf/36/76/bf3676d6107b8953decfb33ad16ebf9b.gif')",
            }}
          />

          <Card className="h-full border-none bg-zinc-900" radius="lg" />
        </div>
      </div>
    </DefaultLayout>
  );
}
