import { useEffect, useState } from "react";
import { AssetImgProps } from "../types";

const sanitizeImagePath = (path: string) => {
  const sanitizedPath = path.replace(/[^a-zA-Z0-9\-/._]/g, ''); 
  return sanitizedPath;
};

export const AssetImg = ({ src, width, height, type, srcSet }: AssetImgProps) => {
  const [loadedSmall, setLoadedSmall] = useState("");
  const [loadedMedium, setLoadedMedium] = useState("");
  const [loadedLarge, setLoadedLarge] = useState("");
  const [loadedSrc, setLoadedSrc] = useState("");

  useEffect(() => {
    if (srcSet) {
      const sanitizedSmall = sanitizeImagePath(srcSet.small.path);
      const sanitizedMedium = sanitizeImagePath(srcSet.medium.path);
      const sanitizedLarge = sanitizeImagePath(srcSet.large.path);
      
      const smallImage = new Image();
      const mediumImage = new Image();
      const largeImage = new Image();

      smallImage.src = `/img/${type}/${sanitizedSmall}`;
      mediumImage.src = `/img/${type}/${sanitizedMedium}`;
      largeImage.src = `/img/${type}/${sanitizedLarge}`;
      smallImage.onload = () => {
        setLoadedSmall(smallImage.src);
      };
      mediumImage.onload = () => {
        setLoadedMedium(mediumImage.src);
      };
      largeImage.onload = () => {
        setLoadedLarge(largeImage.src);
      };
    } else {
      const sanitizedSrc = sanitizeImagePath(src as string);

      const srcImg = new Image();

      srcImg.src = `/img/${type}/${sanitizedSrc}`;
      srcImg.onload = () => {
        setLoadedSrc(srcImg.src);
      };
    }
  })
  
  if (srcSet) {
    return loadedSmall && loadedMedium && loadedLarge ? (
      <img
        src={`${loadedMedium}`}
        srcSet={`${loadedSmall} ${srcSet.small.size}, ${loadedLarge} ${srcSet.large.size}`}
        sizes={srcSet.medium.size}
        alt={srcSet.medium.path}
      />
    ) : (<div />)
  }
  
  return loadedSrc ? (
    <img src={`${loadedSrc}`} alt={src} width={width} height={height} />
  ) : (<div />)
};
