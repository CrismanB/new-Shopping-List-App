import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

//Pages
import CreateList from "./pages/CreateList";
import ListAddProducts from "./pages/ListAddProducts";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export function Routes() {
  function ListStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CreateList"
          component={CreateList}
          options={{
            headerTitle: "Criação de lista",
            headerTransparent: true,
            headerTintColor: "#f2f2f2",
          }}
        />
        <Stack.Screen
          name="AddItems"
          component={ListAddProducts}
          options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: "#f2f2f2",
            headerTitle: "Produtos da lista",
            headerTitleStyle: { margin: "auto" },
          }}
        />
        <Stack.Screen
          name="EditItems"
          component={CreateList}
          options={{
            headerBackTitleVisible: false,
            headerTitle: "Editar Item",
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0b2038" barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#149875",
            inactiveTintColor: "gray",
            tabStyle: { backgroundColor: "#0b2038" },
            labelPosition: "beside-icon",
            labelStyle: { fontWeight: "bold", fontSize: 12 },
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={20} />
              ),
            }}
            component={CreateList}
          />
          <Tab.Screen
            name="Nova Lista"
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="plus" color={color} size={20} />
              ),
            }}
            component={ListStack}
          />
          <Tab.Screen
            name="Histórico"
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="list" color={color} size={20} />
              ),
            }}
            component={CreateList}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
