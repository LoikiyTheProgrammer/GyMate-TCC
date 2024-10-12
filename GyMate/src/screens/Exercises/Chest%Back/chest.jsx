import React from "react";
import styles from "./styleChest";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Chest() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Chest</Text>
        </SafeAreaView>
    );
}