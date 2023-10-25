import React from 'react';
import LandingPageBackground from '../../../components/LandingPage/LandingPageBackground';
import {LandingPageObject} from '../../../components/LandingPage/LandingPageObject';

const LandingPage5 = ({navigation}) => {
  return (
    <LandingPageBackground
      nav={navigation}
      skippedPage={'LandingPage6'}
      page={'AuthenticationPage'}
      LandingPageObject={LandingPageObject[3]}
    />
  );
};
export default LandingPage5;
