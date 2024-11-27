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
        width: "100%",
        height: "100%",
        position: "absolute",
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

    mainContainer: {
        width: "100%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
    },

    welcomeContainer: {
        width: "90%",
        height: "10%",
        paddingHorizontal: "5%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1179e2",
    },

    welcomeText: {
        fontSize: 20,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    routineContainer: {
        width: "90%",
        height: "80%",
        borderWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: "#1179e2",
        backgroundColor: "#fff",
    },

    scrollView: {
        paddingHorizontal: "5%",
    },

    buttonCreate: {
        width: "100%",
        height: 60,
        borderRadius: 20,
        marginVertical: "2%",
        paddingHorizontal: "5%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#b9b9b9",
    },

    buttonCreateText: {
        fontSize: 15,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
    },

    routine: {
        width: "100%",
        borderRadius: 10,
        marginVertical: "2%",
        padding: "2%",
        justifyContent: "center",
        backgroundColor: "#b9b9b9",
    },

    routineTitle: {
        alignSelf: "center",
        fontSize: 20,
        fontFamily: "Lexend Bold",
        color: "#fff",
    },

    routineText: {
        margin: 1,
        fontSize: 15,
        fontFamily: "Lexend Regular",
        color: "#fff",
    },

    buttonDeleteroutine: {
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
    },

    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    modalContent: {
        width: "85%",
        padding: "5%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    modalText: {
        width: "100%",
        fontSize: 25,
        fontFamily: "Lexend Bold",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#1179e2"
    },

    modalInput: {
        width: "100%",
        height: 50,
        marginVertical: 5,
        paddingHorizontal: "5%",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    listContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    listInput: {
        width: "45%",
        marginVertical: 5,
        paddingHorizontal: "5%",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        fontSize: 15,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        backgroundColor: "#fff",
    },

    listNumberInput: {
        width: "20%",
        marginVertical: 5,
        paddingHorizontal: "5%",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#1179e2",
        fontSize: 15,
        fontFamily: "Lexend Regular",
        color: "#1179e2",
        textAlign: "center",
        backgroundColor: "#fff",
    },

    buttonDelete: {
        alignItems: "center",
        justifyContent: "center",
    },

    buttonExercise: {
        width: "100%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b9b9b9",
    },
    
    modalButtonContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    buttonCancel: {
        width: "45%",
        height: 40,
        marginVertical: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },

    buttonCancelText: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
        textAlign: "center",
    },

    buttonAdd: {
        width: "45%",
        height: 40,
        marginVertical: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
    },

    buttonAddText: {
        fontSize: 20,
        fontFamily: "Lexend Regular",
        color: "#fff",
        textAlign: "center",
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