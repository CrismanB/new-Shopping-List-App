import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, TextButton } from "./styles";

interface ButtonProps extends RectButtonProps {
  background?: string;
  colorFont?: string;
}

const Button: React.FC<ButtonProps> = ({
  background,
  colorFont,
  children,
  ...rest
}) => {
  return (
    <Container background={background} {...rest}>
      <TextButton colorFont={colorFont}>{children}</TextButton>
    </Container>
  );
};

export default Button;
