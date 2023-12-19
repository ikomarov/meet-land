import React, { Suspense } from 'react';
import Header from "../../components/Header/index.server";

const ContentSection = React.lazy(() => import('../../components/ContentSection/index.server'));
const Footer = React.lazy(() => import('../../components/Footer/index.server'));
const FeaturesAndBenefits = React.lazy(() => import('../../components/FeaturesAndBenefits/index.server'));
const SuccessStories = React.lazy(() => import('../../components/SuccessStories/index.server'));
const HowItWorks = React.lazy(() => import('../../components/HowItWorks/index.server'));

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Suspense>
        <FeaturesAndBenefits />
      </Suspense>
      <Suspense>
        <SuccessStories />
      </Suspense>
      <Suspense>
        <HowItWorks />
      </Suspense>
      <Suspense>
        <ContentSection id="section3" title="Контакты">
          <p>Содержимое контактов...</p>
        </ContentSection>
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LandingPage;
