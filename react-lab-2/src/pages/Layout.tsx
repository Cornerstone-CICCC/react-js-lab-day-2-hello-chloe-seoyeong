import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/contexts/theme/useTheme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { isDark, setIsDark } = useTheme();
  const handleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <main
      className={cn([
        isDark ? "bg-foreground" : "bg-background",
        "grid place-items-center h-dvh",
      ])}
    >
      <div className="min-w-md">
        <div className="text-right mb-3">
          <Button
            onClick={handleTheme}
            size={"icon"}
            variant={isDark ? "default" : "outline"}
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
        </div>
        <Card
          className={cn([
            isDark ? "bg-foreground text-white" : "bg-background",
            "p-5",
          ])}
        >
          <Outlet />
        </Card>
      </div>
    </main>
  );
};

export default Layout;
