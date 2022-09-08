import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img1.jpg",
            authorImg: "/img/topChef/img1.jpeg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img4.jpg",
            authorImg: "/img/topChef/img2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img5.jpg",
            authorImg: "/img/topChef/img3.jpeg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img6.jpg",
            authorImg: "/img/topChef/img5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img10.jpg",
            authorImg: "/img/topChef/img6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img1.jpg",
            authorImg: "/img/topChef/img1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img4.jpg",
            authorImg: "/img/topChef/img2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img5.jpg",
            authorImg: "/img/topChef/img3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img6.jpg",
            authorImg: "/img/topChef/img5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img10.jpg",
            authorImg: "/img/topChef/img6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img5.jpg",
            authorImg: "/img/topChef/img3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img6.jpg",
            authorImg: "/img/topChef/img5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}