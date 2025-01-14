import React from 'react';
import { AccordionItem } from './Accordion';
import Image from 'next/image';
import Arrow from "@/app/assets/arrow.png"


const Items = ({ data }  ) => {
  return (
    <div>
      {data?.map((item) => (
        <AccordionItem key={item.id} value={item.id} trigger={item.title}>
        
          {item?.body?.length > 0 && Array.isArray(item.body) ? (
            <div>

              {item?.body?.map((bodyItem) => (
                <ul key={bodyItem}>
                  <div className='flex gap-4 '>
                    {/* <Image
                      src={Arrow}
                      alt='arrow'
                      className='mt-2'
                      width={8}
                      height={8}
                    /> */}
                    <li className='' key={bodyItem}>{bodyItem}</li>
                    </div>
                  </ul>
              ))}
            </div>
          ) : (
            <p>{item?.body || "No content available"}</p>
          )}
        </AccordionItem>
          
      ))}
    </div>
  );
};

export default Items;


