import React, { useState, useEffect } from "react";
import styles from "./styleChatList";
import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_DB, FIREBASE_AUTH } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ChatList() {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const currentUser = FIREBASE_AUTH.currentUser;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersCollection = collection(FIREBASE_DB, "Users");
                const snapshot = await getDocs(usersCollection);

                const usersList = snapshot.docs
                    .map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    .filter(user => user.Email !== currentUser.email);

                setUsers(usersList);
                setFilteredUsers(usersList);
            } catch (error) {
                console.error("Error fetching users: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const filtered = users.filter(user =>
            user.FullName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchText, users]);

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" color="#1179e2" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require("../../assets/imgs/Fundo-GyMate.png")}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <TextInput
                    style={styles.searchBar}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Busque o usuário"
                    placeholderTextColor={"#1179e2"}
                    maxLength={50}
                />

                <ScrollView contentContainerStyle={styles.userList}>
                    {filteredUsers.map(user => (
                        <TouchableOpacity key={user.id} style={styles.userItem} onPress={() => navigation.navigate("GyMate ChatMessage", { userId: user.id })}>
                            <Text style={styles.userName}>{user.FullName}</Text>
                            <Text style={styles.userEmail}>{user.Email}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate ChatList")}>
                    <Ionicons name="chatbubble" size={35} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <Ionicons name="home-outline" size={35} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <Ionicons name="person-outline" size={35} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}