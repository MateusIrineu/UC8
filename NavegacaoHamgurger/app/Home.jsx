import { View, Text, Image } from 'react-native';
 import { styles } from '../styles/styles';

export default function Home() {
    return (
        <View style={styles.containerHome} >
            <Text style={styles.titulo} >Bem-vindo ao app!</Text>
            <Image 
                source={{ uri:'https://i.pravatar.cc/300'  }} style={styles.avatar}          
            />
            <Text style={styles.subTitulo}>
                Navegue usando menu lateral
            </Text>
        </View>
    );
}


