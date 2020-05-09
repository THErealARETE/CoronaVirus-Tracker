import React from 'react';
import Accordion from './Accordion'

const PreventionAndTreatment = () => {
    return (
        <div>
            <Accordion
            title ="Prevention from COVID-19?"
            content="The novel coronavirus is primarily transmitted from person to person. At this point, the best way to prevent getting infected is to avoid being around people who have been exposed to the virus.
Additionally, according to the CDCTrusted Source, you can take the following precautions to lower your risk of infection:

Wash your hands thoroughly with soap and water for at least 20 seconds.
Use hand sanitizer with at least 60 percent alcohol if soap isn’t available.
Avoid touching your face unless you’ve recently washed your hands.
Stay clear of people who are coughing and sneezing. The CDC recommends standing at least 6 feet away from anyone who appears to be sick.
Avoid crowded areas as much as possible.
Older adults are at the highest risk of infection and may want to take extra precautions to avoid coming into contact with the virus.
"/> 
         <Accordion
         title="Treatment for COVID-19?"
         content="There currently isn’t a vaccine against developing COVID-19. Antibiotics are also ineffective because COVID-19 is a viral infection and not bacterial.

If your symptoms are more severe, supportive treatments may be given by your doctor or at a hospital. This type of treatment may involve:

fluids to reduce the risk of dehydration
medication to reduce a fever
supplemental oxygen in more severe cases
People who have a hard time breathing on their own due to COVID-19 may need a respirator.

Here are some treatment options that are currently being investigated for protection against SARS-CoV-2 and treatment of COVID-19 symptoms.
            Remdesivir
Remdesivir is an experimental broad-spectrum antiviral drug originally designed to target Ebola.

Researchers have found that remdesivir is highly effective at fighting the novel coronavirus in isolated cellsTrusted Source.

This treatment is not yet approved in humans, but two clinical trials for this drug have been implemented in China. One clinical trial was recently also approved by the FDA in the United States.

Chloroquine
Chloroquine is a drug that’s used to fight malaria and autoimmune diseases. It’s been in use for more than 70 yearsTrusted Source and is considered safe.

Researchers have discovered that this drug is effective at fighting the SARS-CoV-2 virus in studies done in test tubes.

At least 10 clinical trialsTrusted Source are currently looking at the potential use of chloroquine as an option for combating the novel coronavirus.

Lopinavir and ritonavir
Lopinavir and ritonavir are sold under the name Kaletra and are designed to treat HIV.

In South Korea, a 54-year-old man was given a combination of these two drugs and had a significant reductionTrusted Source in his levels of the coronavirus.

According to the World Health Organization (WHO), there could be benefits to using Kaletra in combination with other drugs.

APN01
A clinical trial is set to start soon in China to examine the potential of a drug called APN01 to fight the novel coronavirus.

The scientists who first developed APN01 in the early 2000s discovered that a certain protein called ACE2 is involved in SARS infections. This protein also helped protect the lungs from injury due to respiratory distress.

From recent research, it turns out that the 2019 coronavirus, like SARS, also uses the ACE2 protein to infect cells in humans.

The randomized, dual-arm trial will look at the effect of the medication on 24 patients for 1 week. Half of the participants in the trial will receive the APN01 drug, and the other half will be given a placebo. If results are encouraging, larger clinical trials will be done.

Favilavir
China has approved the use of the antiviral drug favilavir to treat symptoms of COVID-19. The drug was initially developed to treat inflammation in the nose and throat.

Although the results of the study haven’t been released yet, the drug has supposedly shown to be effective in treating COVID-19 symptoms in a clinical trial of 70 people.
"/>

        </div>
    );
};

export default PreventionAndTreatment;