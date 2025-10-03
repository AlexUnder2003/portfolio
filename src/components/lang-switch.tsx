import React from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageSwitch: React.FC = () => {
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "ru" ? "en" : "ru");
  };

  return (
    <button
      type="button"
      aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
      onClick={toggleLang}
      className="
        px-1
        cursor-pointer
        bg-transparent
        border-none
        rounded
        text-default-500
        hover:opacity-80
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
        select-none
        flex
        items-center
        justify-center
        mb-1
      "
      style={{ userSelect: "none" }}
    >
      <GlobalOutlined style={{ fontSize: 22, pointerEvents: "none" }} />
    </button>
  );
};
