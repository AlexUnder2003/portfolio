import DefaultLayout from "@/layouts/default";
import { AtSign, Send } from "lucide-react";

export default function Contacts() {
  return (
    <DefaultLayout>
      <section className="flex items-center flex-col py-16">
        <div className="flex flex-row items-center gap-4 px-10 ">
              <h1>mail</h1>
              <AtSign className="w-6 h-6" />
              <a
                href="mailto:nazimov.amu@yandex.ru"
                className="text-lg font-medium hover:text-sky-300"
              >
                nazimov.amu@yandex.ru
              </a>
            </div>

            <div className="flex items-center gap-4">
              <h1>telegram</h1>
              <Send className="w-6 h-6 rotate-45" />
              <a
                href="https://t.me/nazimov_amu"
                className="text-lg font-medium hover:text-sky-300"
              >
                @nazimov_amu
              </a>
            </div>
      </section>
    </DefaultLayout>
  );
}
