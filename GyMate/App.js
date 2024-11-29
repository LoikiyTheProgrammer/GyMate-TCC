import React, { useState, useEffect } from "react";
import { StatusBar, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./src/routes/stack.routes";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FIREBASE_AUTH } from "./src/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
    await Font.loadAsync({
        "Lexend Black": require("./src/assets/fonts/Lexend-Black.ttf"),
        "Lexend Bold": require("./src/assets/fonts/Lexend-Bold.ttf"),
        "Lexend ExtraBold": require("./src/assets/fonts/Lexend-ExtraBold.ttf"),
        "Lexend ExtraLight": require("./src/assets/fonts/Lexend-ExtraLight.ttf"),
        "Lexend Light": require("./src/assets/fonts/Lexend-Light.ttf"),
        "Lexend Medium": require("./src/assets/fonts/Lexend-Medium.ttf"),
        "Lexend Regular": require("./src/assets/fonts/Lexend-Regular.ttf"),
        "Lexend SemiBold": require("./src/assets/fonts/Lexend-SemiBold.ttf"),
        "Lexend Thin": require("./src/assets/fonts/Lexend-Thin.ttf"),
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const prepare = async () => {
            try {
                await loadFonts();
                const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
                    setUser(currentUser);
                    setLoading(false);
                });
                return unsubscribe;
            } catch (e) {
                console.warn(e);
            } finally {
                setFontsLoaded(true);
                SplashScreen.hideAsync();
            }
        };
        prepare();
    }, []);

    if (!fontsLoaded || loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#1179e2" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor="transparent"
                hidden
            />
            <StackRoutes initialRouteName={user ? "GyMate Main" : "GyMate"} />
        </NavigationContainer>
    );
}