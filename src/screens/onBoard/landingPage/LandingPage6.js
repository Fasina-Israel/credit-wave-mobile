import React from 'react';
import LandingPageBackground from '../../../components/LandingPage/LandingPageBackground';
import {LandingPageObject} from '../../../components/LandingPage/LandingPageObject';

const LandingPage6 = ({navigation}) => {
  return (
    <LandingPageBackground
      nav={navigation}
      skippedPage={'LandingPage7'}
      page={'AuthenticationPage'}
      LandingPageObject={LandingPageObject[4]}
    />
  );
};
export default LandingPage6;
