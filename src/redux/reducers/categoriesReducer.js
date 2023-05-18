export const SET_CATEGORIES="SET_CATEGORIES"


const initState = {
  categories: [],
  initialized: false,
};

export default function categoriesReducer(state = initState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
                initialized:true
            }
           
    
        default:
            return state;
           
    }
}

