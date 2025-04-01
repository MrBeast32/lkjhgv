document.addEventListener("DOMContentLoaded", function () {
  const dessertSelector = document.getElementById("dessertSelector");
  const dessertInfo = document.getElementById("dessertInfo");
  const dessertName = document.getElementById("dessertName");
  const dessertCost = document.getElementById("dessertCost");
  const servingsCount = document.getElementById("servingsCount");
  const ingredientsList = document.getElementById("ingredientsList");
  const recipeText = document.getElementById("recipeText");
  const allParagraphs = document.getElementsByTagName("p");
  const dessertImage = document.getElementById("dessertImage");
  const reactionMessage = document.getElementById("reactionMessage");
  
  const DEFAULT_SERVINGS = 4;
  
  dessertSelector.addEventListener("change", function () {
    const selectedDessert = dessertSelector.value;
    if (!selectedDessert) {
      dessertInfo.style.display = "none";
      return;
    }

    const dessertData = {
      Brownies: { cost: 10, servings: DEFAULT_SERVINGS, ingredients: ["Flour", "Cocoa", "Sugar", "Butter"], recipe: "Mix ingredients and bake at 350°F for 25 minutes.", image: "brownie.jpg" },
      Cheesecake: { cost: 15, servings: 6, ingredients: ["Cream Cheese", "Sugar", "Eggs", "Graham Crackers", "Butter"], recipe: "Blend ingredients, pour over crust, and bake at 325°F for 45 minutes.", image: "cheesecake.jpg" },
      Cupcakes: { cost: 12, servings: 12, ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Milk"], recipe: "Mix ingredients, pour into cupcake liners, and bake at 350°F for 20 minutes.", image: "cupcakes.jpg" }
    };

    if (dessertData[selectedDessert]) {
      dessertName.textContent = selectedDessert;
      dessertCost.textContent = `Average Cost: $${dessertData[selectedDessert].cost}`;
      servingsCount.textContent = dessertData[selectedDessert].servings;
      ingredientsList.innerHTML = "";
      
      dessertData[selectedDessert].ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });
      
      recipeText.textContent = dessertData[selectedDessert].recipe;
      dessertImage.src = dessertData[selectedDessert].image;
      dessertImage.style.display = "block";
      dessertInfo.style.display = "block";
    } else {
      dessertInfo.style.display = "none";
    }
  });

  function multiplyNumbers(a, b) {
    return a * b;
  }
  console.log("Multiplication result:", multiplyNumbers(4, 5));

  function greetUser(name) {
    return `Hello, ${name}! Welcome to our dessert site!`;
  }
  console.log(greetUser("Visitor"));
  
  // Onclick event: Show a reaction when the image is clicked
  dessertImage.addEventListener("click", function () {
    reactionMessage.textContent = "Yummy choice! 🍰";
    setTimeout(() => {
      reactionMessage.textContent = "";
    }, 2000);
  });
  
  // Onload event: Show a greeting message when the page loads
  window.onload = function () {
    alert("Welcome to our dessert selection page! 🍪");
  };
  
  // Onmouseover event: Change the text color when hovering over the recipe
  recipeText.addEventListener("mouseover", function () {
    recipeText.style.color = "red";
  });
  
  recipeText.addEventListener("mouseout", function () {
    recipeText.style.color = "black";
  });
  
  // SetInterval to update a message every few seconds
  let counter = 0;
  const interval = setInterval(() => {
    console.log(`You have been browsing for ${++counter} seconds`);
    if (counter >= 10) {
      clearInterval(interval);
      console.log("Hope you found your favorite dessert!");
    }
  }, 1000);
});
