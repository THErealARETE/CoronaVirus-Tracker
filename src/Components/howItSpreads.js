import React from "react";
import Accordion from "./Accordion";

const HowItSpreads = () => {
  return (
    <div>
      <Accordion
        title="What is the source of the virus?"
        content="Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people. This is suspected to have occurred for the virus that causes COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS) are two other examples of coronaviruses that originated from animals and then spread to people."
      />

      <Accordion
        title=">How does the virus spread?"
        content="This virus was first detected in Wuhan City, Hubei Province, China. The first infections were linked to a live animal market, but the virus is now spreading from person-to-person. It’s important to note that person-to-person spread can happen on a continuum. Some viruses are highly contagious (like measles), while other viruses are less so.
            The virus that causes COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in some affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected."
      />

<Accordion
            title="Can someone who has the COVID-19 spread the illness to others?"
            content="The virus that causes COVID-19 is spreading from person-to-person.
        Someone who is actively sick with COVID-19 can spread the illness to
        others. That is why CDC recommends that these patients be isolated
        either in the hospital or at home (depending on how sick they are) until
        they are better and no longer pose a risk of infecting others. How long
        someone is actively sick can vary so the decision on when to release
        someone from isolation is made on a case-by-case basis in consultation
        with doctors, infection prevention and control experts, and public
        health officials and involves considering specifics of each situation
        including disease severity, illness signs and symptoms, and results of
        laboratory testing for that patient. Current CDC guidance for when it is
        OK to release someone from isolation is made on a case by case basis and
        includes meeting all of the following requirements: The patient is free
        from fever without the use of fever-reducing medications. The patient is
        no longer showing symptoms, including cough. The patient has tested
        negative on at least two consecutive respiratory specimens collected at
        least 24 hours apart. Someone who has been released from isolation is
        not considered to pose a risk of infection to others."/>
    </div>
  );
};

export default HowItSpreads;
