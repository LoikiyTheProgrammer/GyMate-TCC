import React, { useState } from "react";
import styles from "./styleChest";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Chest() {
    const navigation = useNavigation();

    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <MaterialCommunityIcons name="dumbbell" size={50} color="#fff"/>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.cover}>
                    <Image style={styles.coverImage} source={require("../../../assets/imgs/Treino-Peito.png")}/>
                    <Text style={styles.coverTitle}>Treino de Peito</Text>
                </View>

                <View style={styles.scrollviewContainer}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible1(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Peito1-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 1</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible2(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Peito2-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 2</Text>
                            </View>
                        </View>

                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible3(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Peito3-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 3</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible4(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Peito4-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 4</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <Modal transparent={true} visible={modalVisible1} onRequestClose={() => setModalVisible1(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito1-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito1-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible1(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Flexão de Braço
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Peitoral, tríceps e deltoides anteriores.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Com as mãos no chão na largura dos ombros, abaixe o peito em direção ao chão 
                                flexionando os cotovelos, depois empurre para cima.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible2} onRequestClose={() => setModalVisible2(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito2-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito2-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible2(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Supino com Kettlebell no Chão
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Peitoral e tríceps.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Deitado no chão, segure o kettlebell em ambas as mãos. Empurre-o para cima até 
                                estender os braços, e abaixe-o lentamente.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible3} onRequestClose={() => setModalVisible3(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito3-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito3-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible3(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Flexão Arqueiro
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Peitoral, tríceps e deltoides anteriores.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Com os braços afastados, flexione um cotovelo enquanto mantém o outro braço estendido, 
                                direcionando o peso para um lado. Alterne os lados.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible4} onRequestClose={() => setModalVisible4(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito4-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Peito4-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible4(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Flexão com Toque no Ombro
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Peitoral, tríceps, deltoides e core.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Após cada flexão de braço, toque um ombro com a mão oposta, mantendo o equilíbrio.
                            </Text>
                        </View>
                    </View>
                </Modal>
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