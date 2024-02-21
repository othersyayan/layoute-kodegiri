import { Box, Button, Container, Stack, Typography } from '@mui/material';

import Iconify from './iconify';

// ----------------------------------------------------------------------

export default function HomeCTADownload() {
  return (
    <Box
      component="div"
      sx={{
        py: { xs: 4, md: 6, lg: 8 },
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: 'url(/src/assets/banner-cta-download.png)',
        color: 'white',
      }}
    >
      <Container>
        <Stack
          direction="column"
          spacing={2}
          sx={{ color: 'white', width: { xs: '100%', md: '50%', lg: '30%' } }}
        >
          <Box
            component="img"
            src="/src/assets/company-logo-white.png"
            alt="company_logo_white"
            sx={{ maxWidth: 125, mb: (theme) => `${theme.spacing(4)} !important` }}
          />

          <Typography component="p" variant="h4" sx={{ fontWeight: 'bold' }}>
            Get Instant Access: <br />
            Download Now!
          </Typography>

          <Typography
            variant="body1"
            sx={{ lineHeight: '26px', opacity: 0.68, mb: `16px !important` }}
          >
            Download our Loyauté now to unlock exclusive promotions and explore exciting features
          </Typography>

          <Box display="flex" alignItems="center" flexDirection="row" gap={2}>
            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: 'capitalize',
                color: (theme) => theme.palette.primary.main,
                borderRadius: '50px',
                backgroundColor: (theme) => theme.palette.common.white,
                '&:hover': {
                  color: 'white',
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
