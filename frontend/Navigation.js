import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen.js";
import Faq from "./src/screens/Faq.js";
import Profile from "./src/screens/Profile.js";
import Notifications from "./src/screens/Notifications.js";
import Chat from "./src/screens/Chat.js";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login.jsx";

// screens

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#724BB6",
        height: 80,
    },
    tabBarLabel: () => {
        return null;
    },
    headerShown: false,
};

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" {...{ screenOptions }}>
            <Tab.Screen
                options={{
                    title: "TU PERFIL",
                    headerShown: true,
                    headerStyle: { height: 130, backgroundColor: "#724BB6" },
                    headerTitle: { fontSize: 60 },
                    headerTitleStyle: {
                        fontWeight: "600",
                        fontSize: 26,
                        color: "#fff",
                    },
                    headerTitleAlign: "center",
                    tabBarIcon: () => (
                        <Image
                            source={require("./src/assets/Navigation/profile-icon.png")}
                        />
                    ),
                }}
                name="Profile"
                component={Profile}
            />
            <Tab.Screen
                options={{
                    title: "¿CÓMO PODEMOS AYUDARTE?",
                    headerShown: true,
                    headerStyle: { height: 84 },
                    headerTitle: { fontSize: 24 },
                    headerTitleStyle: { fontWeight: "700" },
                    headerTitleAlign: "center",
                    tabBarIcon: () => (
                        <Image
                            source={require("./src/assets/Navigation/faqs-icon.png")}
                        />
                    ),
                }}
                name="FAQ'S"
                component={Faq}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require("./src/assets/Navigation/home-icon.png")}
                        />
                    ),
                }}
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    title: "NOTIFICACIONES",
                    headerShown: true,
                    headerStyle: { height: 130, backgroundColor: "#724BB6" },
                    headerTitle: { fontSize: 60 },
                    headerTitleStyle: {
                        fontWeight: "600",
                        fontSize: 26,
                        color: "#fff",
                    },
                    headerTitleAlign: "center",
                    tabBarIcon: () => (
                        <Image
                            source={require("./src/assets/Navigation/notification-icon.png")}
                        />
                    ),
                }}
                name="Notifications"
                component={Notifications}
            />
            <Tab.Screen
                options={{
                    title: "MENSAJES",
                    headerShown: true,
                    headerStyle: { height: 130, backgroundColor: "#724BB6" },
                    headerTitle: { fontSize: 60 },
                    headerTitleStyle: {
                        fontWeight: "600",
                        fontSize: 26,
                        color: "#fff",
                    },
                    headerTitleAlign: "center",
                    tabBarIcon: () => (
                        <Image
                            source={require("./src/assets/Navigation/messages-icon.png")}
                        />
                    ),
                }}
                name="Chat"
                component={Chat}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
             screenOptions={{
                headerShown: false
              }}
              initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="isLogged" component={MyTabs} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
