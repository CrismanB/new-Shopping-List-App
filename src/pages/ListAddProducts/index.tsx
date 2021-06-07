import React, { useState } from "react";
import { Platform, Alert } from "react-native";
import Input from "./../../components/Input";
import { useHeaderHeight } from "@react-navigation/stack";

import CardProducts from "./../../components/CardProducts";
import ModalEdit from "./../../components/ModalProducts/Edit";
import { Container } from "./styles";

const ListAddProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerHeight = useHeaderHeight();

  function showModal() {
    setIsVisible(!isVisible);
  }

  return (
    <Container
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
      headerHeight={headerHeight}
    >
      <ModalEdit visible={isVisible} showModal={showModal} />
      <CardProducts onPress={() => showModal()} />
      <CardProducts onPress={() => showModal()} />
    </Container>
  );
};

export default ListAddProducts;
