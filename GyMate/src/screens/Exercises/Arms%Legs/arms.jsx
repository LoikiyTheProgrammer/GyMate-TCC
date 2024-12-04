import React, { useState } from "react";
import styles from "./styleArms";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Modal, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Arms() {
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
                    <Image style={styles.coverImage} source={require("../../../assets/imgs/Treino-Braços.png")}/>
                    <Text style={styles.coverTitle}>Treino de Braço</Text>
                </View>

                <View style={styles.scrollviewContainer}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible1(true)}>
                                    <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Braço1-1.jpg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 1</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible2(true)}>
                                <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Braço2-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 2</Text>
                            </View>
                        </View>

                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible3(true)}>
                                <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Braço3-1.jpeg")}/>
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>Exercício 3</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible4(true)}>
                                <Image style={styles.exerciseJPG} source={require("../../../assets/imgs/Braço4-1.jpeg")}/>
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
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço1-1.jpg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço1-2.jpg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible1(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Rosca com Halteres
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Bíceps.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Em pé, segure um haltere em cada mão, com as palmas voltadas para cima. 
                                Flexione os cotovelos, levantando os pesos até a altura dos ombros, 
                                e depois retorne lentamente à posição inicial.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible2} onRequestClose={() => setModalVisible2(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço2-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço2-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible2(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Mergulho no Chão com Apoio
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Tríceps, peitoral menor e ombros.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Sente-se no chão com as mãos apoiadas no banco atrás de você e os pés no chão. 
                                Levante o corpo estendendo os braços, depois flexione os cotovelos para abaixar 
                                o corpo próximo ao chão, sem encostar.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible3} onRequestClose={() => setModalVisible3(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço3-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço3-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible3(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Rosca Inversa de Punho com Barra
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Antebraços e extensores do punho.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Intruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Ajoelhado com o antebraço apoiado em um banco, segure a barra com as palmas 
                                voltadas para baixo. Flexione os punhos para levantar a barra e abaixe 
                                lentamente.
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible4} onRequestClose={() => setModalVisible4(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <View style={styles.exerciseModal}>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço4-1.jpeg")}/>
                                <Image style={styles.exerciseJPG2} source={require("../../../assets/imgs/Braço4-2.jpeg")}/>
                            </View>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible4(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Extensão de Dois Braços com Halteres no Banco
                            </Text>
                            <Text style={styles.modalText}>
                                Alvo: Tríceps.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Instruções:
                            </Text>
                            <Text style={styles.modalText}>
                                Deitado em um banco inclinado, segure um haltere com ambas as mãos acima da 
                                cabeça. Flexione os cotovelos para abaixar o peso atrás da cabeça e depois 
                                estenda os braços para retornar.
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