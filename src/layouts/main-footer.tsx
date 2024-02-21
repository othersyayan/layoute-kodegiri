import { useNavigate } from 'react-router-dom';

import { Box, Grid, Stack, Divider, Container, Typography, IconButton } from '@mui/material';

import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import FacebookRounded from '@mui/icons-material/FacebookRounded';

import { paths } from '../routes/paths';

// ----------------------------------------------------------------------

export default function MainFooter() {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        position: 'relative',
        bgcolor: '#0A142F',
        color: 'white',
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Box
              component="img"
              src="/src/assets/company-logo-white.png"
              alt="company_logo_white"
              sx={{ maxWidth: 150 }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack direction="column" component="div" spacing={3.5}>
              <Typography
                variant="body1"
                sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              >
                Quick Links
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  width: 'fit-content',
                  color: 'rgba(255,255,255,0.68)',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => navigate(paths.dashboard.home)}
              >
                Home
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  width: 'fit-content',
                  color: 'rgba(255,255,255,0.68)',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => navigate('/history')}
              >
                History
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  width: 'fit-content',
                  color: 'rgba(255,255,255,0.68)',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => navigate('/inbox')}
              >
                Inbox
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  width: 'fit-content',
                  color: 'rgba(255,255,255,0.68)',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => navigate('/profile')}
              >
                Profile
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack direction="column" component="div" spacing={3.5}>
              <Typography
                variant="body1"
                sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              >
                Categories
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  width: 'fit-content',
                  color: 'rgba(255,255,255,0.68)',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Latests Promo
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  width: 'fit-content',
                  color: 'rgba(255,255,255,0.68)',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Popular Merchant
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  width: 'fit-content',
                  color: 'rgba(255,255,255,0.68)',
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Popular Rewards
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack direction="column" component="div" spacing={3.5}>
              <Typography
                variant="body1"
                sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              >
                Download Apps
              </Typography>

              <Box sx={{ display: 'flex', direction: 'row', gap: 2 }}>
                <Box
                  component="img"
                  src="/src/assets/google-play.png"
                  alt="company_logo_white"
                  sx={{
                    maxWidth: 100,
                    cursor: 'pointer',
                    transition: (theme) => theme.transitions.create('all'),
                    '&:hover': {
                      transform: 'scale(0.9)',
                    },
                  }}
                />

                <Box
                  component="img"
                  src="/src/assets/app-store.png"
                  alt="company_logo_white"
                  sx={{
                    maxWidth: 100,
                    cursor: 'pointer',
                    transition: (theme) => theme.transitions.create('all'),
                    '&:hover': {
                      transform: 'scale(0.9)',
                    },
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.25)', mb: 2, mt: 4 }} />

        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
          <Box>
            <IconButton
              size="small"
              sx={{
                color: 'white',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: 'white',
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: 'white',
              }}
            >
              <FacebookRounded />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.68)',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.68)',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Terms of Service
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.68)',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Code of Conduct
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
