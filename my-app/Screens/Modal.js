import { 
    View, 
    Text, 
    Image,
    ImageBackground, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import useAuth from "../CustomHooks/useAuth";
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
const Modal = () => {
    const navigation=useNavigation();
    const logoImage2 = require('../assets/pictures/OmniSwipelogo2.jpg');
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const {user} = useAuth();

    return (  
        <View style={styles.container}>
            <View style={styles.image}>
            <Image source={logoImage2} />
            </View>
            <Text style={styles.welcomeText}>
                Welcome User
            </Text>
            <Text style={styles.welcomeText}>
                Its time to create your profile
            </Text>
            <Text style={styles.stepText}>
                Step 1: Profile Picture
            </Text>
            <TextInput
                placeholder="Enter your PFP URL"
                placeholderTextColor={"white"}
                style={styles.input}
            />

            <Text style={styles.stepText}>
                Step 2: Occupation
            </Text>
            <TextInput
                placeholder="What do you do?"
                placeholderTextColor={"white"}
                style={styles.input}
            />

            <Text style={styles.stepText}>
                Step 3: Age
            </Text>
            <TextInput
                placeholder="Enter"
                placeholderTextColor={"white"}
                style={styles.input}
            />
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Update Profile
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#D8955E',
        width: 256,
        height: 64,
        borderRadius:15,
        paddingBottom: 80,
        marginTop:50,
    },
    buttonText:{
       textAlign: 'center',
       paddingTop: 30,
       paddingBottom:30,
       color: 'white'
    },

    image:{
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(51, 51, 51, 1)',
    },
    welcomeText: {
        color: 'gray',
        fontSize: 30,
        textAlign: 'center'
    },
    stepText:{
        color: '#D8955E',
        textAlign: 'center',
        fontSize: 25,
        paddingTop:10
    },
    input:{
        textAlign:'center',
        paddingTop: 10,
        paddingBottom:10,
    }

});
export default Modal;