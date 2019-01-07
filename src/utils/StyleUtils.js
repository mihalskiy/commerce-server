import { keyframes } from 'styled-components';

export const AnimFade = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

export const Media = {
  numDesktop: 1440,
  numdesktopSM: 1200,
  numTablet: 1024,
  numMobile: 698,
  smMobile: 360,
  get desktop() { return `${this.numDesktop}px` },
  get desktopSM() { return `${this.numdesktopSM}px` },
  get tablet() { return `${this.numTablet}px` },
  get mobile() { return `${this.numMobile}px` },
  get mobileSm() { return `${this.smMobile}px` },
  get mobileLS() { return `(max-width: 820px) and (max-height: 420px)` },
}

export const ColorTint = (color, percent) => {
  const values = color.split(',');
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * - 1 : percent;
  const R = parseInt(values[0].slice(5), 10);
  const G = parseInt(values[1], 10);
  const B = parseInt(values[2], 10);
  const A = parseInt(values[3], 10);
  return `rgba(${(Math.round((t - R) * p) + R)}, ${(Math.round((t - G) * p) + G)}, ${(Math.round((t - B) * p) + B)}, ${A})`;
}
