import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function ChefCard({chef}) {
    return (
        <div className="chief-card">
            <img src={chef.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chef.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chef.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chef.cuisine}</b></p>
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}