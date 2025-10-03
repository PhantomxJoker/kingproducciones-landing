import { TFunction } from "react-i18next";
export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface AssetImgProps {
  src?: string;
  width?: string;
  height?: string;
  type: "png" | "jpg" | "jpeg"
  srcSet?: {
    small: { size: string, path: string },
    medium: { size: string, path: string },
    large: { size: string, path: string }
  }
}

export interface AssetImgPropsSrcSet extends AssetImgProps {
  type: "png" | "jpg" | "jpeg"
  srcSet: {
    small: { size: string, path: string },
    medium: { size: string, path: string },
    large: { size: string, path: string }
  }
}

export interface AssetImgPropsSrc extends AssetImgProps {
  src: string;
  width?: string;
  height?: string;
  type: "png" | "jpg" | "jpeg"
}

export interface DownloableAnchorProps {
  url: string;
  content:string;
}

export interface InputProps {
  labelName: string;
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  children?: any; 
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface SelectProps {
  labelName: string;
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  children?: any; 
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
  questionType: string;
}

export interface GlowProperties {
  glow?: boolean;
}
