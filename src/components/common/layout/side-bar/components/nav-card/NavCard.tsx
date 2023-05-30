import { FC, ReactNode } from 'react';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as styles from './NavCard.styles';

export interface NavCardProps {
  icon: ReactNode;
  text: string;
  href: string;
}

const NavCard: FC<NavCardProps> = ({ icon, text, href }) => {
  const { asPath } = useRouter();
  return (
    <Button sx={styles.wrapper(asPath === href)} href={href} component={Link}>
      {icon}
      <Typography>{text}</Typography>
    </Button>
  );
};

export default NavCard;
