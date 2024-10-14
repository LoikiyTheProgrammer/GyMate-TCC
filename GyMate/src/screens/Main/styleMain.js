import { StyleSheet } from "react-native";
import { width, height } from "../../constants/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    BackgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    header: {
        width: "90%",
        height: "10%",
        marginTop: height*0.05,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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

    main: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },

    nav: {
        width: "90%",
        height: "30%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    navText: {
        fontSize: 20,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    buttonRoutine: {
        width: "90%",
        height: 60,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
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

    buttonRoutineImage: {
        width: "100%",
        height: "100%",
        borderRadius: 18,
        position: "absolute",
    },

    buttonAI: {
        width: "90%",
        height: 60,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    buttonAIText: {
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#1179e2",
        textAlign: "center",
    },

    boxScrollview: {
        width: "90%",
        height: "60%",
        alignItems: "center",
        justifyContent: "center",
    },

    scrollviewTitle: {
        alignSelf: "flex-start",
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
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