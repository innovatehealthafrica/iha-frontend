export interface LinkItem {
    title: string;
    href?: string;
    description?: string;
    menu?: LinkItem[];
}

const LINKS = {
    Home: {
        title: 'Home',
        href: '/'
    },
    About: {
        title: 'About',
        href: '/about',
    },
    News: {
        title: 'News',
        href: '/news',
    },
    Careers: {
        title: 'Work with us',
        href: '/careers',
    },
    VentureLab: {
        title: 'Venture Lab',
        href: "/programs/venture-lab",
        description: "Turn your Idea into a market ready product with the support of our expert teams and trusted partners."
    },
    InnovationSupport: {
        title: 'Innovation Support',
        href: "/programs/innovation-support",
        description: "Access support to smartly apply innovation and technology in solving your organization's social and commercial problems."
    },
    SchoolOfHealthcareInnovation: {
        title: 'School of Healthcare Innovation',
        href: "/programs/healthcare-innovation",
        description: "Equip yourself with cutting-edge skills to lead healthcare innovation—join 1,200+ professionals who have transformed their careers with us."
    },
    InnovatorsNetwork: {
        title: "Innovator's Network",
        href: "/programs/innovators-network",
        description: "Join our network of healthcare innovators, entrepreneurs and investors."
    }
}

export default LINKS;