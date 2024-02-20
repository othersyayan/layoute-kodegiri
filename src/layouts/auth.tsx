import { Stack } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Stack
      component="main"
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </Stack>
  );
}
