import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { useNavigate } from 'react-router-dom';

import {
  Box,
  Stack,
  Button,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { paths } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function SignInPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    console.log(email, password);
  };

  return (
    <>
      <Helmet>
        <title>Sign In - Layoute</title>
      </Helmet>

      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 365, textAlign: 'center' }}
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
          Let’s sign You in.
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#9A9A9A', mb: (theme) => `${theme.spacing(2)} !important` }}
        >
          Hey there, fabulous! Ready to kick back and explore? Just a quick sign-in away from
          unlocking a world of fun.
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
          disabled={email === '' || password === ''}
          fullWidth
          size="large"
          sx={{ textTransform: 'capitalize' }}
          onClick={handleSubmit}
        >
          Sign In
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
            Haven’t registered yet?
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
            onClick={() => navigate(paths.auth.register)}
          >
            Register
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
