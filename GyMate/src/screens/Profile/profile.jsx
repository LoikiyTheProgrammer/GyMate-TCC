import React, { useState, useEffect } from "react";
import styles from "./styleProfile";
import { Alert, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Profile() {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState("Carregando...");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                const userDocRef = doc(FIREBASE_DB, "Users", currentUser.uid);

                try {
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setFullName(userDoc.data().FullName || "Nome não disponível");
                    } else {
                        console.error("Usuário não encontrado no Firestore!");
                        Alert.alert("Erro", "Usuário não encontrado no sistema. Faça login novamente.");
                        navigation.navigate("GyMate");
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário:", error.message);
                    Alert.alert("Erro", "Não foi possível carregar os dados do usuário. Tente novamente.");
                }
            }
        });

        return () => unsubscribe();
    }, [navigation]);

    const handleSignOut = async () => {
        try {
            await signOut(FIREBASE_AUTH);
            console.log("Usuário deslogado com sucesso!");
            navigation.navigate("GyMate");
        } catch (error) {
            console.error("Erro ao deslogar:", error.code, error.message);
            Alert.alert("Erro", "Não foi possível sair da conta. Tente novamente.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <MaterialCommunityIcons name="dumbbell" size={50} color="#fff" />
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileImage}>
                        <MaterialCommunityIcons name="account-circle" size={300} color="#1179e2" />
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.profileTitle}>Nome:</Text>
                        <Text style={styles.profileText}>{fullName}</Text>
                        <Text style={styles.profileTitle}>E-mail:</Text>
                        <Text style={styles.profileText}>{user?.email || "E-mail não disponível"}</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonSignout} onPress={handleSignOut}>
                        <Text style={styles.buttonSignoutText}>Sair da conta</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => navigation.navigate("GyMate ChatList")}
                >
                    <Ionicons name="chatbubble-outline" size={35} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <Ionicons name="home-outline" size={35} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonActive} onPress={() => navigation.navigate("GyMate Profile")}>
                    <Ionicons name="person" size={35} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}