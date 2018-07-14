
import { FETCH_WEATHER } from '../actions';


export default function (state = [], action) {
    console.log('received action', action);
    switch(action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);

            // Better way to do this in es6
            return [action.payload.data, ...state];
    }
    
    return state;

}