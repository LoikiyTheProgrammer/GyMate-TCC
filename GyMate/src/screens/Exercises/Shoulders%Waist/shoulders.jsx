import React from "react";
import styles from "./styleShoulders";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Shoulders() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Shoulders</Text>
        </SafeAreaView>
    );
}