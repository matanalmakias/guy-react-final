import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

type ButtonProps = {
  classNames: string;
  children: React.ReactNode;
  type: string;
};

const CustomButton: React.FC<ButtonProps> = ({
  type,
  classNames,
  children,
}) => {
  return (
    <BootstrapButton type={type} className={classNames}>
      {children}
    </BootstrapButton>
  );
};

export default CustomButton;
