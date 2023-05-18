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
const imageSrc = "../../images/100_2462.JPG";
const imageAlt = "Stumbling in the Dark by T.J Scott";
export default function IndexPage() {
  return (
    <>
      <Seo title="Family Reunite Network TJ Scott Books" />
      <Page useSplashScreenAnimation>

        <AboutSection sectionId="about" heading="This is the story of T.J Scott" />
        <Animation type="fadeUp"> 
                <Section heading="If you pick up one book this year...">
                  <h2>Stumbling in the dark</h2>
                  <div className="book-image">
          <img src={imageSrc} alt={imageAlt} />
</div>
      <p>It begins with an unwanted goodbye. Life is never straight forward for Tim and Dana. Stumbling through life in two different countries, by the incalculable odds they meet while running into each other at the movie theater they both work for. As quickly as they are connected, their lives are torn apart. What brought them together has also taken them away, a simple phone call. Desperate to get back to the love of his life and the family he has created, nothing will stop him. With a job loss and no money in the bank, he takes a risk to see his newborn daughter for the first time. He walks the lonely road to find it's not so lonely. Come explore the depths of what it takes to be a family of immigrants and the depth of love it takes to unite. This memoir is touched with journal entries of this man's great journey. How far would you go for your family?</p>
      <a href={buyBookUrl} target="_blank" rel="noopener noreferrer" className="buy-button">
        Buy Now
      </a>
                </Section>
            </Animation>
            <ContactSection sectionId="github" heading="Contact US" />
           
      </Page>
    </>
  );
}
