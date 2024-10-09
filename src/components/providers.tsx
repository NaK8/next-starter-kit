"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Prodviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <NextUIProvider className="flex h-screen w-screen flex-col">
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
