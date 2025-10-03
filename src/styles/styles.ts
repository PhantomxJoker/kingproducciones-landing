import { createGlobalStyle } from "styled-components";
import { ColorsBase } from "./colors_base";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Orbitron Black";
        src: url("/fonts/Orbitron-Black.ttf") format("truetype");
        font-weight: black;
        font-style: black;
    }

    @font-face {
        font-family: "Exo2 Black";
        src: url("/fonts/Exo2-Black.ttf") format("truetype");
        font-weight: black;
        font-style: black;
    }

    @font-face {
        font-family: "Orbitron Bold";
        src: url("/fonts/Orbitron-Bold.ttf") format("truetype");
        font-weight: bold;
    }

    @font-face {
        font-family: "Exo2 Bold";
        src: url("/fonts/Exo2-Bold.ttf") format("truetype");
        font-weight: bold;
    }

    @font-face {
        font-family: "Orbitron ExtraBold";
        src: url("/fonts/Orbitron-ExtraBold.ttf") format("truetype");
        font-weight: bolder;
    }

    @font-face {
        font-family: "Exo2 ExtraBold";
        src: url("/fonts/Exo2-ExtraBold.ttf") format("truetype");
        font-weight: bolder;
    }

    @font-face {
        font-family: "Orbitron Medium";
        src: url("/fonts/Orbitron-Medium.ttf") format("truetype");
        font-weight: 600;
    }

    @font-face {
        font-family: "Exo2 Medium";
        src: url("/fonts/Exo2-Medium.ttf") format("truetype");
        font-weight: 600;
    }

    @font-face {
        font-family: "Orbitron Regular";
        src: url("/fonts/Orbitron-Medium.ttf") format("truetype");
        font-weight: 400;
    }

    @font-face {
        font-family: "Exo2 Regular";
        src: url("/fonts/Exo2-Medium.ttf") format("truetype");
        font-weight: 400;
    }

    @font-face {
        font-family: "Orbitron SemiBold";
        src: url("/fonts/Orbitron-SemiBold.ttf") format("truetype");
        font-weight: 800;
    }

    @font-face {
        font-family: "Exo2 SemiBold";
        src: url("/fonts/Exo2-SemiBold.ttf") format("truetype");
        font-weight: 800;
    }

    body,
    html,
    a {
        font-family: 'Exo2 Regular', sans-serif;
        font-weigth: 400;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
        background-image: linear-gradient(to right, ${ColorsBase.blackDeep}, ${ColorsBase.blackDeep});
        color: white;
    } 

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Orbitron Bold', serif;
        color: ${ColorsBase.redNeon};
        font-size: 56px;
        line-height: 1.18;
        letter-spacing: 2px;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: white;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .download-anchor {
        color: white;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover,
        &:active,
        &:focus {
            color: ${ColorsBase.yellowLaser};
            text-underline-position: under;
            text-decoration: ${ColorsBase.yellowLaser} wavy underline;
        }
    }

    .glow {
        color: #ff4d4d;
        animation: ledPulse 1.5s infinite alternate;
    }

    @keyframes ledPulse {
        0%, 100% {
            text-shadow: 
            0 0 2px ${ColorsBase.redNeon},
            0 0 5px ${ColorsBase.redNeon},
            0 0 10px ${ColorsBase.redNeon},
            0 0 20px ${ColorsBase.redNeon},
            0 0 40px ${ColorsBase.redNeon},
            0 0 80px ${ColorsBase.redNeon};
        }
        50% {
            text-shadow: 
            0 0 5px ${ColorsBase.redNeon},
            0 0 15px ${ColorsBase.redNeon},
            0 0 30px ${ColorsBase.redNeon},
            0 0 60px ${ColorsBase.redNeon},
            0 0 120px ${ColorsBase.redNeon},
            0 0 200px ${ColorsBase.redNeon};
        }
    }
`;
