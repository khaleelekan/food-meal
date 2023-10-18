import { createContext,useState } from "react";

export const FavoritesContext = createContext({
    ids:[],
    addFavorites: () => {},
    removeFavorites: () => {}
});

function FavoritesContextProvider ({children}) {
    const [favoriteMealIds, setFavoriteMealsIds] = useState([]);
    function addFavorites (id){
        setFavoriteMealsIds((currentMeals)=>{
            return  [...currentMeals, id]
        }
    )
    }
    
    function removeFavorites (id){
        setFavoriteMealsIds((current)=>current.filter(mealId => mealId !== id));
    }
    const value = {
        ids: favoriteMealIds,
        addFavorites: addFavorites,
        removeFavorites: removeFavorites
    }
    return(<FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
    )
}
export default FavoritesContextProvider;



