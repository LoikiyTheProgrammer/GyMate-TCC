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

    exerciseModal: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
    },

    exerciseJPG: {
        width: "90%",
        height: "90%",
        borderWidth: 2,
        borderRadius: 10,
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
        alignItems: "center",
        justifyContent: "center",
    },

    modalCover: {
        width: "100%",
        height: "25%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    exerciseModal: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        position: "absolute",
    },

    exerciseJPG2: {
        width: "50%",
        height: "100%",
    },

    modalContent: {
        width: "100%",
        height: "45%",
        backgroundColor: "#1179e2",
    },

    modalTitle: {
        paddingHorizontal: "5%",
        fontSize: 22,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "justify",
    },

    modalText: {
        paddingHorizontal: "5%",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
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