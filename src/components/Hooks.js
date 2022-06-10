import React from 'react';

export const useOpenModel = (photos) => {
  const [open, setOpen] = React.useState(false);
  const [imgIndex, setImgIndex] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return [open, imgIndex, setImgIndex, handleOpen, handleClose];
};
