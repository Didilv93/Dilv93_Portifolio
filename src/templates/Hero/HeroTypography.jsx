import React from 'react';
import styled from 'styled-components';

const PageContent = styled.div`
    position: absolute;
    padding: 1rem;
    width: 750px;
    margin-top: 40vh;
    margin-left: 10vw;
    pointer-events: none;
    p {
        margin: 0;
        max-width: 100%;
        color: #fff;
        font-size: 45px;
        line-height: 3rem;
    }
    .lineStyle{
        opacity: 0;
        transition: opacity 2s;
    }
`;

const DinamicTitleStyle = styled.p`
    display: inline-flex;
    vertical-align: top;

    .word {
        position: absolute;
        margin-left: 1rem;
        opacity: 0;
    }
    .letter {
        display: inline-block;
        position: relative;
        transform: translateZ(25px);
        transform-origin: 50% 50% 25px;
    }
    .letter.out {
        transform: rotateX(90deg);
        transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .letter.behind {
        transform: rotateX(-90deg);
    }
    .letter.in {
        transform: rotateX(0deg);
        transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .wisteria {
        color: #8e44ad;
    }

    .belize {
        color: #2980b9;
    }

    .pomegranate {
        color: #c0392b;
    }

    .green {
        color: #16a085;
    }

    .midnight {
        color: #2c3e50;
    }
`;

class component extends React.Component {
    render(){
        return (
            <PageContent>
                <p className='lineStyle'>Olá!</p>
                <p className='lineStyle'>Meu nome é Diego,</p>
                <DinamicTitleStyle className='lineStyle'>Eu trabalho com</DinamicTitleStyle>
                <DinamicTitleStyle className='lineStyle'>
                    <span className='word wisteria'>websites.</span>
                    <span className='word belize'>frontend.</span>
                    <span className='word pomegranate'>backend.</span>
                    <span className='word green'>designer.</span>
                </DinamicTitleStyle>
            </PageContent>
        );
    };
};

export default component;