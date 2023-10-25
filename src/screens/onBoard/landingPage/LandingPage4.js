import React from 'react';
import LandingPageBackground from '../../../components/LandingPage/LandingPageBackground';
import {LandingPageObject} from '../../../components/LandingPage/LandingPageObject';

const LandingPage4 = ({navigation}) => {
  return (
    <LandingPageBackground
      nav={navigation}
      skippedPage={'LandingPage5'}
      page={'AuthenticationPage'}
      LandingPageObject={LandingPageObject[2]}
    />
  );
};
export default LandingPage4;
