import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { useNavigate } from 'react-router-dom';

import {
  Box,
  Stack,
  Button,
  Typography,
  MenuItem,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { paths } from '../../routes/paths';

// ----------------------------------------------------------------------

const PHONE_CODE = [
  {
    value: '+62',
    label: '+62',
  },
  {
    value: '+60',
    label: '+60',
  },
  {
    value: '+971',
    label: '+971',
  },
];

export default function SignUpPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneCode, setPhoneCode] = useState('+62');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    const newSearchParams = new URLSearchParams({
      phone_number: phoneCode + phone,
    }).toString();

    const href = `${paths.auth.otp_verification}?${newSearchParams}`;

    navigate(href, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - Layoute</title>
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
          sx={{ maxWidth: 132, mb: (theme) => `${theme.spacing(2.5)} !important` }}
        />
        <Typography
          variant="h5"
          sx={{ fontWeight: (theme) => theme.typography.fontWeightBold, color: '#272A2D' }}
        >
          Create an account
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#9A9A9A', mb: (theme) => `${theme.spacing(2)} !important` }}
        >
          New around here? Awesome choice! <br /> Let's make it official.
        </Typography>

        <TextField
          id="email"
          type="email"
          label="Email"
          size="medium"
          variant="outlined"
          fullWidth
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
          sx={{
            '& .MuiFormLabel-root': {
              color: '#9A9A9A',
            },
          }}
        />

        <TextField
          id="name"
          type="text"
          label="Name"
          size="medium"
          variant="outlined"
          fullWidth
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          sx={{
            '& .MuiFormLabel-root': {
              color: '#9A9A9A',
            },
          }}
        />

        <TextField
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          sx={{
            '& .MuiFormLabel-root': {
              color: '#9A9A9A',
            },
          }}
          fullWidth
          size="medium"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="small"
                  sx={{
                    color: '#9A9A9A',
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />

        <TextField
          id="phone"
          type="text"
          placeholder="Phone Number"
          sx={{
            '& .MuiFormLabel-root': {
              color: '#9A9A9A',
            },
          }}
          fullWidth
          size="medium"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TextField
                  id="phone-code"
                  select
                  defaultValue="+62"
                  variant="standard"
                  sx={{
                    '& .MuiInputBase-root': {
                      color: '#9A9A9A',
                      '::before': {
                        content: 'none',
                      },
                      '::after': {
                        content: 'none',
                      },
                    },
                  }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPhoneCode(event.target.value);
                  }}
                >
                  {PHONE_CODE.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </InputAdornment>
            ),
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(event.target.value);
          }}
        />

        <Box
          sx={{
            display: 'flex',
            direction: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            width: '100%',
            mb: (theme) => `${theme.spacing(4)} !important`,
          }}
        >
          <Typography variant="body2" sx={{ color: '#9A9A9A' }}>
            Forgot password?
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
            Reset Password
          </Typography>
        </Box>

        <Button
          variant="contained"
          disabled={
            email === '' || password === '' || name === '' || phone === '' || phoneCode === ''
          }
          fullWidth
          size="large"
          sx={{ textTransform: 'capitalize' }}
          onClick={handleSubmit}
        >
          Create Account
        </Button>

        <Box
          sx={{
            display: 'flex',
            direction: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: '#9A9A9A' }}>
            Have an account?
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
            onClick={() => navigate(paths.auth.login)}
          >
            Sign In
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
