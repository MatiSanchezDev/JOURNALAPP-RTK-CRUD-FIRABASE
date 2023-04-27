import { ImageListItem, ImageList } from "@mui/material";

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: "100%", height: 400 }} cols={4} rowHeight={150}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
