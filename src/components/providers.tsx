import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Prodviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider className="flex h-screen w-screen flex-col">
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
