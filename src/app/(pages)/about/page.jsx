import React from 'react';
import Image from 'next/image';
import banner from '../../assets/about/Img 25.jpg';
import Img5 from '../../assets/about/Img 5.jpg';

const page = () => {
  return (
    <div className="relative">
      <div
        className="bg-gray-200"
        style={{ clipPath: 'polygon(100% 0, 100% 69%, 51% 100%, 0 70%, 0 0)' }}
      >
        <Image
          src={banner}
          alt="banner"
          priority="true"
          style={{
            clipPath: 'polygon(100% 0, 100% 69%, 51% 100%, 0 70%, 0 0)',
          }}
          className="w-full h-[50vh] object-cover"
        />
      </div>

      <div className="bg-white shadow-md rounded-md min-h-[25vh] py-12 flex items-center w-[95%] md:w-[85%] mx-auto relative -top-40 z-10 px-4 md:px-12 -mb-12">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-semibold  md:mb-6 text-center">
            Welcome to your transformation
          </h1>

          <div className="flex flex-col-reverse md:grid grid-cols-2 items-center md:items-stretch gap-8 md:gap-12 px-2 pt-6 pb-10 md:px-8">
            <p className="text-[14px] leading-loose">
              Dr. Isima S. is an Aesthetic Physician with a focus on catering to
              skin of colour. She developed an interest in the skin early on due
              to her own struggles, and her core exposure started during her
              medical internship. She sees patients with aesthetic and medical
              skin concerns. She is proficient in laser treatments, chemical
              peels, dermal filler injections, botulinum toxin injections and
              many other skin rejuvenating procedures, having performed
              thousands of treatments. <br /> <br />
              Through her work, she has gained experience in different aspects
              of the Aesthetic Medicine industry, and particularly enjoys
              training others. She has found a deep sense of fulfilment with
              helping others find their feet in this field. She is a lifelong
              learner, and takes part in weekly classes, local and international
              conferences to keep up with the industry on a global scale. <br />
              <br />
              She is certified by the American Academy of Aesthetic Medicine and
              the International Society of Aesthetic Genital Surgery and
              Sexology, among others. She is also an associate member of the
              Nigerian Association of Dermatologists and a member of Canadian
              Board of Aesthetic Medicine (CBAM) and IMCAS Academy. She has also
              taken CPD courses with Medscape Education, St John’s Derm Academy,
              and Harvard Medical School. She has been featured in the media
              locally (TVC) and internationally (BBC, AFP), where she has
              discussed topics ranging from acne and hyperpigmentation to skin
              lightening in Africa.
            </p>
            <Image
              src={Img5}
              alt="Dr Isime"
              className="w-full h-[23rem] md:h-[34rem] object-cover object-bottom rounded-md"
            />
          </div>

          <div className="text-center md:text-left px-4 md:px-8">
            <h2 className="text-3xl font-semibold mb-4">Mission</h2>
            <p className="text-[14px] leading-loose">
              To empower individuals to achieve healthy, radiant skin through
              expert care, education, and innovative treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
