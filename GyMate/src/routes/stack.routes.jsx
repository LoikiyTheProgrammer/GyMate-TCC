import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/home";
import SignIn from "../screens/Auth/SignIn/signIn";
import SignUp from "../screens/Auth/SignUp/signUp";
import Chat from "../screens/Chat/chat";
import Main from "../screens/Main/main";
import Profile from "../screens/Profile/profile";
import AI from "../screens/AI/ai";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GyMate"
                component={Home}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Sign-in"
                component={SignIn}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Sign-up"
                component={SignUp}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Chat"
                component={Chat}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Main"
                component={Main}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Profile"
                component={Profile}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate AI"
                component={AI}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}