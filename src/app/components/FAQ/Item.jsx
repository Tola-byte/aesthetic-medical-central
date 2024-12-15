import React from 'react';
import { AccordionItem } from './Accordion';

const Items = () => {
  return (
    <div>
      <AccordionItem value="1" trigger="What services do you offer?">
        We offer a range of aesthetic services including skin care
        consultations, anti-aging treatments, facials, chemical peels, and
        personalized product recommendations.
      </AccordionItem>
      <AccordionItem
        value="2"
        trigger="How do I know which treatment is right for me?"
      >
        During your consultation, we assess your skin type, concerns, and goals
        to recommend the most effective treatments tailored to your needs.
      </AccordionItem>
      <AccordionItem
        value="3"
        trigger="Are your treatments safe for sensitive skin?"
      >
        Yes, we offer treatments specifically designed for sensitive skin. Our
        experts will guide you to the safest options for your skin type.
      </AccordionItem>
      <AccordionItem value="4" trigger="Do you offer virtual consultations?">
        Yes, we offer virtual consultations for your convenience. Contact us to
        schedule an appointment.
      </AccordionItem>
    </div>
  );
};

export default Items;
