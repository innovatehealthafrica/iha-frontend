"use client";

import React, { useState } from "react";
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
import { Menu, X } from "lucide-react";
import { useToggle } from "@/hooks/useToggle";

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

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link = ({ href, ...props }: LinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink
      asChild
      active={isActive}
      className={cn("font-[400] text-base", navigationMenuTriggerStyle())}
    >
      <NextLink href={href} className="NavigationMenuLinks" {...props} />
    </NavigationMenuLink>
  );
};

export default function Header() {
  const [isToggled, toggle, setToggle] = useToggle();

  return (
    <header className="py-6">
      <div className="w-full max-w-screen-xl px-4 md:px-8 xl:px-0 mx-auto flex justify-between items-center">
        <div className="">
          <NextLink href={"/"}>
            <Image src={ihaLogo} alt="IHA logo" className="h-14 w-auto" />
            <span className="sr-only">IHA logo</span>
          </NextLink>
        </div>

        {/* Animated Menu Icon */}
        <AnimatedMenuIcon isOpen={isToggled} toggle={toggle} />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link href="#">Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="#">About Us</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-[400]">
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
              <NavigationMenuTrigger className="font-[400]">
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
              className="rounded-full px-6 bg-primary-green hover:bg-primary-green/90"
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

function AnimatedMenuIcon({ isOpen, toggle }) {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 gap-0.5 md:hidden"
      onClick={toggle}
    >
      <span
        className={cn(
          "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
          {
            "rotate-45 translate-y-0.5": isOpen,
            "-translate-y-0.5": !isOpen,
          }
        )}
      ></span>
      <span
        className={cn(
          "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
          {
            "-rotate-45 -translate-y-0.5": isOpen,
            "translate-y-0.5": !isOpen,
          }
        )}
      ></span>
    </button>
  );
}
