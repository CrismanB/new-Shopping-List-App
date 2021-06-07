import React, { useCallback } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "./../../components/Input";
import Logo from "./../../assets/logo.png";
import Button from "./../../components/Button";
import { Container, LogoCart } from "./styles";

const CreateList = () => {
  const navigation = useNavigation();

  const handleCreateList = useCallback(() => {
    navigation.navigate("AddItems");
  }, [navigation]);

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <LogoCart source={Logo} />
      <Input placeholder={"Nome da lista"} placeholderTextColor={"#999"} />
      <Button onPress={handleCreateList}>Criar Lista</Button>
    </Container>
  );
};

export default CreateList;
