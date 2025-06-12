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

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavbarBlurred() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const routes = [
    { key: "/",         title: "Главная"  },
    { key: "/about",    title: "Обо мне"  },
    { key: "/projects", title: "Проекты"  },
    { key: "/contacts", title: "Контакты" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {/* гамбургер + логотип */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand><AcmeLogo /></NavbarBrand>
      </NavbarContent>

      {/* табы (desktop) */}
      <NavbarContent className="hidden sm:flex" justify="center">
        <Tabs
          aria-label="Навигация"
          variant="bordered"
          selectedKey={pathname}
          onSelectionChange={(key) => {
            navigate({ pathname: String(key) });
          }}
        >
          {routes.map((r) => (
            <Tab
              key={r.key}
              value={r.key}
              title={r.title}
            />
          ))}
        </Tabs>
      </NavbarContent>

      {/* переключатель темы */}
      <NavbarContent justify="end">
        <NavbarItem><ThemeSwitch /></NavbarItem>
      </NavbarContent>

      {/* мобильное меню */}
      <NavbarMenu>
        {routes.map((r) => (
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
