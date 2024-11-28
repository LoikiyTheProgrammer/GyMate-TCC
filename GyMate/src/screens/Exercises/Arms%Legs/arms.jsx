import React, { useState } from "react";
import styles from "./styleArms";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Modal, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Arms() {
    const navigation = useNavigation();

    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require("../../../assets/imgs/Fundo-GyMate.png")}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.cover}>
                    <Image style={styles.coverImage} source={require("../../../assets/imgs/Treino-Braços.png")}/>
                    <Text style={styles.coverTitle}>Treino de Braço</Text>
                </View>

                <View style={styles.space}/>

                <View style={styles.scrollviewContainer}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible1(true)}>
                                    
                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>título 1</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible2(true)}>

                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>título 2</Text>
                            </View>
                        </View>

                        <View style={styles.exerciseContainer}>
                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible3(true)}>

                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>título 3</Text>
                            </View>

                            <View style={styles.exercise}>
                                <TouchableOpacity style={styles.buttonExercise} onPress={() => setModalVisible4(true)}>

                                </TouchableOpacity>
                                <Text style={styles.buttonExerciseText}>título 4</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <Modal transparent={true} visible={modalVisible1} onRequestClose={() => setModalVisible1(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible1(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Labore ea tempore eaque, provident odit nihil numquam, 
                                perspiciatis, consectetur soluta nobis voluptatem eligendi 
                                consequatur mollitia itaque recusandae natus blanditiis minima. 
                                Eligendi!
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible2} onRequestClose={() => setModalVisible2(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible2(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Labore ea tempore eaque, provident odit nihil numquam, 
                                perspiciatis, consectetur soluta nobis voluptatem eligendi 
                                consequatur mollitia itaque recusandae natus blanditiis minima. 
                                Eligendi!
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible3} onRequestClose={() => setModalVisible3(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible3(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Labore ea tempore eaque, provident odit nihil numquam, 
                                perspiciatis, consectetur soluta nobis voluptatem eligendi 
                                consequatur mollitia itaque recusandae natus blanditiis minima. 
                                Eligendi!
                            </Text>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} visible={modalVisible4} onRequestClose={() => setModalVisible4(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalCover}>
                            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible4(false)}>
                                <MaterialCommunityIcons name="arrow-left-drop-circle-outline" size={50} color="#000"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Text>

                            <Text style={styles.modalTitle}>
                                Lorem ipsum
                            </Text>
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Labore ea tempore eaque, provident odit nihil numquam, 
                                perspiciatis, consectetur soluta nobis voluptatem eligendi 
                                consequatur mollitia itaque recusandae natus blanditiis minima. 
                                Eligendi!
                            </Text>
                        </View>
                    </View>
                </Modal>
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