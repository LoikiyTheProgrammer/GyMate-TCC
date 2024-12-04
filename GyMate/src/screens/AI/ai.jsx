import React, { useState } from "react";
import styles from "./styleAI";
import { Alert, SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { run } from "../../constants/gemini";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AI() {
    const navigation = useNavigation();

    const [question, setQuestion] = useState("");
    const [responseText, setResponseText] = useState("");

    const handleSend = async () => {
        if (!question.trim()) {
            Alert.alert("Erro", "Por favor, digite uma pergunta antes de enviar.");
            return;
        }

        try {
            const result = await run(question);
            setResponseText(result);
        } catch (error) {
            console.error("Erro ao processar a mensagem:", error);
            Alert.alert("Erro", "Houve um problema ao enviar sua pergunta. Verifique sua conexão e tente novamente.");
        }
    };    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <MaterialCommunityIcons name="dumbbell" size={50} color="#fff"/>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Gemini IA</Text>
                </View>

                <View style={styles.responseContainer}>
                    <ScrollView style={styles.responseList}>
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
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate ChatList")}>
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