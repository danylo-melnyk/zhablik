import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/utils/MergeSxStylesUtil';

import * as styles from './Tag.styles';

interface TagProps {
  icon?: ReactNode;
  text: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const Tag: FC<TagProps> = ({ sx, icon, text, onClick }) => {
  return (
    <Box sx={mergeSx(styles.wrapper(!!onClick), sx)} onClick={onClick}>
      {icon}
      <Typography>{text}</Typography>
    </Box>
  );
};

export default Tag;
