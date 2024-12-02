import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/home";
import SignIn from "../screens/Auth/SignIn/signIn";
import SignUp from "../screens/Auth/SignUp/signUp";
import ChatList from "../screens/Chat/chatList";
import ChatMessage from "../screens/Chat/chatMessage";
import Main from "../screens/Main/main";
import Profile from "../screens/Profile/profile";
import AI from "../screens/AI/ai";
import Routine from "../screens/Routine/routine";
import Arms from "../screens/Exercises/Arms%Legs/arms";
import Legs from "../screens/Exercises/Arms%Legs/legs";
import Chest from "../screens/Exercises/Chest%Back/chest";
import Back from "../screens/Exercises/Chest%Back/back";
import Shoulders from "../screens/Exercises/Shoulders%Waist/shoulders";
import Waist from "../screens/Exercises/Shoulders%Waist/waist";

const Stack = createNativeStackNavigator();

export default function StackRoutes({ initialRouteName }) {
    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
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
                name="GyMate ChatList"
                component={ChatList}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate ChatMessage"
                component={ChatMessage}
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

            <Stack.Screen
                name="GyMate Routine"
                component={Routine}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Arms"
                component={Arms}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Legs"
                component={Legs}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Chest"
                component={Chest}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Back"
                component={Back}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Shoulders"
                component={Shoulders}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="GyMate Waist"
                component={Waist}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}