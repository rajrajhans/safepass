import React from 'react';
import AnimationRevealPage from './helpers/HomeComponents/AnimationRevealPage';
import HeroComponent from './helpers/HomeComponents/HeroComponent';
import FeaturesTwoCol from './helpers/HomeComponents/FeaturesTwoCol';
import CodeIllustration from '../components/helpers/HomeComponents/code_illus.svg';
import SecurityIllus from '../components/helpers/HomeComponents/securityIllus.svg';

const Home = () => {
  return (
    <AnimationRevealPage>
      <HeroComponent />
      <FeaturesTwoCol
        subheading="ReactJS, Firebase"
        heading="Open Source"
        imageSrc={CodeIllustration}
        buttonRounded={false}
        description="SafePass is developed using ReactJS and Firebase. The source code
              is open on GitHub. You can completely customize it to your needs!"
        primaryButtonText="GitHub Repo"
        primaryButtonUrl="https://github.com/rajrajhans/safepass"
      />
      <FeaturesTwoCol
        subheading="One Way Encrytion before saving"
        heading="Secure"
        description={
          'Before saving your passwords to the cloud, SafePass encrypts your data using the SHA256 Hashing Algorithm. This ensures no one except you can read your data in plaintext. To know more about the Encryption Library used, click the button below'
        }
        imageSrc={SecurityIllus}
        primaryButtonText="Learn More"
        primaryButtonUrl="https://github.com/bitwiseshiftleft/sjcl"
        buttonRounded={false}
        textOnLeft={false}
      />
      >
    </AnimationRevealPage>
  );
};

export default Home;
