import React from 'react';

import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const colors = theme.colors;

const StyleContent = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex: 1 300px;
  left: 25%;
  top: -25%;

  ${(props) => {
    const { order } = props;
    return css`
        transform: rotate(-60deg);
    `;
  }}
`;

const StylePoint = styled.div`
  width: .20rem;
  height: .20rem;
  border-radius: 10rem;

  ${(props) => {
    const { order } = props;
    return css`
      background-color: ${props.color};

        animation-delay: 0s;
	    animation: ${props.namePoint} ${props.timeTransform};
	    animation-iteration-count: infinite;
	    animation-timing-function: linear;

        @keyframes ${props.namePoint} {
	        from {
		        transform: rotate(0deg)
		        ${props.translateFrom}
		        rotate(0deg);
	        }
	        to {
		        transform: rotate(360deg)
		        ${props.translateTo} 
		        rotate(-360deg);
	        }
	    }
    `;
  }}
`;

const Line = styled.div`
  width: 200%;
  height: .05rem;
  
  ${(props) => {
    const { order } = props;
    return css`
        background-color: ${colors.white};
    `;
  }}
`;

const LightBeam = styled.div`
  width: 100%;
  height: 5rem;
  opacity: .2;
  margin-left: 0.3rem;

  :hover {
    opacity: .6;
  }

  ${(props) => {
    const { order } = props;
    return css`

        animation-delay: 0s;
	    animation: ${props.nameLine} ${props.timeTransform};
	    animation-iteration-count: infinite;
	    animation-timing-function: linear;

        @keyframes ${props.nameLine} {
	        from {
		        transform: rotate(0deg)
		        ${props.translateFrom}
		        rotate(0deg);
	        }
	        to {
		        transform: rotate(360deg)
		        ${props.translateTo}
		        rotate(-360deg);
	        }
	    }
    `;
  }}
`;

export const component = (props) => {
    return (
        <StyleContent 
            {...props}
        >
            <StylePoint
                className={props.namePoint} 
                {...props} 
            />
            <LightBeam
                className={props.nameLine}  
                {...props} 
            >
                <Line {...props} />
            </LightBeam>
        </StyleContent>
    );
};

export default component;