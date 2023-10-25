import React from 'react';
import LandingPageBackground from '../../../components/LandingPage/LandingPageBackground';
import {LandingPageObject} from '../../../components/LandingPage/LandingPageObject';

const LandingPage7 = ({navigation}) => {
  return (
    <LandingPageBackground
      nav={navigation}
      skippedPage={'LandingPage8'}
      page={'AuthenticationPage'}
      LandingPageObject={LandingPageObject[5]}
    />
  );
};
export default LandingPage7;
