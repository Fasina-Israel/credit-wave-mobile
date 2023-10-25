import React from 'react';
import LandingPageBackground from '../../../components/LandingPage/LandingPageBackground';
import {LandingPageObject} from '../../../components/LandingPage/LandingPageObject';

const LandingPage3 = ({navigation}) => {
  return (
    <LandingPageBackground
      page={'LandingPage4'}
      skippedPage={'LandingPage4'}
      LandingPageObject={LandingPageObject[1]}
      nav={navigation}
    />
  );
};

export default LandingPage3;
