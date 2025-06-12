import { Card,  CardHeader } from "@heroui/card";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex-1 h-full grid grid-cols-1 grid-rows-3 md:grid-cols-12 md:grid-rows-1 gap-2 w-full p-3">
        {/* Текстовый блок-карточка с размытым прозрачным фоном */}
        <Card
          className="order-1 md:order-1 md:col-span-8 row-span-1 flex flex-col p-6 bg-white/10 backdrop-blur-md border border-white/10"
          radius="lg"
        >
          {/* добавили items-start и text-left */}
          <CardHeader className="flex flex-col items-start text-left">
            <h1 className="text-4xl xl:text-9xl mb-2">
              Меня зовут Александр.
            </h1>
            <span className="text-2xl xl:text-4xl mt-2">
              Я Python Backend-разработчик, но, как видите, Frontend тоже умею.
            </span>
          </CardHeader>
        </Card>

        {/* Карточки: на мобильных под текстом (rows 2-3), на десктопе — справа в одну колонку */}
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