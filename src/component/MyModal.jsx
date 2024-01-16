import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function MyModal({
  isOpen,
  handleOpen,
  action,
  actionName,
  renderContent,
  page,
}) {
  const handleConfirm = () => {
    action();
    handleOpen();
  };

  return (
    <Dialog open={isOpen} onClose={handleOpen}>
      <DialogHeader>{`Confirm ${actionName}`}</DialogHeader>
      <DialogBody>{renderContent && renderContent()}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
       {page?(<Button variant="gradient" color="green" onClick={handleConfirm}>
          <span>{page}</span>
        </Button>):(null)}
        
      </DialogFooter>
    </Dialog>
  );
}