"use client";

import React from "react";
import ihaLogo from "@/assets/logo/iha-black.png";
import Image from "next/image";
import NextLink from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Venture Lab",
    href: "/programs/venture-lab",
    description:
      "Turn your Idea into a market ready product with the support of our expert teams and trusted partners.",
  },
  {
    title: "Innovation Support",
    href: "/programs/innovation-support",
    description:
      "Access support to smartly apply innovation and technology in solving your organization’s social and commercial problems.",
  },
  {
    title: "School of Healthcare Innovation",
    href: "/programs/healthcare-innovation",
    description:
      "Equip yourself with cutting-edge skills to lead healthcare innovation—join 1,200+ professionals who have transformed their careers with us.",
  },
  {
    title: "Innovator’s Network",
    href: "/programs/innovators-network",
    description:
      "Join our network of healthcare innovators, entrepreneurs and investors.",
  },
];

const Link = ({ href, ...props }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink
      asChild
      active={isActive}
      className={navigationMenuTriggerStyle()}
    >
      <NextLink
        href={href}
        className="NavigationMenuLink font-[400] text-lg"
        {...props}
      />
    </NavigationMenuLink>
  );
};

export default function Header() {
  return (
    <header className="py-6">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between">
        <div>
          <NextLink href={"/"}>
            <Image src={ihaLogo} alt="IHA logo" className="h-14 w-auto" />
            <span className="sr-only">IHA logo</span>
          </NextLink>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link href="#">Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#">About Us</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[400] text-lg">
                Programs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {programs.map((program) => (
                    <ListItem
                      key={program.title}
                      title={program.title}
                      href={program.href}
                    >
                      {program.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[400] text-lg">
                Portfolio
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {programs.map((program) => (
                    <ListItem
                      key={program.title}
                      title={program.title}
                      href={program.href}
                    >
                      {program.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#">News</Link>
            </NavigationMenuItem>

            <Button
              className="rounded-full px-6 bg-primary-green hover:bg-primary-green/90 text-lg"
              size="lg"
            >
              Work with us
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
