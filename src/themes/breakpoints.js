export const breakpoints = {
  smallPhone: 320,
  phone: 375,
  largePhone: 425,
  tablet: 768,
  desktop: 1024,
  mediumDesktop: 1220,
  largeDesktop: 1440,
};

export const determineMediaQuery = (size, limit = 'max', unit = 'px') => `@media only screen and (${limit}-width: ${size}${unit})`;