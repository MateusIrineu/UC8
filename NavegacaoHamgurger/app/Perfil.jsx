import{ Text, View, Image } from 'react-native';
 import { styles } from '../styles/styles';

export default function Perfil() {
    return (
        <View style={styles.containerPerfil}>
            <Image 
                source={require('../assets/mago.png')} 
                style={styles.avatar}
            />
            <Text style={styles.nomeUsuario}>Jadson Danilo</Text>
            <Text style={styles.descricaoUsuario}>
                Aqui estão suas informações de perfil.
            </Text>
            <View style={styles.divisor}/>
        </View>
    );
}