import React, { useState } from "react";
import styles from "./styleLegs";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Legs() {
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
                    <Image style={styles.coverImage} source={require("../../../assets/imgs/Treino-Pernas.png")}/>
                    <Text style={styles.coverTitle}>Treino de Perna</Text>
                </View>

                <View style={styles.scrollviewContainer}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible1(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Perna1-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 1</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible2(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Perna2-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 2</Text>
                            </View>
                        </View>

                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible3(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Perna3-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 3</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible4(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Perna4-1.jpeg")}/>
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
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna1-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna1-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible1(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Agachamento Reverência
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Quadríceps, glúteos e abdutores.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Comece em pé, leve uma perna para trás e cruzada atrás da outra, flexionando os joelhos. 
                                Retorne à posição inicial e repita com o outro lado.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible2} onRequestClose={() => setModalVisible2(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna2-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna2-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible2(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Agachamento com Peso Corporal
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Quadríceps, glúteos e isquiotibiais.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Em pé com os pés na largura dos ombros, flexione os joelhos e quadris para descer, 
                                mantendo o peso nos calcanhares. Retorne à posição inicial.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible3} onRequestClose={() => setModalVisible3(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna3-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna3-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible3(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Elevação de Panturrilha
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Panturrilha.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Fique em pé e levante os calcanhares, ficando na ponta dos pés. Então, abaixe lentamente.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible4} onRequestClose={() => setModalVisible4(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna4-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Perna4-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible4(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Agachamento Pistola com Apoio em Caixa
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Quadríceps, glúteos e estabilizadores do core.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Fique em pé na frente de uma caixa ou banco, estenda uma perna para frente e 
                                agache até tocar o assento com o quadril. Retorne à posição inicial.
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