import React from "react";
import "./BookSection.css";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Section, 
  Animation 
} from "gatsby-theme-portfolio-minimal";
const buyBookUrl = "https://www.amazon.com/gp/aw/d/B0976M6MF5/ref=tmm_pap_swatch_0?ie=UTF8&qid=1624368659&sr=8-3";
const imageSize = {
  maxWidth: '400px',
  maxHeight: '600px' // Adjust the width as needed
};

export default function IndexPage() {
  return (
    <>
      <Seo title="Family Reunite Network TJ Scott Books" />
      <Page useSplashScreenAnimation>
      <HeroSection sectionId="hero" />

        <AboutSection sectionId="about" heading="This is the story of T.J Scott" />
        <Animation type="fadeUp"> 
        <ProjectsSection>  </ProjectsSection>
            </Animation>
            <ContactSection sectionId="contact" heading="Contact US" />
           
      </Page>
      
    </>
  );
}
