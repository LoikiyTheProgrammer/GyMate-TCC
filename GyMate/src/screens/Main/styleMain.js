import { StyleSheet } from "react-native";
import { width, height } from "../../constants/dimensions";

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

    mainContainer: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },

    navContainer: {
        width: "90%",
        height: "20%",
        alignItems: "center",
    },

    buttonRoutine: {
        width: "100%",
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    buttonRoutineText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    buttonAI: {
        width: "100%",
        height: 60,
        margin: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    buttonAIText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    scrollviewContainer: {
        width: "90%",
        height: "70%",
        alignItems: "center",
        justifyContent: "center",
    },

    scrollviewText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        alignSelf: "flex-start",
    },

    scrollview: {
        width: "100%",
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