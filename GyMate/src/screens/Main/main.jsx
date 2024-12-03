import React from "react";
import styles from "./styleMain";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArmsLegs } from "../../components/Arms&Legs";
import { ChestBack } from "../../components/Chest&Back";
import { ShouldersWaist } from "../../components/Shoulders&Waist";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Main() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <MaterialCommunityIcons name="dumbbell" size={50} color="#fff"/>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.navContainer}>
                    <TouchableOpacity style={styles.buttonRoutine} onPress={() => navigation.navigate("GyMate Routine")}>
                        <Text style={styles.buttonRoutineText}>Crie sua rotina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAI} onPress={() => navigation.navigate("GyMate AI")}>
                        <Text style={styles.buttonAIText}>Teste nossa IA</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.scrollviewContainer}>
                    <Text style={styles.scrollviewText}>Treine também em casa</Text>
                    <ScrollView style={styles.scrollview}>
                        <ArmsLegs/>
                        <ChestBack/>
                        <ShouldersWaist/>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate ChatList")}>
                    <Ionicons name="chatbubble-outline" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <Ionicons name="home" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <Ionicons name="person-outline" size={35} color="#fff"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}