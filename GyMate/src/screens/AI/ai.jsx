import React, { useState } from "react";
import styles from "./styleAI";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { run } from "../../constants/gemini";
import { useNavigation } from "@react-navigation/native";

export default function AI() {
    const navigation = useNavigation();

    const [question, setQuestion] = useState("");
    const [responseText, setResponseText] = useState("");

    const handleSend = async () => {
        try {
            const result = await run(question);
            setResponseText(result);
        } catch (error) {
            console.error("Error fetching response:", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../assets/imgs/Fundo-GyMate.png')}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>O que você deseja exercitar?</Text>
                </View>

                <View style={styles.responseContainer}>
                    <ScrollView style={styles.scrollview}>
                        <Text style={styles.responseText}>{responseText}</Text>
                    </ScrollView>
                </View>

                <View style={styles.questionContainer}>
                    <TextInput
                        style={styles.questionInput}
                        value={question}
                        onChangeText={setQuestion}
                        placeholder="Digite aqui"
                        placeholderTextColor={"#1179e2"}
                        maxLength={100}
                    />

                    <TouchableOpacity style={styles.questionButton} onPress={handleSend}>
                        <MaterialCommunityIcons name="send" size={45} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Chat")}>
                    <Ionicons name="chatbubble-outline" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <Ionicons name="home-outline" size={35} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <Ionicons name="person-outline" size={35} color="#fff"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}