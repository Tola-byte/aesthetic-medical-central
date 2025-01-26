import React, { useState } from 'react';

const categories = [
  {
    name: 'Consultation',
    subcategories: [
      {
        name: 'In Person',
        details: {
          description:
            "Schedule a one-on-one appointment with our experienced doctor. During your consultation, we'll delve into your medical and/or cosmetic skin concerns, conduct a thorough skin and lifestyle analysis, and provide a personalized treatment plan tailored to your unique needs. Discover how our innovative treatments can help you achieve your desired skin goals.",
          time: '45 minutes',
          cost: '30000',
        },
      },
      {
        name: 'Virtual',
        details: {
          description:
            'Experience the convenience of a virtual consultation from the comfort of your home. Connect with our doctor via video call to discuss your skin concerns, receive personalized advice, and explore treatment options.',
          // Our virtual consultations offer a flexible and time-saving way to achieve your skincare goals.',
          time: '45 minutes',
          cost: '30000',
        },
      },
      {
        name: 'Review',
        details: {
          description:
            "Monitor your progress and assess the effectiveness of your treatment plan with a follow-up review appointment. Our doctor will evaluate your skin's response to treatments, make any necessary adjustments, and provide ongoing guidance to ensure optimal results. Schedule a review appointment to keep your skincare journey on track",
          time: '30 minutes',
          cost: '15000',
        },
      },
      {
        name: 'Facial Aesthetics Analysis',
        details: {
          description:
            "Discover the secrets to a more balanced and youthful appearance with our comprehensive facial aesthetics analysis. Our skilled doctor will meticulously assess your facial features, identify areas of concern, and offer personalized recommendations. From subtle enhancements to more dramatic transformations, we'll help you achieve your ideal aesthetic goals.",
          // Our analysis includes Facial shape and proportions: We'll evaluate the symmetry and balance of your facial features. Skin quality and texture: We'll assess your skin's condition, including tone, elasticity, and any signs of ageing. Volume and contour: We'll analyse the fullness and definition of your facial features. Personalised treatment plan: Based on our analysis, we'll recommend tailored treatments to address your specific concerns and enhance your natural beauty.

          time: '15 minutes',
          cost: '50000',
        },
      },
    ],
  },
  {
    name: 'Medical-Grade Facials',
    subcategories: [
      {
        name: 'The Oxygen Glow Facial',
        details: {
          description:
            'Indulge in the ultimate revitalising experience with our Oxygen Glow Facial. This luxurious treatment infuses your skin with a oxygen, promoting cellular renewal and enhancing radiance. Combined with a nourishing serum, this facial deeply hydrates, improves skin texture, and leaves you with a luminous, healthier complexion.',
          //  This service is a great pre-event treatment',
          time: '60 minutes',
          cost: '50000',
        },
      },
      {
        name: 'The Dermaplaning Facial',
        details: {
          description:
            'Experience a gentle yet effective exfoliation with our Dermaplaning Facial. Using a sterile blade, we carefully remove the top layer of dead skin cells and fine vellus hair, revealing smoother, brighter skin. This treatment helps to improve skin texture, reduce the appearance of fine lines, and enhance the absorption of skincare products. Enjoy a radiant, rejuvenated complexion after a single Dermaplaning session',
          time: '60 minutes',
          cost: '50000',
        },
      },
      {
        name: 'The Nanoneedling Facial',
        details: {
          description:
            'Experience the future of skin rejuvenation with our Nanoneedling Facial. This innovative treatment utilizes tiny, sterile nanotips to create microscopic channels in the skin, stimulating collagen and elastin production and enhancing product delivery.',
          //  Unlike traditional microneedling, nanoneedling offers a gentler approach with minimal discomfort, making it suitable for even the most sensitive skin. Our Nanoneedling Facial is designed to address a variety of skin concerns, including: Fine lines and wrinkles Enlarged pores Hyperpigmentation Uneven skin texture By promoting cellular turnover and improving skin elasticity, nanoneedling can help you achieve a more youthful, radiant complexion',
          time: '60 minutes',
          cost: '70000',
        },
      },
      {
        name: 'The Plasma Facial ',
        details: {
          description:
            'Discover the power of plasma technology with our innovative Plasma Facial. This cutting-edge treatment utilises plasma energy to create microscopic pores in the skin, allowing for deeper penetration of active ingredients.',
          //  By enhancing absorption, plasma poration can effectively address a range of skin concerns, including: Fine lines and wrinkles Acne Hyperpigmentation Uneven skin tone Our Plasma Facial is designed to deliver visible results. The treatment is gentle and minimally invasive, making it suitable for most skin types. Experience smoother, firmer, and more radiant skin with this advanced treatment.',
          time: '60 minutes',
          cost: '60000',
        },
      },
      {
        name: 'The Botox Facial ',
        details: {
          description:
            'Experience a refreshing approach to skin rejuvenation with our Botox Facial. This innovative treatment combines the power of minute doses of neuromodulators with the hydrating properties of hyaluronic acid and growth factors, delivering a transformative effect on your skin.',
          //  Unlike traditional Botox treatments, our Botox Glow Facial focuses on enhancing skin quality rather than targeting muscles. The minute doses of Botox are strategically injected to: Improve skin texture: Reduce the appearance of fine lines and wrinkles, leaving your skin looking smoother and more youthful. Boost hydration: Hyaluronic acid deeply hydrates your skin, improving its elasticity and plumpness. Stimulate collagen production: Growth factors promote the production of new collagen, enhancing skin firmness and reducing the signs of aging. The Botox Glow Facial offers a subtle yet effective way to achieve a more radiant and youthful complexion.',
          time: '60 minutes',
          cost: '100000',
        },
      },
      {
        name: 'The Acne Facial ',
        details: {
          description:
            'Combat acne breakouts and achieve clearer, healthier skin with our specialized Acne Facial. This targeted treatment combines deep cleansing, exfoliation, and extraction to remove impurities and reduce inflammation. Our experts will customize the treatment to address your specific acne concerns, helping you regain confidence and a radiant complexion.',
          time: '60 minutes',
          cost: '50000',
        },
      },
      {
        name: 'The Customized Facial ',
        details: {
          description:
            "Experience truly personalised skincare with our Customised Facial. Tailored to your unique skin needs and concerns, this treatment combines a variety of techniques and products to deliver optimal results. Our experts will conduct a thorough analysis to identify your specific needs and create a personalised treatment plan. Whether you're dealing with acne, aging, dryness, or sensitivity, our Customised Facial can help you achieve a healthier, more radiant complexion. Enjoy a relaxing and rejuvenating experience that leaves your skin feeling refreshed and revitalized. ",
          time: '60 minutes',
          cost: '80000',
        },
      },
    ],
  },
  {
    name: 'Neuromodulator',
    subcategories: [
      {
        name: 'Wrinkle Treatment',
        details: {
          description:
            'Smooth away the appearance of fine lines and wrinkles with our effective wrinkle treatment. Our experienced doctor uses advanced techniques to precisely administer a neuromodulator that temporarily relaxes the underlying muscles, reducing the visible signs of aging.',
          //  This procedure is ideal for treating: Forehead lines Crow's feet Between-the-brow lines Enjoy a more youthful, refreshed appearance without the need for invasive procedures.",
          time: '45 minutes',
          cost: '180000',
        },
      },
      {
        name: 'Masseter Reduction/Bruxism Treatment',
        details: {
          description:
            'Achieve a more sculpted and refined facial profile with this specialised treatment. This targeted procedure addresses the masseter muscles, which can become enlarged and contribute to a square-shaped jawline. By injecting small amounts of neuromodulator into these muscles, we can help reduce their size and create a more slender, feminine appearance.',
          time: '45 minutes',
          cost: '200000',
        },
      },
      {
        name: 'Hyperhidrosis Treatment',
        details: {
          description:
            'Say goodbye to excessive sweating with our Hyperhidrosis Treatment. This innovative procedure offers a long-lasting solution for excessive sweating in the underarms, hands, and feet. By blocking the nerve signals that stimulate sweat glands, Botox can significantly reduce perspiration, providing relief from the discomfort associated with hyperhidrosis.',
          //  Our Hyperhidrosis Treatment is a minimally invasive procedure with minimal downtime. The effects typically last for several months, allowing you to enjoy a more comfortable and confident lifestyle.',
          time: '60 minutes',
          cost: '300000 to 400000',
        },
      },
      {
        name: 'Shoulder Slimming',
        details: {
          description:
            'Experience a more sculpted and refined shoulder silhouette with our shoulder slimming treatment. This innovative procedure utilises neuromodulators to temporarily relax the trapezius muscles, which can become enlarged and contribute to a broader shoulder appearance. By reducing the size of the trapezius muscles, shoulder slimming with neuromodulators can help create a more defined and balanced shoulder line.',
          //  This treatment is ideal for individuals who desire a more feminine and streamlined upper body. It is a minimally invasive procedure with minimal downtime, allowing you to resume your normal activities quickly. Enjoy a more',
          time: '60 minutes',
          cost: '250000 to 400000',
        },
      },
    ],
  },
  {
    name: 'Injectables',
    subcategories: [
      {
        name: 'Skin Boosters',
        details: {
          description:
            "Discover the transformative power of skin boosters, a revolutionary treatment designed to replenish your skin's natural moisture levels. These specialized injections deliver a unique hyaluronic acid formula that deeply hydrates, improves skin texture, and enhances elasticity. Experience a refreshed, plumped, and radiant complexion with our skin booster treatments.",
          time: '60 minutes',
          cost: '250000',
        },
      },
      {
        name: 'Mesotherapy',
        details: {
          description:
            'Mesotherapy is a minimally invasive cosmetic procedure that involves injecting a series of microinjections containing a customised blend of vitamins, minerals, amino acids, and hyaluronic acid into the middle layer of the skin. This targeted approach delivers essential nutrients directly to the skin cells, stimulating collagen and elastin production, improving skin hydration, and addressing various skin concerns. Mesotherapy is commonly used to treat: Fine lines and wrinkles Cellulite Hair loss Dark circles Hyperpigmentation Enjoy a more youthful, radiant complexion with this unique approach to skin rejuvenation.',
          time: '75 minutes',
          cost: '150000',
        },
      },
      {
        name: 'Dermal Filler',
        details: {
          description:
            'Dermal fillers are a versatile cosmetic treatment used to restore lost volume, enhance facial features, and reduce the appearance of wrinkles. These injectable fillers are composed of hyaluronic acid, a naturally occurring substance found in the body that helps to hydrate and plump the skin.',
          //  Dermal fillers can be used to: Correct facial volume loss: Address hollow cheeks, sunken temples, and thin lips. Smooth wrinkles and lines: Reduce the appearance of nasolabial folds, marionette lines, and forehead wrinkles. Enhance facial features: Define the cheekbones, augment the lips, and improve the overall shape of the face. Improve skin quality: Hydrate the skin and improve its texture and elasticity.  Dermal fillers offer a minimally invasive and long-lasting solution for achieving a more youthful and refreshed appearance. Book a consultation now to determine if dermal fillers are right for you and to discuss the potential benefits and risks.',
          time: '60 minutes',
          cost: 'Price on Consultation',
        },
      },
      {
        name: 'Lip Rejuvenation',
        details: {
          description:
            'Restore fullness, definition, and youthful volume to your lips with our Lip Rejuvenation treatments. Using a combination of dermal fillers and lip enhancement techniques, we can help you achieve your desired lip shape and size.',
          //  Whether you're looking to add volume, correct asymmetry, define your lip border, or improve hydration, our expert doctors can provide pers",
          time: '45 minutes',
          cost: '250000',
        },
      },
      {
        name: 'Neck Rejuvenation',
        details: {
          description:
            'Address the signs of aging on your neck with our comprehensive Neck Rejuvenation treatments. Our specialised techniques target sagging skin, wrinkles, and crepey texture, restoring a youthful and refreshed appearance. We offer a range of treatments tailored to your specific needs. Experience the transformative effects of this treatment and regain a more youthful, confident neckline.',
          time: '60 minutes',
          cost: 'Price on Consultation',
        },
      },
      {
        name: 'Hand Rejuvenation',
        details: {
          description:
            'Address the signs of ageing on your hands with our comprehensive Hand Rejuvenation treatments. Our specialised techniques target sagging skin, wrinkles, age spots, and volume loss, restoring a youthful and refreshed appearance. We offer a range of treatments tailored to your specific needs, including dermal fillers, mesotherapy, and chemical peels. Experience the transformative effects of Hand Rejuvenation and regain youthful-looking hands that complement your overall appearance.',
          time: '60 minutes',
          cost: '250000',
        },
      },
    ],
  },
  {
    name: 'Others',
    subcategories: [
      {
        name: 'LED Therapy',
        details: {
          description:
            'LED therapy, also known as light therapy, utilises specific wavelengths of light to stimulate cellular activity and promote skin rejuvenation. This non-invasive treatment involves exposing the skin to LED light, which penetrates the skin and interacts with cells to trigger various biological processes.',
        },
      },
      // {
      //   name: 'Kenalog + LED Therapy',
      //   details: {
      //     description:
      //       "Kenalog is a corticosteroid medication that can help reduce the appearance of hypertrophic scars. It works by suppressing the body's inflammatory response, which can help to soften and flatten raised scars. This is combine with our LED therapy for a safer and more effective treatment.",
      //     time: '60 minutes',
      //     cost: '35000 to 90000',
      //   },
      // },
      {
        name: 'Sclerotherapy',
        details: {
          description:
            'Sclerotherapy is a minimally invasive procedure used to treat spider veins. During sclerotherapy, a solution is injected directly into the vein, causing it to collapse and eventually disappear. The procedure involves a series of small injections. There is minimal discomfort associated with sclerotherapy and most people can resume their normal activities shortly after the treatment. Book a consultation today to discuss whether this procedure is right for you.',
          time: '60 minutes',
          cost: '160000',
        },
      },
      // {
      //   name: 'LED Therapy',
      //   details: {
      //     description:
      //       "LED therapy, also known as light therapy, utilises specific wavelengths of light to stimulate cellular activity and promote skin rejuvenation. This non-invasive treatment involves exposing the skin to LED light, which penetrates the skin and interacts with cells to trigger various biological processes. LED therapy can offer a range of benefits for skin health, including: Reduced inflammation: Helps to calm and soothe irritated skin, reducing redness and inflammation. Improved collagen and elastin production: Stimulates the skin's natural repair mechanisms, leading to increased skin firmness and elasticity. Enhanced wound healing: Promotes faster healing of cuts, scrapes, and other skin injuries. Reduced acne: Helps to regulate oil production and reduce inflammation, improving acne-prone skin. Anti-aging effects: Can help to reduce the appearance of fine lines and wrinkles, providing a more youthful complexion. LED therapy is a safe and effective treatment for various skin concerns. Book a consultation to determine if LED therapy is right for you and to discuss the treatment protocols that may be suitable for your goals.",
      //     time: '30 minutes',
      //     cost: '35000',
      //   },
      // },
    ],
  },
  {
    name: 'IV Therapy',
    subcategories: [
      {
        name: 'Standard IV Drip',
        details: {
          description:
            "IV therapy, also known as intravenous therapy, is a method of delivering essential nutrients, vitamins, minerals, and fluids directly into the bloodstream through a vein. This allows for rapid absorption and optimal utilization by the body. IV therapy can offer a variety of benefits, including: Improved hydration: Replenish fluids and electrolytes, especially during illness or dehydration. Enhanced nutrient absorption: Deliver essential vitamins and minerals directly to your cells for optimal health. Boosted energy levels: Combat fatigue and improve overall well-being. Enhanced immune function: Support your body's natural defenses and promote faster recovery from illness. Skin health benefits: Promote collagen production, reduce inflammation, and improve skin hydration. IV therapy is a safe and effective way to optimize your health and well-being.",
          time: '45 minutes',
          cost: '120000',
        },
      },
      // {
      //   name: 'Energy Drip',
      //   details: {
      //     description: '',
      //     time: '45 minutes',
      //     cost: '130000',
      //   },
      // },
      // {
      //   name: 'Custom Drip',
      //   details: {
      //     description: '',
      //     time: '45 minutes',
      //     cost: '140000',
      //   },
      // },
      {
        name: 'IV Glutathione',
        details: {
          description:
            "IV glutathione is a potent antioxidant that offers a range of benefits for overall health and well-being. When administered intravenously, glutathione can directly target cells, providing a concentrated dose of this essential nutrient. Key benefits of IV glutathione include: Improved skin health: Reduces hyperpigmentation, promotes collagen production, and enhances skin radiance. Enhanced immune function: Supports the body's natural defenses. Reduced oxidative stress: Protects cells from damage caused by free radicals. IV glutathione is a safe and effective way to boost your antioxidant levels and support optimal health.",
          time: '15 minutes',
          cost: '60000',
        },
      },
      // {
      //   name: 'Double dose IV',
      //   details: {
      //     description: '',
      //     time: '15 minutes',
      //     cost: '90000',
      //   },
      // },
    ],
  },
  {
    name: 'Chemical Peel',
    subcategories: [
      {
        name: 'Single Acid Chemical',
        details: {
          description:
            'Single acid chemical peels offer a targeted approach to address specific skin concerns. By using a single concentration of an alpha hydroxy acid (AHA) or beta hydroxy acid (BHA), these peels can effectively exfoliate, improve skin texture, and address issues such as acne, hyperpigmentation, and fine lines. Single acid peels offer an effective solution for various skin concerns. Book a consultation to determine the most appropriate single acid peel for your specific needs.',
          time: '60 minutes',
          cost: '60000',
        },
      },
      {
        name: 'Combo 2 Peel',
        details: {
          description:
            'Our combination peels offer a powerful and customised approach to skin rejuvenation by combining different acids to address a wider range of skin concerns. The peels feature a blend of alpha hydroxy acids (AHAs) and beta hydroxy acids (BHAs), along with other active ingredients as required. By combining multiple acids, combination peels can provide a more comprehensive exfoliation, improve skin texture, reduce the appearance of fine lines and wrinkles, and address issues such as acne, hyperpigmentation, and sun damage. Combination peels can be customised to suit individual skin types and concerns, making them a versatile option for those seeking significant skin improvements. Our Combo 2 Peel features 2 acids',
          time: '60 minutes',
          cost: '90000',
        },
      },
      {
        name: 'Combo 3 Peel',
        details: {
          description:
            'Our combination peels offer a powerful and customised approach to skin rejuvenation by combining different acids to address a wider range of skin concerns. The peels feature a blend of alpha hydroxy acids (AHAs) and beta hydroxy acids (BHAs), along with other active ingredients as required. By combining multiple acids, combination peels can provide a more comprehensive exfoliation, improve skin texture, reduce the appearance of fine lines and wrinkles, and address issues such as acne, hyperpigmentation, and sun damage. Combination peels can be customised to suit individual skin types and concerns, making them a versatile option for those seeking significant skin improvements. Our Combo 3 Peel features 3 acids',
          time: '60 minutes',
          cost: '120000',
        },
      },
      {
        name: 'Customized Peel',
        details: {
          description:
            'This personalised approach ensures that you receive the most effective and beneficial treatment for your skin. Customized chemical peels can be used to treat a wide range of skin conditions, including: Acne Hyperpigmentation Fine lines and wrinkles Sun damage Uneven skin texture Experience the transformative power of customised chemical peels and achieve a more radiant, youthful complexion. Book a consultation to explore the right approach for your skin.',
          time: '60 minutes',
          cost: '180000 to 300000',
        },
      },
      {
        name: 'PRX-T33',
        details: {
          description:
            "This is a non-needling biorevitalisation treatment to stimulate the skin's natural regenerative process. It is not aggressive, featuring no frosting, and can be safely done in all weather. The effects are often visible immediately after the treatment",
          time: '45 minutes',
          cost: 'from 130000',
        },
      },
    ],
  },
];

