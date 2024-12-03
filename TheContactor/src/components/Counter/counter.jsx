import { View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeToB, changeToC, incrementCounter } from '../../redux/features/counter/counter-slice';

export function Counter() {

    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        console.log(state);
        return state.counter.value;
    });


    return (

        <View>
            <Text>{counter}</Text>
            <Button title="Increment" onPress={() => dispatch(changeToB())}>Increment +</Button>
        </View>

    );

};



