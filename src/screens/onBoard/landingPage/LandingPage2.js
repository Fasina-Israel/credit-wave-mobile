import React from 'react';
import LandingPageBackground from '../../../components/LandingPage/LandingPageBackground';
import {LandingPageObject} from '../../../components/LandingPage/LandingPageObject';

const LandingPage2 = ({navigation}) => {
  return (
    <>
      <LandingPageBackground
        nav={navigation}
        skippedPage={'LandingPage3'}
        page={'LandingPage1'}
        LandingPageObject={LandingPageObject[0]}
      />
    </>
  );
};

export default LandingPage2;
