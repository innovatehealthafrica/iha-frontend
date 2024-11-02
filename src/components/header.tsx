"use client";
import React, { useEffect, useState } from "react";
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
import { useToggle } from "@/hooks/useToggle";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

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

const toggleBodyScroll = (disable: boolean) => {
  if (disable) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

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

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  // Use useEffect to toggle body scroll when isToggled changes
  useEffect(() => {
    toggleBodyScroll(isToggled);

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => toggleBodyScroll(false);
  }, [isToggled]);

  // remove mobile navigation when the screen size is larger than 600px
  useEffect(() => {
    if (!isSmallScreen) setToggle(false);
  }, [isSmallScreen, setToggle]);

  return (
    <header>
      <div className="w-full max-w-screen-xl px-8 md:px-8 xl:px-0 mx-auto py-4 flex justify-between items-center">
        <div className="">
          <NextLink href={"/"}>
            <Image
              src={ihaLogo}
              alt="IHA logo"
              className="h-12 md:h-14 w-auto"
            />
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

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[80px] border-t bg-white z-50 flex flex-col p-8 transition-transform duration-300 ease-in-out md:hidden",
          {
            "translate-x-0": isToggled,
            "translate-x-full": !isToggled,
          }
        )}
      >
        <NavigationMenu className="w-full block max-w-full">
          <NavigationMenuList className="flex flex-col items-start gap-8">
            <Button
              className="rounded-full px-6 bg-primary-green hover:bg-primary-green/90 w-full mb-8"
              size="lg"
              onClick={toggle}
            >
              Work with us
            </Button>

            <NextLink
              href="/"
              className="text-base font-[400] w-full"
              onClick={toggle}
            >
              Home
            </NextLink>

            <NextLink
              href="/about"
              className="text-base font-[400] w-full"
              onClick={toggle}
            >
              About Us
            </NextLink>

            <MobileNavigationDropdown
              title="Programs"
              items={programs}
              className="w-full"
              onClick={toggle}
            />

            <MobileNavigationDropdown
              title="Portfolio"
              items={programs}
              className="w-full bg-red-300"
              onClick={toggle}
            />

            <NextLink
              href="/news"
              className="text-base font-[400] w-full bg-white"
              onClick={toggle}
            >
              News
            </NextLink>
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

function AnimatedMenuIcon({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
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

const MobileNavigationDropdown = ({
  title,
  items,
  className,
  onClick,
}: {
  title: string;
  items: { title: string; href: string; description: string }[];
  className: string;
  onClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(className, "bg-white")}>
      <button
        className="text-base font-[400] flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={cn("transition-transform", { "rotate-180": isOpen })}>
          <CaretDownIcon className="size-5" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, overflow: "visible" }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{
              height: 0,
              opacity: 0,
              overflow: "hidden",
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className=" space-y-4 ps-8"
          >
            {items.map((item) => (
              <NextLink
                key={item.title}
                href={item.href}
                className="text-base font-[400] block first-of-type:mt-4"
                onClick={onClick}
              >
                {item.title}
              </NextLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
