// cette fonction reçoit les ingrédients de chaque plat et les renvoie sous forme de liste
function getIngredients(ingredientsList) {
  let list = "";
  ingredientsList.forEach((item) => {
    list += `<li><strong>${item.ingredient}</strong>${
      item.quantity || item.quantite
        ? ": " + (item.quantity || item.quantite)
        : ""
    } ${item.unit ? item.unit : ""}</li>`;
  });

  return list;
}

// Cette fonction reçoit la liste des plats qui ont passé par le paramètre et crée un modèle au niveau HTML pour chacun d'entre
export function showPlats(platsList) {
  try {
    platsList.forEach((plat) => {
      const recipeSection = document.querySelector("#plats");

      const platCard =
 `<article class="single-plat">

        <div class="plat-image">
           <img src="" alt="">     
        </div>   

        <div class="plat-content">

           <div class="plat-header">
                <div class="title">
                   <h3>${plat.name}</h3>
                </div>
                <div class="time">
                   <i class="fa-regular fa-clock"></i>
                   <span>${plat.time} min</span>
                </div>
           </div>

           <div class="plat-body">
              <div class="ingredients">
                <ul>
                   ${getIngredients(plat.ingredients)}
                </ul>
              </div>
              <div class="description">
                <span>${plat.description}</span>
              </div>
           </div>
        </div>    
 </article>`;

      recipeSection.insertAdjacentHTML("beforeend", platCard);
    });
  } catch (error) {
    console.error(error);
  }
}
