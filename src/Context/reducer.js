

import SonyHeadphone from "../images/SonyHeadphone.jfif";

export const initialState = {
  basket: [
    {
      id: "12068",
      title:
        "Sony WH1000XM3 Wireless Noise Cancelling ,Overhead Headphones, Black",
      price: 400,
      rating:4,
      image: SonyHeadphone,
    },
    {
      id: "1206898",
      title:
        "Sony WH1000XM3 Wireless Noise Cancelling ,Overhead Headphones, Black",
      price: 490,
      rating: 4,
      image: SonyHeadphone,
    },
  ],
  user:null,
};


export const getBasketTotal= (basket)=> basket?.reduce((amount,item)=> item.price + amount,0);

const  reducer = (state, action) =>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return{
                ...state,
                basket: [...state.basket,action.item],
            };
           

        case 'REMOVE_FROM_BASKET':
        //    Logic for removing item from basket
                let newBasket=[...state.basket];
                const index= state.basket.findIndex((basketItem)=> basketItem.id === action.id)

                if(index >= 0){
                    // item exist s in basket, remove it 
                    newBasket.splice(index,1);
                }
                else{
                    console.warn(
                        `cant remove product (id:${action.id}) as its not ` 
                    )
                }
            return { ...state,basket:newBasket };  
            default:
        return state;
    }
}


export default reducer;