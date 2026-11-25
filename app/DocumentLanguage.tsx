"use client";

import { usePathname } from "next/navigation";
import { productLocalePaths } from "./ProductLanguageSwitcher";

export function DocumentLanguage({ children }: Readonly<{ children: React.ReactNode }>) {
  const prefix = usePathname()?.split("/")[1];
  const locale = prefix && Object.hasOwn(productLocalePaths, prefix) ? prefix : "es";
  return <html lang={locale === "pt" ? "pt-PT" : locale}>{children}</html>;
}
