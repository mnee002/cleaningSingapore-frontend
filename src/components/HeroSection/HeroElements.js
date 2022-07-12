import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1
`;

export const ProjContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
    position: relative;
    z-index: 1
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 520px;
`;

export const ProjContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;
`;

export const HeroH1 = styled.h1`
    color: #0c0c0c;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 760px){
        font-size: 28px;
    }

    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`;



export const HeroP = styled.p`
    margin-top: 24px;
    color: #0c0c0c;
    font-size: 20px;
    text-align: center;
    max-width: 800px;

    @media screen and (max-width: 760px){
        font-size: 18px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const Img = styled.img`
    max-width: 80%;
    height: auto;
    margin-top: 400px;
    @media screen and (max-width: 760px){
        margin-top: 200px;
    }

    @media screen and (max-width: 480px){
        margin-top: 400px;
    }
`;

export const Form = styled.form`
   width: 100%;
`;