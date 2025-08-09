import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link as HerouiLink } from "@heroui/link";
import { Tab, Tabs } from "@heroui/tabs";
import { ThemeSwitch } from "./theme-switch";
import { useLocation, useNavigate } from "react-router-dom";
import SvgLogo from "./icons/Logo";
import { LanguageSwitch } from "./lang-switch";
import { useLanguage } from "@/context/LanguageContext";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const routes = {
  ru: [
    { key: "/", title: "Главная" },
    { key: "/about", title: "Обо мне" },
    { key: "/projects", title: "Проекты" },
    { key: "/contacts", title: "Контакты" },
  ],
  en: [
    { key: "/", title: "Home" },
    { key: "/about", title: "About me" },
    { key: "/projects", title: "Projects" },
    { key: "/contacts", title: "Contacts" },
  ],
};

export default function NavbarBlurred() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const menuRoutes = routes[lang];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
      {/* гамбургер + логотип */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? (lang === "ru" ? "Закрыть меню" : "Close menu") : (lang === "ru" ? "Открыть меню" : "Open menu")}
          className="sm:hidden"
        />
        <NavbarBrand>
          <SvgLogo className="fill-foreground" />
        </NavbarBrand>
      </NavbarContent>

      {/* табы (desktop) */}
      <NavbarContent className="hidden sm:flex" justify="center">
        <Tabs
          aria-label={lang === "ru" ? "Навигация" : "Navigation"}
          variant="bordered"
          selectedKey={pathname}
          onSelectionChange={(key) => {
            navigate({ pathname: String(key) });
          }}
        >
          {menuRoutes.map((r) => (
            <Tab key={r.key} value={r.key} title={r.title} />
          ))}
        </Tabs>
      </NavbarContent>

      {/* переключатель темы и языка */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* мобильное меню */}
      <NavbarMenu>
        {menuRoutes.map((r) => (
          <NavbarMenuItem key={r.key}>
            <HerouiLink
              href={r.key}
              size="lg"
              color={r.key === pathname ? "primary" : "foreground"}
              onClick={(e) => {
                e.preventDefault();
                navigate(r.key);
              }}
            >
              {r.title}
            </HerouiLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
