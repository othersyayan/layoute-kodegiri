import { Box, Container, Stack, Typography, Grid } from '@mui/material';

// ----------------------------------------------------------------------

const POPULAR_MERCHANT = [
  {
    company: 'Pizza Hut',
    banner: '/src/assets/company/large-pizza.png',
  },
  {
    company: 'Starbucks',
    banner: '/src/assets/company/large-starbuck.png',
  },
  {
    company: 'McDonald’s',
    banner: '/src/assets/company/large-mcdonald.png',
  },
  {
    company: 'Domino’s Pizza',
    banner: '/src/assets/company/large-dominos.png',
  },
  {
    company: 'KFC',
    banner: '/src/assets/company/large-kfc.png',
  },
  {
    company: 'HokBen',
    banner: '/src/assets/company/large-hokben.png',
  },
];

export default function HomePopularMerchant() {
  return (
    <Box
      component="div"
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      <Container>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 4 }}
        >
          <Typography variant="h5" sx={{ color: '#272A2D', fontWeight: 'bold' }} gutterBottom>
            Popular Merchant
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'primary.main',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            View more
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {POPULAR_MERCHANT.map((v, i) => (
            <Grid item key={i} xs={3} sm={4} md={2}>
              <Box component="img" src={v.banner} alt={v.company} sx={{ width: '100%', mb: 1 }} />
              <Typography variant="h6" sx={{ color: '#272A2D', textAlign: 'center' }}>
                {v.company}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
