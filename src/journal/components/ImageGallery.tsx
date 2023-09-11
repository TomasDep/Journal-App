import { FC } from "react";

import { ImageList, ImageListItem } from "@mui/material";

interface Props {
  imageUrls: string[];
}

export const ImageGallery: FC<Props> = ({ imageUrls }) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {imageUrls.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="images notes"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
