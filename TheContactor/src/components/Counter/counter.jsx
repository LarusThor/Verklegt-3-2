import { View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../../redux/features/counter/counter-slice';
import { changeToBob, changeToSteve } from '../../redux/features/counter/counter-slice';

export function Counter() {

    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        console.log(state);
        return state.status.value;
    });


    return (

        <View>
            <Text>{counter}</Text>
            <Button title="Bob" onPress={() => dispatch(changeToBob())}>Bob</Button>
            <Button title="Steve" onPress={() => dispatch(changeToSteve())}>Steve</Button>
            <Button title="Increment" onPress={() => dispatch(incrementCounter())}>Increment +</Button>
        </View>

    );

};



