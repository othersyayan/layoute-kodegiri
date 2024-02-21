import { Box } from '@mui/material';

import MainHeader from './main-header';
import MainFooter from './main-footer';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <MainHeader />
      <Box>{children}</Box>
      <MainFooter />
    </>
  );
}
