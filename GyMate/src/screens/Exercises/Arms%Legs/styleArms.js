import { StyleSheet } from "react-native";
import { width, height } from "../../../constants/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    header: {
        width: "100%",
        height: "15%",
        paddingHorizontal: "5%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1179e2",
    },

    headerTitle: {
        fontSize: 40,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    buttonNotification: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    mainContainer: {
        width: "100%",
        height: "80%",
        paddingVertical: "10%",
        alignItems: "center",
        justifyContent: "space-between",
    },

    cover: {
        width: "90%",
        height: "45%",
        alignItems: "center",
        justifyContent: "center",
    },

    coverImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        position: "absolute",
    },

    coverTitle: {
        fontSize: 30,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    scrollviewContainer: {
        width: "90%",
        height: "50%",
    },

    exerciseContainer: {
        width: "100%",
        height: 250,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    exercise: {
        width: "45%",
        height: "100%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#1179e2",
    },

    buttonExercise: {
        width: "100%",
        height: "85%",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    exerciseGif: {
        width: "90%",
        height: "90%",
        borderRadius: 10,
        position: "absolute",
    },

    exerciseGif2: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    buttonExerciseText: {
        height: "15%",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
        textAlign: "center",
    },

    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    buttonClose: {
        width: 50,
        height: 50,
        margin: 5,
        borderColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },

    modalCover: {
        width: "100%",
        height: "50%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    modalContent: {
        width: "100%",
        height: "40%",
        backgroundColor: "#1179e2",
    },

    modalTitle: {
        paddingHorizontal: "5%",
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#000",
        textAlign: "justify",
    },

    modalText: {
        paddingHorizontal: "5%",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#000",
        textAlign: "justify",
    },

    footer: {
        width: "100%",
        height: "5%",
        paddingHorizontal: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1179e2",
    },

    footerButton: {
        width: 50,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;