import React from "react";
import { Button } from "react-bootstrap";

export const BackButton = ({ onPrev }) => {
  return (
    <Button
      onClick={() => {
        onPrev();
      }}
    >
      Back
    </Button>
  );
};
