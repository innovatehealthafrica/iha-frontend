export interface LinkItem {
  title: string;
  href?: string;
  description?: string;
  menu?: LinkItem[];
}

const LINKS = {
  Home: {
    title: "Home",
    href: "/",
  },
  About: {
    title: "About",
    href: "/about",
  },
  AHIF2025: {
    title: "AHIF 2025",
    href: "/ahif-2025",
  },
  News: {
    title: "News",
    href: "/news",
  },
  Portfolio: {
    title: "Portfolio",
    href: "/portfolio",
  },
  Careers: {
    title: "Work with us",
    href: "/careers",
  },
  VentureLab: {
    title: "Programs & Projects",
    href: "/programs",
    description:
      "At Innovate Health Africa, we drive impactful programs and projects aimed.",
  },
  InnovationSupport: {
    title: "Research",
    href: "#",
    description:
      "Our research initiatives explore critical health issues, assess emerging trends,...",
  },
  SchoolOfHealthcareInnovation: {
    title: "Partnership",
    href: "/partnership",
    description:
      "We build strong partnerships with governments, non-profits, private sector.",
  },
  InnovatorsNetwork: {
    title: "Proucts & Tools",
    href: "#",
    description:
      "Innovate Health Africa develops and deploys cutting-edge digital health.",
  },
};

export default LINKS;
