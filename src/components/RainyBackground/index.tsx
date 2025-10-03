import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { LinesContainer, LineDrop } from "./styles";

interface MiddleBlockProps {
  title: string;
  subTitle?: string;
  content: string;
  button: string;
  japaneseText?: string;
  t: TFunction;
}

const RainyBackground = () => {
    const elements: JSX.Element[] = []

    for (let i = 0; i < 20; i++) {
        elements.push(<LineDrop key={i} dropSpeed={Math.floor(Math.random() * 10) + "s"} className="line" />)
    }

    return (
        <LinesContainer>
            {elements}
        </LinesContainer>
    );
};

export default RainyBackground;