function formatPrice(value) {
  // Helper function to format a single number as currency
  const formatCurrency = (num) => ` ₦${parseInt(num).toLocaleString()}`;
  if (value === 'Price on Consultation') {
    return ` ${value}`;
  } else if (value.includes('to')) {
    // Case 2: Format ranges like "1000 to 1500"
    const [start, end] = value.split(' to ').map(formatCurrency);
    return `${start} to ${end}`;
  } else if (value.startsWith('from')) {
    // Case 3: Format values like "from 1000"
    const amount = value.replace('from ', '').trim();
    return ` from ${formatCurrency(amount)}`;
  } else {
    // Case 1: Format standalone values like "1000"
    return formatCurrency(value);
  }
}

const ChevronDownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUpIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

const NestedDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setActiveSubcategory(null);
  };

  const toggleSubcategory = (index) => {
    setActiveSubcategory(activeSubcategory === index ? null : index);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-4 border rounded-lg">
          <div
            onClick={() => toggleCategory(categoryIndex)}
            className="cursor-pointer flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg"
          >
            <h3 className="font-semibold text-lg">{category.name}</h3>
            {activeCategory === categoryIndex ? ChevronUpIcon : ChevronDownIcon}
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              activeCategory === categoryIndex ? 'max-h-fit' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-gray-50">
              {category.subcategories.map((subcategory, subcategoryIndex) => (
                <div key={subcategoryIndex} className="mb-4">
                  <div
                    onClick={() => toggleSubcategory(subcategoryIndex)}
                    className="cursor-pointer flex justify-between items-center p-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
                  >
                    <h4 className="font-medium">{subcategory.name}</h4>
                    {activeSubcategory === subcategoryIndex
                      ? ChevronUpIcon
                      : ChevronDownIcon}
                  </div>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      activeSubcategory === subcategoryIndex
                        ? 'max-h-screen'
                        : 'max-h-0'
                    }`}
                  >
                    <div className="mt-2 ml-4 text-sm bg-gray-100 p-3 rounded-lg">
                      <p className="mb-2">
                        {/* <strong>Description:</strong>{' '} */}
                        {subcategory.details.description}
                      </p>
                      {/* <p className="mb-1">
                        <strong>Duration:</strong> {subcategory.details.time}
                      </p> */}

                      {/* <p>
                        <strong>Cost:</strong>
                        {formatPrice(subcategory.details.cost)}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NestedDropdown;
