import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  iconMobile?: string;
  title: string;
  subTitle?: string;
  content: string;
  section?: {
    title: string;
    content?: string;
    htmlContent?: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        clickAction?: any;
      }
    | {
        title: string;
        color?: string;
        clickAction?: any;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  japaneseText?: string;
  glow?: boolean;
}
