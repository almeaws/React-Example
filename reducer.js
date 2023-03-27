import { auth } from "./FirebaseLocal";

export const initialState ={
    basket: [],
    user: null
};

export const getBaseketTotal = (basket) => basket?.reduce((amount,item)=>amount+item.price,0);

const reducer = (state,action) => {
    //console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.item.id
                );
            //console.log("index upon removal",index);
            let newBasket = [...state.basket];
            if (index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn('couldnt find index for', action.id,"index is", index )
            }
            return{
                ...state,
                basket:newBasket
            };
        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[]
            }
        case 'SET_USER':
            return{
                ...state,user:[action.user]
            };
        
            default:
                return state;
            }
    
};

export default reducer;