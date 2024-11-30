import React, { useState, useEffect } from "react";
import styles from "./styleChatMessage";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
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
            const msgs = querySnapshot.docs.map(doc => doc.data());
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