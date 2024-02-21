import { Box, Button, Container, Stack, Grid, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const POPULAR_REWARDS = [
  {
    point: 250,
    company: 'Starbucks',
    title: 'Monday Mood Booster Starbucks',
    logo: '/src/assets/company/starbuck.png',
    banner: '/src/assets/banner-rewards-starbuck.png',
  },
  {
    point: 172,
    company: 'KFC',
    title: 'KFC Value Serbu',
    logo: '/src/assets/company/kfc.png',
    banner: '/src/assets/banner-rewards-kfc.png',
  },
  {
    point: 104,
    company: 'Segari',
    title: 'Poromo PASTISEGAR',
    logo: '/src/assets/company/segari.png',
    banner: '/src/assets/banner-rewards-segari.png',
  },
  {
    point: 53,
    company: 'Domino`s Pizza',
    title: 'Domino`s: All i want for Christmas',
    logo: '/src/assets/company/dominos.png',
    banner: '/src/assets/banner-rewards-dominos.png',
  },
  {
    point: 57,
    company: 'HokBen',
    title: 'HokBen: Pay Day',
    logo: '/src/assets/company/hokben.png',
    banner: '/src/assets/banner-rewards-hokben.png',
  },
  {
    point: 104,
    company: 'Paper Lunch',
    title: 'SENIN HEMAT',
    logo: '/src/assets/company/paper_lunch.png',
    banner: '/src/assets/banner-rewards-paper-lunch.png',
  },
  {
    point: 74,
    company: 'Matahari',
    title: 'Weekend SALE!',
    logo: '/src/assets/company/matahari.png',
    banner: '/src/assets/banner-rewards-matahari.png',
  },
  {
    point: 87,
    company: 'Kopi Kenangan',
    title: 'HARMANAS',
    logo: '/src/assets/company/kopi_kenangan.png',
    banner: '/src/assets/banner-rewards-kopi-kenangan.png',
  },
];

export default function HomePopularRewards() {
  return (
    <Box
      component="div"
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      <Container>
        <Stack direction="column" spacing={4} sx={{ mb: 6 }}>
          <Box>
            <Typography variant="h5" sx={{ color: '#272A2D', fontWeight: 'bold' }} gutterBottom>
              Popular Rewards
            </Typography>
            <Typography variant="body1" sx={{ color: '#959595' }}>
              Explore our latest popular rewards!
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} component="div">
            <Box>
              <Button
                variant="contained"
                sx={{ textTransform: 'capitalize', borderRadius: (theme) => theme.spacing(10) }}
              >
                All
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  textTransform: 'capitalize',
                  borderRadius: (theme) => theme.spacing(10),
                  color: '#232323',
                }}
                startIcon={
                  <Box component="img" src="/src/assets/burger-1.svg" alt="company_logo" />
                }
              >
                Food
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  textTransform: 'capitalize',
                  borderRadius: (theme) => theme.spacing(10),
                  color: '#232323',
                }}
                startIcon={
                  <Box component="img" src="/src/assets/groceries-1.svg" alt="company_logo" />
                }
              >
                Groceries
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  textTransform: 'capitalize',
                  borderRadius: (theme) => theme.spacing(10),
                  color: '#232323',
                }}
                startIcon={<Box component="img" src="/src/assets/drink-1.svg" alt="company_logo" />}
              >
                Beverages
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Grid container spacing={3}>
          {POPULAR_REWARDS.map((v, i) => (
            <Grid item key={i} xs={6} md={3}>
              <Box component="img" src={v.banner} alt={v.company} sx={{ width: '100%', mb: 1 }} />
              <Box sx={{ display: 'flex', direction: 'row', gap: 1, alignItems: 'center', mb: 1 }}>
                <Box component="img" src={v.logo} alt={v.company + v.logo} />
                <Typography variant="body1" sx={{ color: '#272A2D' }}>
                  {v.company}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: '#272A2D',
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                  mb: 1,
                }}
              >
                {v.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#979797',
                  mb: 0.5,
                }}
              >
                Point Earned
              </Typography>
              <Box sx={{ display: 'flex', direction: 'row', gap: 1, alignItems: 'center', mb: 1 }}>
                <Box component="img" src="/src/assets/point.svg" alt="point_logo" />
                <Typography variant="body1" sx={{ color: '#272A2D' }}>
                  {v.point}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
