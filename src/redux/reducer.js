import { ADD_FAV, REMOVE_FAV, } from "./action-type";

const  initialState = {
    myFavorites: [],
    allCharacters: []
}

function compareAsc(a, b) {
    return a.id - b.id;
}

function compareDesc(a, b) {
    return b.id - a.id;
}

function rootReducer (state= initialState, action){
    switch(action.type){
        case ADD_FAV:
            const newCharacter = action.payload;

            return {
                ...state,
                myFavorites: [...state.myFavorites, newCharacter],
                allCharacters: [...state.allCharacters, newCharacter ]
            }

            case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload) 
            }

            case "FILTER":
                const genreToFilter = action.payload;
                const filteredCharacters = state.allCharacters.filter(char => char.gender === genreToFilter);

                return {
                    ...state,
                    myFavorites: filteredCharacters 
            }


            case "ORDER":
                 const orderType = action.payload;
                 const sortedCharacters = [...state.myFavorites];

                  if (orderType === "A") {
                  sortedCharacters.sort(compareAsc);
                  } else if (orderType === "D") {
                   sortedCharacters.sort(compareDesc);
                 }

                return {
                    ...state,
                    myFavorites: sortedCharacters
            }

            default:
                return state

    }

}
export default rootReducer;