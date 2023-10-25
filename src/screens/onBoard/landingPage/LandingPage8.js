import React from 'react';
import LandingPageBackground from '../../../components/LandingPage/LandingPageBackground';
import {LandingPageObject} from '../../../components/LandingPage/LandingPageObject';

const LandingPage8 = ({navigation}) => {
  return (
    <LandingPageBackground
      nav={navigation}
      skippedPage={'LandingPage9'}
      page={'AuthenticationPage'}
      LandingPageObject={LandingPageObject[6]}
    />
  );
};
export default LandingPage8;
