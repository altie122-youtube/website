import { ModeToggle as ThemeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
  return (
    <header className="w-full p-2 sticky top-0 z-50 bg-linear-to-t from-transparent to-90% to-background">
      <div className="flex h-12 flex-row rounded-lg border border-sidebar-border bg-sidebar text-sidebar-foreground shadow">
        <div className="flex basis-1/2 flex-row items-center justify-start gap-4 md:basis-1/3 p-2">
          <SidebarTrigger />
          <a
            href="/"
            className="h-10 w-auto max-md:h-12 text-2xl flex items-center"
          >
            <img
              src="/icon.png"
              alt="Altie122"
              className="h-10 w-auto max-md:h-12 rounded-full pr-2"
            />
            Altie122
          </a>
        </div>
        <div className="flex basis-1/3 flex-row items-center justify-center gap-4 max-md:hidden"></div>
        <div className="flex flex-auto basis-1/2 flex-row items-center justify-end gap-2 p-2 md:basis-1/3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
