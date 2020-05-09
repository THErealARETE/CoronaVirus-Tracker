import React from "react";
import Accordion from "./Accordion";

const Origin = () => {
  return (
    <div>
      <Accordion
        title=" What is a novel coronavirus? "
        content=" A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.

A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is not the same as a COVID-19 diagnosis. Patients with COVID-19 will be evaluated and cared for differently than patients with common coronavirus diagnosis"
      />

      <Accordion
      title=" Why is disease been called the coronavirus disease 2019, COVID-19?"
      content=" On February 11, 2020 the World Health Organization announced an official
      name for the disease that is causing the 2019 novel coronavirus
      outbreak, first identified in Wuhan China. The new name of this disease
      is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’
      stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for disease. Formerly,
      this disease was referred to as “2019 novel coronavirus” or “2019-nCoV”.
      There are many types of human coronaviruses including some that commonly
      cause mild upper-respiratory tract illnesses. COVID-19 is a new disease,
      caused be a novel (or new) coronavirus that has not previously been seen
      in humans. The name of this disease was selected following the World
      Health Organization (WHO) best practiceexternal icon for naming of new
      human infectious diseases."/>
     
       
    <Accordion
    title= "How can people stop the stigma associated with COVID-19?" 
    content = " People can fight stigma and help, not hurt, others by providing social
        support. Counter stigma by learning and sharing facts. Communicating the
        facts that viruses do not target specific racial or ethnic groups and
        how COVID-19 actually spreads can help stop stigma."/>
      
    
       
      
    </div>
  );
};

export default Origin;
