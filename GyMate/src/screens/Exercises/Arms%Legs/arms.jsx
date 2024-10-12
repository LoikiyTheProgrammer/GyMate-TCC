import React from "react";
import styles from "./styleArms";
import { SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Arms() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Arms</Text>
        </SafeAreaView>
    );
}