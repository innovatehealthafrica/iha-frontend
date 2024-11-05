import LINKS, { LinkItem } from "./links";

const navigation: { main: LinkItem[] } = {
    main: [
        LINKS.Home,
        LINKS.About,
        {
            title: 'Programs',
            menu: [
                LINKS.VentureLab,
                LINKS.InnovationSupport,
                LINKS.SchoolOfHealthcareInnovation,
                LINKS.InnovatorsNetwork,
            ]
        },
        LINKS.News,
    ]
}

export default navigation;