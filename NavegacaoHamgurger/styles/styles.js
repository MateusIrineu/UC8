import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // ESTILO DO HOME
    containerHome: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    // ESTILO DO PERFIL
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 16,
        color: "#e94569",
    },
    // ESTILO DO PERFIL
    subTitulo: {
        fontSize: 16,
        marginBottom: 24,
        color: "#555",
    },
    // ESTILO DO AVATAR
    avatar:{
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 20,
    },
    // ESTILO DO PERFIL
    perfilContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    // ESTILO DO USUÁRIO
    nomeUsuario: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#e94569",
        textAlign: 'center',
    },
    // ESTILO DA DESCRIÇÃO DO USUÁRIO
    descricaoUsuario: {
        fontSize: 16,
        color: "#555",
        textAlign: 'center',
        marginBottom: 20,
    },
    // DIVISOR
    divisor: {
        height: 1,
        width: '80%',
        backgroundColor: '#ccc',
        marginVertical: 20,
    },
})