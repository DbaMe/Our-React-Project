import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Cooking is the art of creating recipes by adding the right spices to make the food taste good. Great dishes differ all across the world. Here are a few chef quotes for you to get inspired by.</p>
                <a className="view-btn" href="https://www.allrecipes.com/" target="_blank">ALL RECIPE</a>
            </div>
        </div>
    )
}