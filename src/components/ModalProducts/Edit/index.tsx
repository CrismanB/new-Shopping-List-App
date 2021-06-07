import React, { useState } from "react";
import { ModalProps, View, Text } from "react-native";
import { Container, ContainerInfo, Header, HeaderTitle } from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface ModalProductsProps extends ModalProps {
  showModal: () => any;
}

const ModalEditProduct: React.FC<ModalProductsProps> = ({
  showModal,
  visible,
  ...rest
}) => {
  return (
    <Container visible={visible} animationType="fade" transparent={true}>
      <ContainerInfo>
        <Header>
          <HeaderTitle>Informações produto</HeaderTitle>
          <AntDesign
            name="close"
            size={30}
            color={"#3355a3"}
            onPress={showModal}
          />
        </Header>
        <Text>Teste</Text>
      </ContainerInfo>
    </Container>
  );
};

export default ModalEditProduct;
