import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { paths } from './paths';
import AuthLayout from '../layouts/auth';
import DashboardLayout from '../layouts/dashboard';

// ----------------------------------------------------------------------

// AUTH
const SignInPage = lazy(() => import('../pages/auth/sign-in'));
const SignUpPage = lazy(() => import('../pages/auth/sign-up'));
const OTPVerificationPage = lazy(() => import('../pages/auth/otp-verification'));

// DASHBOARD
const Homepage = lazy(() => import('../pages/home'));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={paths.auth.login} replace />,
    },
    {
      path: 'auth',
      children: [
        {
          path: 'sign-in',
          element: (
            <AuthLayout>
              <SignInPage />
            </AuthLayout>
          ),
        },
        {
          path: 'sign-up',
          element: (
            <AuthLayout>
              <SignUpPage />
            </AuthLayout>
          ),
        },
        {
          path: 'otp-verification',
          element: (
            <AuthLayout>
              <OTPVerificationPage />
            </AuthLayout>
          ),
        },
      ],
    },
    {
      path: 'home',
      element: (
        <DashboardLayout>
          <Homepage />
        </DashboardLayout>
      ),
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
