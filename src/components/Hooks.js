import React from 'react';

export const useOpenModel = (arrs) => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  ///
  
  const [modal, setModal] = React.useState({});
  React.useEffect(() => {
    const comparedModal = arrs.filter((item) => {
      if (item.id == content) {
        return item;
      }
    });
    setModal(comparedModal[0]);
  }, [content]);

  return [open, content, setContent, handleOpen, handleClose, modal, setModal];
};
