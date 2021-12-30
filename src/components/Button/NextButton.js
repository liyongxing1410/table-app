import React from "react";
import { Button } from "react-bootstrap";

export const NextButton = ({ onNext }) => {
  return (
    <Button
      onClick={() => {
        onNext();
      }}
    >
      Next
    </Button>
  );
};
