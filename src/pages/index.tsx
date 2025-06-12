import { Card, CardHeader } from "@heroui/card";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout> 
      <div className="grid grid-cols-12 gap-2 w-full h-full p-3 ">
        <Card className="col-span-8 font-sans row-span-2 flex flex-col p-6 border-none bg-transparent">
          <CardHeader className="flex flex-col items-start">
            <h1 className="text-6xl md:text-9xl mb-2">Меня зовут Александр.</h1>
            <span className="text-4xl text-s mt-2">
              Я Python Backend разработчик, но как видите Frontend тоже умею.
            </span>
          </CardHeader>
        </Card>
        
        <Card
          isFooterBlurred
          className="border-none col-span-4 row-span-1 bg-cover bg-center"
          radius="lg"
          style={{
            backgroundImage: "url('https://i.pinimg.com/originals/bf/36/76/bf3676d6107b8953decfb33ad16ebf9b.gif')",
          }}
        >
        </Card>
        <Card className="border-none bg-zinc-900  col-span-4" radius="lg">
        </Card>
      </div>
    </DefaultLayout>
  );
}