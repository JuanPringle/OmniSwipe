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

const Modal = () => {

    const {user} = useAuth();

    return (  
        <View>
            <Text>
                Welcome {user.displayName}!
                Its time to create your profile
            </Text>

            <Text>
                Step 1: Profile Picture
            </Text>
            <TextInput
                placeholder="Enter your PFP Url"
            />

            <Text>
                Step 2: Occupation
            </Text>
            <TextInput
                placeholder="What do you do?"
            />

            <Text>
                Step 3: Age
            </Text>
            <TextInput
                placeholder="Enter "
            />
        </View>
    );
}
export default Modal;