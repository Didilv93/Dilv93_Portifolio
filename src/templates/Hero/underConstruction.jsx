import React from 'react';
import styled, {css} from 'styled-components';
import Img1 from '../../images/Social/img1.png';
import Img2 from '../../images/Social/img2.png';
import Img3 from '../../images/Social/img3.png';
import Img4 from '../../images/Social/img4.png';

const PageContent = styled.div`
    position: absolute;
    align-self: center;
`;

const TextContent = styled.div`
    text-align: center;

    h2 {
        color: #fff;
    }

    h3 {
        color: #fff;
        font-size: 14px;
    }
`;

const Contact = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
`;

const Icon = styled.img`
    display: block;
	margin: 1rem;
	width:  30px;
    padding: 1px;
`;

const Contenedor = styled.div`
    margin-left: .5rem;
    margin-right: .5rem;
    border-radius: 50px;
    float:  left;
    box-shadow: 0px 0px 0px 30px rgba(255,255,255,0);
    transition: box-shadow .4s;
    ${(props) => {
    return css`
        background-color: ${props.color};
        opacity: .6;
    `;
  }}

    :hover {
        box-shadow:0px 0px 0px 0px rgba(255,255,255,.6);
        opacity: 1;
    }
`;

export const component = (props) => {
    return (
        <PageContent>
            <TextContent >
            <h2>Em construção...</h2>
            <h3>Para mais informações, entre em contato!</h3>
            </TextContent>
            <Contact >
                <div>
                    <a href='https://www.facebook.com/DiegoSSnts'
                    rel='noopener'>
                        <Contenedor color='#3b5998'>
                            <Icon src={Img1} />
                        </Contenedor>
                    </a>
                    <a href='https://www.linkedin.com/in/diegossnts'
                    rel='noopener'>
                        <Contenedor color='#283e4a'>
                            <Icon src={Img2} />
                        </Contenedor>
                    </a>
                    <a href='https://plus.google.com/u/0/100504794499429210318'
                    rel='noopener'>
                        <Contenedor color='	#B22222'>
                            <Icon src={Img3} />
                        </Contenedor>
                    </a>
                    <a href='https://www.instagram.com/diegosslv'
                    rel='noopener'>
                        <Contenedor color='#8B008B'>
                            <Icon src={Img4} />
                        </Contenedor>
                    </a>
                </div>
            </Contact>
        </PageContent>
    );
};

export default component;