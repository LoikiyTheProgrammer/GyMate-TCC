import React from "react";
import styles from "./styleBack";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Back() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Back</Text>
        </SafeAreaView>
    );
}