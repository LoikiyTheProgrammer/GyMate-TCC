import React, { useState, useEffect } from "react";
import styles from "./styleChatMessage";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FIREBASE_DB } from "../../firebase/firebase";
import { collection, addDoc, query, where, getDocs, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ChatMessage() {
    const route = useRoute();
    const auth = getAuth();

    const { userId: receiverId } = route.params;
    const senderId = auth.currentUser?.uid;

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("");

    const fetchMessages = async () => {
        try {
            const messagesCollection = collection(FIREBASE_DB, "Messages");
            const q = query(
                messagesCollection,
                where("senderId", "in", [senderId, receiverId]),
                where("receiverId", "in", [senderId, receiverId]),
                orderBy("createdAt", "asc")
            );

            const querySnapshot = await getDocs(q);
            const msgs = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setMessages(msgs);
        } catch (error) {
            console.error("Erro ao buscar mensagens: ", error);
        } finally {
            setLoading(false);
        }
    };

    const sendMessage = async () => {
        if (newMessage.trim()) {
            try {
                const messagesCollection = collection(FIREBASE_DB, "Messages");
                await addDoc(messagesCollection, {
                    text: newMessage,
                    senderId,
                    receiverId,
                    createdAt: new Date(),
                });
                setNewMessage("");
                fetchMessages();
            } catch (error) {
                console.error("Erro ao enviar mensagem: ", error);
            }
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDoc = await getDocs(collection(FIREBASE_DB, "Users"));
                const user = userDoc.docs.find(doc => doc.id === receiverId);
                if (user) {
                    setUserName(user.data().FullName);
                }
            } catch (error) {
                console.error("Erro ao buscar usuário: ", error);
            }
        };
        fetchUser();
        fetchMessages();
    }, [receiverId]);

    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date.seconds * 1000);
        const options = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" };
        return d.toLocaleString("pt-BR", options);
    };

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#1179e2" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{userName}</Text>
            </View>

            <View style={styles.mainContainer}>
                <ScrollView style={styles.messagesContainer}>
                    {messages.map((msg, index) => (
                        <View key={index} style={[styles.messageItem, msg.senderId === senderId ? styles.myMessage : styles.otherMessage]}>
                            <Text style={styles.messageText}>{msg.text}</Text>
                            <Text style={styles.messageDate}>{formatDate(msg.createdAt)}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Mensagem"
                    placeholderTextColor="#1179e2"
                />

                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <MaterialCommunityIcons name="send" size={35} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}