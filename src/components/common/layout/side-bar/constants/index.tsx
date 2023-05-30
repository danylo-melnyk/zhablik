import {
  CalendarMonth,
  ContentPaste,
  EventAvailable,
  Home,
} from '@mui/icons-material';

import FrogIcon from '@/components/common/layout/side-bar/components/frog-icon';
import { NavCardProps } from '@/components/common/layout/side-bar/components/nav-card/NavCard';

export const NAV_LINKS: NavCardProps[] = [
  {
    icon: <Home />,
    text: 'Home',
    href: '/',
  },
  {
    icon: <EventAvailable />,
    text: 'Today',
    href: '/today',
  },
  {
    icon: <CalendarMonth />,
    text: 'Calendar',
    href: '/schedule',
  },
  {
    icon: <ContentPaste />,
    text: 'Statistics',
    href: '/statistics',
  },
  {
    icon: <FrogIcon />,
    text: 'Frog Swamp',
    href: '/swamp',
  },
];
