import { Avatar, Box, Button, Stack, Container, Typography, IconButton } from '@mui/material';

import Iconify from '../components/iconify';

// ----------------------------------------------------------------------

export default function MainHeader() {
  return (
    <Box
      component="header"
      sx={{
        pt: 5,
        pb: 25,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: 'url(/src/assets/bg-header.png), url(/src/assets/banner-header.png)',
        color: 'white',
      }}
    >
      <Container>
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="space-between">
          <Box
            component="img"
            src="/src/assets/company-logo-white.png"
            alt="company_logo_white"
            sx={{ maxWidth: 150 }}
          />
          <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
            <Button
              size="medium"
              sx={{
                color: 'white',
                textTransform: 'capitalize',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box component="img" src="/src/assets/home.svg" alt="company_logo_white" />
              <Typography color="primary.main">Home</Typography>
            </Button>
            <Button
              size="medium"
              sx={{
                color: 'white',
                textTransform: 'capitalize',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box component="img" src="/src/assets/calendar.svg" alt="company_logo_white" />
              <Typography>History</Typography>
            </Button>
            <Button
              size="medium"
              sx={{
                color: 'white',
                textTransform: 'capitalize',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box component="img" src="/src/assets/message.svg" alt="company_logo_white" />
              <Typography>Inbox</Typography>
            </Button>
            <Button
              size="medium"
              sx={{
                color: 'white',
                textTransform: 'capitalize',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Box component="img" src="/src/assets/profile.svg" alt="company_logo_white" />
              <Typography>Profile</Typography>
            </Button>
          </Stack>
          <Box display="flex" flexDirection="row" gap={2} alignItems="center">
            <IconButton
              size="medium"
              sx={{
                color: 'white',
                mr: 2,
              }}
            >
              <Box component="img" src="/src/assets/notification.svg" alt="company_logo_white" />
            </IconButton>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body2">Good morning,</Typography>
              <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                Johan Doe
              </Typography>
            </Box>
            <Avatar
              alt="Remy Sharp"
              src="/src/assets/avatar.png"
              sx={{
                cursor: 'pointer',
                transition: (theme) => theme.transitions.create('all'),
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
          </Box>
        </Stack>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', py: 15 }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bolder' }}>
            Welcome to <span style={{ color: '#007DFC', fontWeight: 'bolder' }}>Loyauté</span>
          </Typography>

          <Typography variant="h6" component="p" sx={{ mb: `16px !important` }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </Typography>

          <Box display="flex" alignItems="center" flexDirection="row" gap={2}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: 'capitalize',
                color: (theme) => theme.palette.common.white,
                borderColor: 'white',
                borderRadius: '50px',
                background: 'transparent',
                transition: (theme) => theme.transitions.create('all'),
                '&:hover': {
                  color: 'white',
                  borderColor: 'white',
                  transform: 'scale(0.95)',
                },
              }}
              startIcon={<Iconify icon="ion:logo-google-playstore" />}
            >
              Play Store
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                textTransform: 'capitalize',
                color: (theme) => theme.palette.common.white,
                borderColor: 'white',
                borderRadius: '50px',
                background: 'transparent',
                transition: (theme) => theme.transitions.create('all'),
                '&:hover': {
                  color: 'white',
                  borderColor: 'white',
                  transform: 'scale(0.95)',
                },
              }}
              startIcon={<Iconify icon="ic:baseline-apple" />}
            >
              App Store
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
