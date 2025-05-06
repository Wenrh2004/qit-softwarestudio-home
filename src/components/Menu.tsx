import * as React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// 关于我们的子菜单项
const aboutItems = [
  {
    title: "软件开发工作室",
    href: "/software",
    description: "立足于云原生时代，专注软件开发系统性解决方案",
  },
  {
    title: "数字媒体工作室",
    href: "#about",
    description: "致力于数字媒体技术的创新和应用，提供高质量的数字媒体解决方案",
  },
  {
    title: "算法工作室",
    href: "#about",
    description: "致力于算法技术的创新和应用，助力学校赛事与科研工作",
  },
];

// 团队优势项
const advantageItems = [
  {
    title: "技术实力",
    href: "#advantages",
    description: "拥有扎实的技术基础和丰富的项目经验",
  },
  {
    title: "创新能力",
    href: "#advantages",
    description: "不断探索新技术，追求创新解决方案",
  },
  {
    title: "团队协作",
    href: "#advantages",
    description: "高效的团队协作能力，确保项目顺利完成",
  },
];

export function Menu() {
  return (
    <div className="flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>关于我们</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {aboutItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>团队优势</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {advantageItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#projects" className={navigationMenuTriggerStyle()}>
                项目展示
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#contact" className={navigationMenuTriggerStyle()}>
                联系我们
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ModeToggle />
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="mb-2 mt-4 text-lg font-medium truncate">{title}</div>
          <p className="text-sm leading-tight text-muted-foreground line-clamp-3 overflow-hidden">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
