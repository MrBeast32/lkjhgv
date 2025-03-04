document.addEventListener("DOMContentLoaded", function () {
  const dessertSelector = document.getElementById("dessertSelector");
  const dessertInfo = document.getElementById("dessertInfo");
  const dessertName = document.getElementById("dessertName");
  const dessertCost = document.getElementById("dessertCost");
  const servingsCount = document.getElementById("servingsCount");
  const ingredientsList = document.getElementById("ingredientsList");
  const recipeText = document.getElementById("recipeText");

  const desserts = {
      "Brownies": {
          cost: "$5",
          servings: "12",
          ingredients: ["Flour", "Sugar", "Cocoa Powder", "Butter", "Eggs"],
          recipe: "Mix ingredients and bake at 350°F for 25 minutes."
      },
      "Cheesecake": {
          cost: "$8",
          servings: "8",
          ingredients: ["Cream Cheese", "Sugar", "Eggs", "Graham Cracker Crust"],
          recipe: "Blend ingredients and bake at 325°F for 45 minutes."
      },
      "Cupcakes": {
          cost: "$4",
          servings: "6",
          ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Milk"],
          recipe: "Mix and bake at 350°F for 20 minutes."
      },
      "Ice Cream": {
          cost: "$6",
          servings: "4",
          ingredients: ["Milk", "Sugar", "Vanilla Extract"],
          recipe: "Churn ingredients in an ice cream maker until frozen."
      },
      "Cookies": {
          cost: "$3",
          servings: "10",
          ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Chocolate Chips"],
          recipe: "Mix ingredients and bake at 375°F for 12 minutes."
      },
      "Donuts": {
          cost: "$7",
          servings: "6",
          ingredients: ["Flour", "Sugar", "Yeast", "Milk", "Eggs"],
          recipe: "Fry dough until golden brown, then glaze."
      },
      "Macarons": {
          cost: "$10",
          servings: "8",
          ingredients: ["Almond Flour", "Powdered Sugar", "Egg Whites", "Food Coloring"],
          recipe: "Whisk egg whites, fold into dry ingredients, bake at 300°F."
      },
      "Pies": {
          cost: "$9",
          servings: "8",
          ingredients: ["Pie Crust", "Fruit Filling", "Sugar", "Butter"],
          recipe: "Fill crust, bake at 375°F for 45 minutes."
      },
      "Tiramisu": {
          cost: "$12",
          servings: "6",
          ingredients: ["Ladyfingers", "Mascarpone Cheese", "Coffee", "Cocoa Powder"],
          recipe: "Layer ingredients, refrigerate for 4 hours before serving."
      }
  };

  dessertSelector.addEventListener("change", function () {
      const selectedDessert = dessertSelector.value;
      if (selectedDessert && desserts[selectedDessert]) {
          const dessert = desserts[selectedDessert];
          dessertName.textContent = selectedDessert;
          dessertCost.textContent = "Cost: " + dessert.cost;
          servingsCount.textContent = dessert.servings;
          ingredientsList.innerHTML = dessert.ingredients.map(ing => `<li>${ing}</li>`).join("");
          recipeText.textContent = dessert.recipe;
          dessertInfo.style.display = "block";
      } else {
          dessertInfo.style.display = "none";
      }
  });

  // Form validation
  document.querySelector("form").addEventListener("submit", function (event) {
      const nameInput = document.getElementById("name");
      const messageInput = document.getElementById("message");
      if (!nameInput.value || !messageInput.value) {
          alert("Please fill in all required fields.");
          event.preventDefault();
      }
  });
});
