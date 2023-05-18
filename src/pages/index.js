import React from "react";
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
export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Blogs" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <Animation type="fadeUp"> 
                <Section heading="This is a brand new section.">
                  <h2>Book Title</h2>
      <p>Description of the book goes here.</p>
      <a href={buyBookUrl} target="_blank" rel="noopener noreferrer">
        Buy Now
      </a>
                </Section>
            </Animation>
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
