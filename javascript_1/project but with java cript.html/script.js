document.addEventListener("DOMContentLoaded", function () {
    const dessertSelector = document.getElementById("dessertSelector");
    const dessertInfo = document.getElementById("dessertInfo");
    const dessertName = document.getElementById("dessertName");
    const dessertCost = document.getElementById("dessertCost");
    const servingsCount = document.getElementById("servingsCount");
    const ingredientsList = document.getElementById("ingredientsList");
    const recipeText = document.getElementById("recipeText");
    
    dessertSelector.addEventListener("change", function () {
      const selectedDessert = dessertSelector.value;
      if (!selectedDessert) {
        dessertInfo.style.display = "none";
        return;
      }
  
      // Dessert details including cost and servings
      const dessertData = {
        Brownies: { cost: 10, servings: 4, ingredients: ["Flour", "Cocoa", "Sugar", "Butter"], recipe: "Mix ingredients and bake at 350°F for 25 minutes." },
        Cheesecake: { cost: 15, servings: 6, ingredients: ["Cream Cheese", "Sugar", "Eggs", "Graham Crackers"], recipe: "Combine ingredients and bake at 325°F for 45 minutes." },
        Cupcakes: { cost: 12, servings: 6, ingredients: ["Flour", "Sugar", "Eggs", "Butter"], recipe: "Mix, pour into molds, and bake at 350°F for 20 minutes." },
        "Ice Cream": { cost: 8, servings: 5, ingredients: ["Milk", "Sugar", "Vanilla"], recipe: "Mix ingredients and freeze while churning." },
        Cookies: { cost: 6, servings: 12, ingredients: ["Flour", "Sugar", "Butter", "Eggs"], recipe: "Mix and bake at 375°F for 12 minutes." },
        Donuts: { cost: 9, servings: 8, ingredients: ["Flour", "Yeast", "Sugar", "Milk"], recipe: "Fry dough rings until golden brown." },
        Macarons: { cost: 20, servings: 10, ingredients: ["Almond Flour", "Sugar", "Egg Whites"], recipe: "Mix, pipe onto a sheet, and bake at 300°F for 15 minutes." },
        Pies: { cost: 14, servings: 8, ingredients: ["Flour", "Butter", "Sugar", "Fruit"], recipe: "Prepare crust, add filling, and bake at 375°F for 40 minutes." },
        Tiramisu: { cost: 18, servings: 6, ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Cocoa Powder"], recipe: "Layer ingredients and chill overnight." }
      };
  
      const dessert = dessertData[selectedDessert];
      const costPerServing = dessert.cost / dessert.servings;
      const increasedCost = dessert.cost + 2;
      const discountedCost = dessert.cost - 1;
      
      // Logical Operator Example
      const isExpensive = dessert.cost > 12;
      const hasEnoughServings = dessert.servings >= 4;
      
      dessertName.textContent = selectedDessert;
      dessertCost.innerHTML = `Average Cost: $${dessert.cost}`;
      servingsCount.textContent = dessert.servings;
      ingredientsList.innerHTML = dessert.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("");
      recipeText.textContent = dessert.recipe;
      dessertInfo.style.display = "block";
      
      dessertCost.innerHTML += `<br>Cost per Serving: $${costPerServing.toFixed(2)}`;
      dessertCost.innerHTML += `<br>Increased Cost (with extras): $${increasedCost.toFixed(2)}`;
      dessertCost.innerHTML += `<br>Discounted Cost: $${discountedCost.toFixed(2)}`;
      
      if (isExpensive || hasEnoughServings) {
        console.log(`${selectedDessert} is either expensive or serves at least 4 people.`);
        dessertCost.innerHTML += `<br><strong>Note:</strong> This dessert is either premium or has enough servings!`;
    }
      
      // JavaScript Output Techniques
      console.log(`Selected dessert: ${selectedDessert}, Cost: $${dessert.cost}, Servings: ${dessert.servings}`);
      const outputDiv = document.createElement("div");
      outputDiv.textContent = `Console Output: Selected ${selectedDessert} - Cost: $${dessert.cost}, Servings: ${dessert.servings}`;
      outputDiv.style.color = "blue";
      document.body.appendChild(outputDiv);
    });
  });
  