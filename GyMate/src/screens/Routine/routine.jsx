import React, { useState, useEffect } from "react";
import styles from "./styleRoutine";
import { Alert, SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Modal, Image } from "react-native";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebase/firebase";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


export default function Routine() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [routines, setRoutines] = useState([]);
    const [routineName, setRoutineName] = useState("");
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchRoutines = async () => {
            try {
                const user = FIREBASE_AUTH.currentUser;
                if (!user) return;
    
                const routinesRef = collection(FIREBASE_DB, "Routines");
                const q = query(routinesRef, where("userId", "==", user.uid));
                const querySnapshot = await getDocs(q);
    
                const loadedRoutines = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRoutines(loadedRoutines);
            } catch (error) {
                console.error("Fetch error:", error.message);
                Alert.alert("Erro: Falha ao carregar as rotinas!");
            }
        };
    
        fetchRoutines();
    }, []);    

    const handleAddExercise = () => {
        setExercises([...exercises, { name: "", reps: "", weight: "" }]);
    };

    const handleDeleteExercise = (index) => {
        setExercises(exercises.filter((_, i) => i !== index));
    };

    const handleDeleteRoutine = async (index) => {
        try {
            const routineToDelete = routines[index];
            if (routineToDelete.id) {
                const docRef = doc(FIREBASE_DB, "Routines", routineToDelete.id);
                await deleteDoc(docRef);
            }
    
            setRoutines(routines.filter((_, i) => i !== index));
        } catch (error) {
            console.error("Erro ao deletar rotina:", error);
        }
    };    

    const handleAddRoutine = async () => {
        try {
            const user = FIREBASE_AUTH.currentUser;
            if (!user) return;
    
            const newRoutine = { name: routineName, exercises, userId: user.uid };
            const docRef = await addDoc(collection(FIREBASE_DB, "Routines"), newRoutine);
    
            setRoutines([...routines, { id: docRef.id, ...newRoutine }]);
            setModalVisible(false);
            setRoutineName("");
            setExercises([]);
        } catch (error) {
            console.error("Erro ao salvar rotina:", error);
        }
    };    

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require("../../assets/imgs/Fundo-GyMate.png")} />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <MaterialCommunityIcons name="bell-check" size={50} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Lista de rotina de treinos</Text>
                </View>

                <View style={styles.routineContainer}>
                    <ScrollView style={styles.scrollView}>
                        <TouchableOpacity style={styles.buttonCreate} onPress={() => setModalVisible(true)}>
                            <Text style={styles.buttonCreateText}>Criar nova rotina</Text>
                            <MaterialCommunityIcons name="plus" size={50} color="#fff" />
                        </TouchableOpacity>

                        {routines.map((routine, index) => (
                            <View style={styles.routine} key={index}>
                                <Text style={styles.routineTitle}>{routine.name}</Text>
                                {routine.exercises.map((exercise, i) => (
                                    <View key={i} style={styles.exercise}>
                                        <Text style={styles.routineText}>{exercise.name} - {exercise.reps} reps - {exercise.weight} kg</Text>
                                    </View>
                                ))}
                                <TouchableOpacity style={styles.buttonDeleteroutine} onPress={() => handleDeleteRoutine(index)}>
                                    <MaterialCommunityIcons name="trash-can-outline" size={30} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        ))}
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
                                maxLength={30}
                                numberOfLines={1}
                                value={routineName}
                                onChangeText={setRoutineName}
                            />

                            {exercises.map((exercise, index) => (
                                <View key={index} style={styles.listContainer}>
                                    <TextInput
                                        style={styles.listInput}
                                        placeholder="Exercício"
                                        placeholderTextColor={"#1179e2"}
                                        maxLength={30}
                                        numberOfLines={1}
                                        value={exercise.name}
                                        onChangeText={(text) => {
                                            const updatedExercises = [...exercises];
                                            updatedExercises[index].name = text;
                                            setExercises(updatedExercises);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.listNumberInput}
                                        placeholder="Rp"
                                        placeholderTextColor={"#1179e2"}
                                        keyboardType="numeric"
                                        maxLength={3}
                                        numberOfLines={1}
                                        value={exercise.reps}
                                        onChangeText={(text) => {
                                            const updatedExercises = [...exercises];
                                            updatedExercises[index].reps = text;
                                            setExercises(updatedExercises);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.listNumberInput}
                                        placeholder="Kg"
                                        placeholderTextColor={"#1179e2"}
                                        keyboardType="numeric"
                                        maxLength={3}
                                        numberOfLines={1}
                                        value={exercise.weight}
                                        onChangeText={(text) => {
                                            const updatedExercises = [...exercises];
                                            updatedExercises[index].weight = text;
                                            setExercises(updatedExercises);
                                        }}
                                    />
                                    <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDeleteExercise(index)}>
                                        <MaterialCommunityIcons name="trash-can-outline" size={30} color="red" />
                                    </TouchableOpacity>
                                </View>
                            ))}

                            <TouchableOpacity style={styles.buttonExercise} onPress={handleAddExercise}>
                                <MaterialCommunityIcons name="plus" size={25} color="#fff" />
                            </TouchableOpacity>

                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.buttonCancelText}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonAdd} onPress={handleAddRoutine}>
                                    <Text style={styles.buttonAddText}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("GyMate Chat")}>
                    <Ionicons name="chatbubble-outline" size={35} color="#fff" />
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