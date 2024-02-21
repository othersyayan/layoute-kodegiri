import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { useSearchParams, useNavigate } from 'react-router-dom';

import { Box, Stack, Button, Typography } from '@mui/material';

import { MuiOtpInput } from 'mui-one-time-password-input';

import { paths } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function OTPVerificationPage() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const phone_number = searchParams.get('phone_number');

  const [otp, setOtp] = useState('');

  const handleChangeOtp = (newValue: string) => {
    setOtp(newValue);
  };

  return (
    <>
      <Helmet>
        <title>OTP Verification - Loyaute</title>
      </Helmet>

      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ minWidth: 365, maxWidth: 370, textAlign: 'center' }}
      >
        <Box
          component="img"
          src="/src/assets/company-logo.png"
          alt="company_logo"
          loading="lazy"
          sx={{ maxWidth: 132, mb: (theme) => `${theme.spacing(2.5)} !important` }}
        />

        <Typography
          variant="h5"
          sx={{ fontWeight: (theme) => theme.typography.fontWeightBold, color: '#272A2D' }}
        >
          Enter OTP Verification
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: '#9A9A9A', mb: (theme) => `${theme.spacing(2)} !important` }}
        >
          We’ve sent an OTP code to <span style={{ color: '#232323' }}>{phone_number}</span>
        </Typography>

        <MuiOtpInput
          value={otp}
          onChange={handleChangeOtp}
          length={4}
          autoFocus
          sx={{ maxWidth: '90%' }}
          validateChar={(val) => !isNaN(Number(val))}
        />

        <Box
          sx={{
            display: 'flex',
            direction: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            mb: (theme) => `${theme.spacing(3)} !important`,
          }}
        >
          <Typography variant="body2" sx={{ color: '#9A9A9A' }}>
            Didn’t receive code?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Resend Code
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ textTransform: 'capitalize' }}
          disabled={otp === ''}
          onClick={() => navigate(paths.dashboard.home)}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}
