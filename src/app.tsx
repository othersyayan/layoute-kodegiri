import 'src/global.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ----------------------------------------------------------------------

import ThemeProvider from './theme';

import Router from './routes';

import { useScrollToTop } from './hooks/use-scroll-to-top';

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
