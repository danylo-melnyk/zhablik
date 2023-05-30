import { FC, ReactNode, useState } from 'react';
import { Box } from '@mui/material';

import Header from '@/components/common/layout/header';
import SideBar from '@/components/common/layout/side-bar';

import * as styles from './Page.styles';

interface PageProps {
  hasHeader: boolean;
  children: ReactNode;
}

const Page: FC<PageProps> = ({ hasHeader, children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(hasHeader);
  const handleOpenDrawer = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Box sx={styles.wrapper(hasHeader)}>
      {hasHeader && <Header onDrawerOpen={handleOpenDrawer} />}
      <SideBar isOpened={isOpened} />
      <Box sx={styles.page(isOpened)}>{children}</Box>
    </Box>
  );
};

export default Page;
