import React, {useState} from 'react';
import {View} from 'react-native';
import Item from "./Item";


const Main = () => {
    const [value,setValue] = useState('')

    return (<>
        <View
            style={{
                flex:1,
                height: '100%',
                backgroundColor:"#cacfd2"
            }}
        >
            <Item>

            </Item>
        </View>
    </>)
}

export default Main;