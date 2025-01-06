// 'use client';
// import React from 'react';
// import { links } from './Navbar';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const DesktopNav = () => {
//   const pathName = usePathname();
//   return (
//     <ul className="flex gap-6">
//       {links.map((link) => {
//         if (link.label === 'Blog') {
//           return (
//             <li key={link.label}>
//               <Link
//                 href={link.path}
//                 target="_blank"
//                 className="text-black flex items-center gap-[2px]"
//               >
//                 <span
//                   className={
//                     pathName === link.path
//                       ? 'relative after:absolute after:-bottom-1 after:w-3/4 after:h-[2px] after:bg-[#D4AF37] after:left-1/2 after:transform after:-translate-x-1/2'
//                       : ''
//                   }
//                 >
//                   {link.label}
//                 </span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                   />
//                 </svg>
//               </Link>
//             </li>
//           );
//         } else {
//           return (
//             <li
//               key={link.label}
//               className={
//                 pathName === link.path
//                   ? 'relative after:absolute after:-bottom-1 after:w-3/4 after:h-[2px] after:bg-[#D4AF37] after:left-1/2 after:transform after:-translate-x-1/2'
//                   : ''
//               }
//             >
//               <Link href={link.path} className="text-black">
//                 {link.label}
//               </Link>
//             </li>
//           );
//         }
//       })}
//     </ul>
//   );
// };

// export default DesktopNav;



'use client';
import React from 'react';
import { links } from './Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNav = () => {
  const pathName = usePathname();

  const isExternal = (url) => url.startsWith('http');

  return (
    <ul className="flex gap-6">
      {links.map((link) => {
        const isActive = pathName === link.path; // Check if the current path is active
        const externalLinkIcon = isExternal(link.path) &&  null;

        return (
          <li key={link.label} className="relative">
            <Link
              href={link.path}
              target={isExternal(link.path) ? '_blank' : '_self'}
              rel={isExternal(link.path) ? 'noopener noreferrer' : ''}
              className={`text-black flex items-center ${isActive
                  ? 'after:absolute after:-bottom-1 after:w-3/4 after:h-[2px] after:bg-[#D4AF37] after:left-1/2 after:transform after:-translate-x-1/2'
                  : ''
                }`}
            >
              <span>{link.label}</span>
              {externalLinkIcon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
