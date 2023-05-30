import { FC } from 'react';
import { Drawer } from '@mui/material';

import NavCard from '@/components/common/layout/side-bar/components/nav-card';
import { NAV_LINKS } from '@/components/common/layout/side-bar/constants';

import * as styles from './SideBar.styles';

const SideBar: FC<{ isOpened: boolean }> = ({ isOpened }) => {
  return (
    <Drawer
      sx={styles.wrapper}
      variant="persistent"
      anchor="left"
      open={isOpened}
    >
      {NAV_LINKS.map((navLink, index) => (
        <NavCard key={index} {...navLink} />
      ))}
    </Drawer>
  );
};

export default SideBar;
