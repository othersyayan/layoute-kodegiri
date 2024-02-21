import { Helmet } from 'react-helmet-async';

import HomeCTADownload from '../components/home-cta-download';
import HomePopularRewards from '../components/home-popular-rewards';
import HomePopularMerchant from '../components/home-popular-merchant';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Home - Loyaute</title>
      </Helmet>

      <HomePopularMerchant />

      <HomePopularRewards />

      <HomeCTADownload />
    </>
  );
}
