import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    miniatura: {
        width: '100%',
        aspectRatio: 16 / 9
    },
    contenedorDuracion: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    duracion: {
        color: 'white',
        fontWeight: 'bold'
    },
    tarjetaVideo: {

    },
    foto: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    filaTitulo: {
        flexDirection: 'row',
        padding: 10
    },
    contenedorMedio: {
        marginHorizontal: 10,
        flex: 1
    },
    titulo: {
        fontSize: 15,
        fontWeight: "500",
    },
    subtitulo: {
        fontSize: 15,
        fontWeight: "400",
        color: 'grey'
    }
})

export default estilos;