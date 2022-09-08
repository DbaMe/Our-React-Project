import ChefCard from "./ChefCard"

export default function ChefsSection(){
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/img/topChef/img1.jpeg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Ranbir Brar",
            img: "/img/topChef/img2.jpg",
            recipesCount: "05",
            cuisine: "Indian",
        },
        {
            name: "Erich Maria",
            img: "/img/topChef/img3.jpeg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/img/topChef/img4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/img/topChef/img5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/img/topChef/img6.jpg",
            recipesCount: "04",
            cuisine: "Japanese"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chiefs-container">
                
                { chefs.map(chef => <ChefCard key={chef.name} chef={chef} />) }
            </div>
        </div>
    )
}