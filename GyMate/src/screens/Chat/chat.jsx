import React from "react";
import styles from "./styleChat";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Chat() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Chat</Text>
        </SafeAreaView>
    );
}