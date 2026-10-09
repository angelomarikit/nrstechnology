export const SITE_URL = 'https://nrstechph.com'

export const company = {
  legalName: 'NRS Technologies and Business Solutions Corporation',
  brandName: 'NRS Technologies',
  tagline: 'Powering Your Next Move',
  phoneDisplay: '+63 917 513 086 7',
  phoneTel: '+639175130867',
  email: 'info@nrstechsolutions.com',
  address:
    'Unit 1015, 10F, Parkway Corporate Center, Corporate Ave. Parkway Place, Filinvest City, Alabang, Muntinlupa City, Philippines',
  addressShort: 'Parkway Corporate Center, Filinvest City, Alabang, Muntinlupa City',
  businessHours: 'Monday–Friday, 9:00 AM–6:00 PM, Philippine Time (UTC+8)',
  businessHoursShort: 'Mon–Fri, 9:00 AM–6:00 PM PHT',
  focus:
    'Cybersecurity, managed services, project management training, AI consulting and implementation, strategic planning, business automation, and digital transformation advisory.',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Unit%201015%2C%2010F%2C%20Parkway%20Corporate%20Center%2C%20Corporate%20Ave.%20Parkway%20Place%2C%20Filinvest%20City%2C%20Alabang%2C%20Muntinlupa%20City%2C%20Philippines',
  logo: {
    src: '/logo/nrs-logo.png?v=10',
    srcDark: '/logo/nrs-logo.png?v=10',
    alt: 'NRS Technologies — Powering Your Next Move',
    width: 1064,
    height: 379,
  },
  mission:
    'We help organizations convert technology investment into business performance. We measure our success by whether our clients are stronger after we leave than they were before we arrived.',
  vision:
    'To be the partner Asia-Pacific organizations turn to when technology has to deliver.',
} as const

export type Company = typeof company
