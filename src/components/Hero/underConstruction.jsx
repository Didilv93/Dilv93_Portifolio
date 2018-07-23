import React from 'react';
import styled, {css} from 'styled-components';
import Img1 from '../../../static/img/icons/img1.png';
import Img2 from '../../../static/img/icons/img2.png';
import Img3 from '../../../static/img/icons/img3.png';
import Img4 from '../../../static/img/icons/img4.png';

const PageContent = styled.div`
    margin: auto;
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

const Form = styled.form`
    font-size: 0.9rem;
    margin-top: 5rem;
    div {
        margin-bottom: .5rem;

        label {
            position: relative;
            display: flex;
            margin-bottom: .3rem;
            color: #fff;
            font-size: 18px;
        }
        input, textarea {
            font-size: inherit;
            margin: 0rem;
            width: 100%;
            border: .1em solid transparentize(red, .5);
            border-radius: .15em;
            padding: .3rem .25rem;
        }
        textarea {
            height: 5rem;
            resize: vertical;
        }
    }
    button {
        margin-top: .5rem;
        margin-bottom: 0rem;
        height: 30px;
        width: 80px;
        font-weight: bolder;
        background-color: #2F4F4F;
        color: #F0FFFF;
        border: none;
        border-radius: 2px;
        opacity: .8;
        cursor: pointer;
        :hover {
            opacity: 1;
        }
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
                    <a target='_blank' href='https://www.facebook.com/DiegoSSnts'>
                        <Contenedor color='#3b5998'>
                            <Icon src={Img1} />
                        </Contenedor>
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/diegossnts'>   
                        <Contenedor color='#283e4a'>
                            <Icon src={Img2} />
                        </Contenedor>
                    </a>
                    <a target='_blank' href='https://plus.google.com/u/0/100504794499429210318'>
                        <Contenedor color='	#B22222'>
                            <Icon src={Img3} />
                        </Contenedor>
                    </a>
                    <a target='_blank' href='https://www.instagram.com/diegosslv'>
                        <Contenedor color='#8B008B'>
                            <Icon src={Img4} />
                        </Contenedor>
                    </a>
                </div>
                <Form
                    name="contact"               
                    autoComplete="off"
                    method="POST"
                    action="https://formspree.io"
                >
                    <div>
                        <label>nome</label>
                        <input type="text" id="nome" name="nome"/>
                    </div>
                    <div>
                        <label>email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label>mensagem</label>
                        <textarea id="mensagem" name="mensagem"></textarea>
                    </div>
                    <p>
                        <button type="submit">ENVIAR</button>
                    </p>
            </Form>
            </Contact>
        </PageContent>
    );
};

export default component;