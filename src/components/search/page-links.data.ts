import { routes } from '@/config/routes';
import { DUMMY_ID } from '@/config/constants';

// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
  // label start
  {
    name: 'Home',
  },
  // label end
  // label start
  {
    name: 'Pages',
  },
  // label end
  {
    name: 'Profile',
    href: routes.profile,
  },
  {
    name: 'Welcome',
    href: routes.welcome,
  },
  {
    name: 'Coming soon',
    href: routes.comingSoon,
  },
  {
    name: 'Access Denied',
    href: routes.accessDenied,
  },
  {
    name: 'Not Found',
    href: routes.notFound,
  },
  {
    name: 'Maintenance',
    href: routes.maintenance,
  },
  {
    name: 'Blank',
    href: routes.blank,
  },
];
