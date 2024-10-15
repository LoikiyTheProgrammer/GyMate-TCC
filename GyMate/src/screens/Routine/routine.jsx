import React, { useState } from "react";
import styles from "./styleRoutine";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Modal, Image, TextInput } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function Routine() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require("../../assets/imgs/Fundo-GyMate.png")}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Lista de rotina de treinos</Text>
                </View>

                <View style={styles.routineContainer}>
                    <ScrollView>
                        <TouchableOpacity style={styles.buttonCreate} onPress={() => setModalVisible(true)}>
                            <Text style={styles.buttonCreateText}>Criar nova rotina</Text>
                            <MaterialCommunityIcons name="plus" size={50} color="#fff"/>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Crie sua rotina</Text>
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Nome da rotina"
                                placeholderTextColor={"#1179e2"}
                            />

                            <View style={styles.listContainer}>
                                <TextInput
                                    style={styles.listInput}
                                    placeholder="Exercício"
                                    placeholderTextColor={"#1179e2"}
                                />

                                <TextInput
                                    style={styles.listNumberInput}
                                    placeholder="Rp"
                                    placeholderTextColor={"#1179e2"}
                                    keyboardType="numeric"
                                />

                                <TextInput
                                    style={styles.listNumberInput}
                                    placeholder="Kg"
                                    placeholderTextColor={"#1179e2"}
                                    keyboardType="numeric"
                                />
                            </View>
                            
                            <TouchableOpacity style={styles.buttonExercise}>
                                <MaterialCommunityIcons name="plus" size={25} color="#fff"/>
                            </TouchableOpacity>

                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.buttonCancelText}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonAdd} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.buttonAddText}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Chat")}>
                    <MaterialCommunityIcons name="chat-outline" size={45} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Main")}>
                    <MaterialCommunityIcons name="home-outline" size={45} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Profile")}>
                    <MaterialCommunityIcons name="account-outline" size={45} color="#fff"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}