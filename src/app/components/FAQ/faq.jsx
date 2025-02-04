import React from 'react';
import Accordion from './Accordion';
import Items from './Item';
import { FAQHomePageData } from '@/app/config/config';

const FAQ = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold mb-8">
        Frequently Asked Questions
      </h2>

      <div className="w-[90%] mx-auto bg-white rounded-md">
        <Accordion>
          <Items data={FAQHomePageData}/>
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
