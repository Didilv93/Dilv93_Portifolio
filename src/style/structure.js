import { css } from 'styled-components';

export const mediaQueries = {
  phone: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)}
    }
  `,
  tabletDown: (...args) => css`
    @media (max-width: 759px) {
      ${css(...args)}
    }
  `,
  tabletUp: (...args) => css`
    @media (min-width: 760px) {
      ${css(...args)}
    }
  `,
};

export default mediaQueries;
