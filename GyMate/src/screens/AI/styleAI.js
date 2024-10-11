import { StyleSheet } from "react-native";
import { width, height} from "../../constants/dimensions";

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

    welcome: {
        width: "90%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    welcomeText: {
        fontSize: 16,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    rotine: {
        width: "90%",
        height: "60%",
        paddingHorizontal: "5%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#1179e2",
        backgroundColor: "#fff",
    },

    rotineText: {
        fontSize: 16,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
    },

    gemini: {
        width: "90%",
        height: "20%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },

    geminiInput: {
        width: "80%",
        height: 60,
        paddingLeft: "5%",
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: "#1179e2",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    geminiButton: {
        width: "20%",
        height: 60,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
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