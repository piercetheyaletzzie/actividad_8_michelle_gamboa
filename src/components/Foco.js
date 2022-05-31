import Rect, { useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const Foco = () => {
    const [estatus, setEstatus] = useState(false);
    return(
        <View>
            <TouchableOpacity onPress={() => setEstatus(!estatus)}>
                <Image source={
                    estatus ? require('../../img/focoOn.png')
                            : require('../../img/focoOff.png') }
                            style= {{width: 50, height: 50}}
                />

            </TouchableOpacity>
        </View>
    )
}
export default Foco