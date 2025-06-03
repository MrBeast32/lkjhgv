const auth = firebase.auth();

const authTitle = document.getElementById("authTitle");
const authButton = document.getElementById("authButton");
const toggleAuth = document.getElementById("toggleAuth");
const authMessage = document.getElementById("authMessage");
const mainContent = document.getElementById("mainContent");
const authContainer = document.getElementById("authContainer");
const currentUserName = document.getElementById("currentUserName");

const dessertData = {
  Brownie: {
    image: "",
    cost: "$5.99",
    servings: "2 servings",
    comparison: "Richer than chocolate cake 🍫",
    ingredients: [
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1/3 cup cocoa powder",
      "1/2 cup flour",
      "1/4 tsp salt",
      "1/4 tsp baking powder",
    ],
    recipe:
      "Preheat oven to 350°F (175°C). Melt butter and mix in sugar, eggs, and vanilla. Stir in cocoa, flour, salt, and baking powder. Bake for 25-30 mins.",
  },
  "Pineapple Upside-Down Sponge": {
    image: "",
    cost: "$7.99",
    servings: "3 servings",
    comparison: "Just like SpongeBob’s house! 🍍",
    ingredients: [
      "1/2 cup butter",
      "2/3 cup brown sugar",
      "1 can pineapple slices",
      "Maraschino cherries",
      "1 cup flour",
      "1 tsp baking powder",
      "2 eggs",
    ],
    recipe:
      "Place butter and sugar in pan. Layer pineapples and cherries. Mix batter and pour over. Bake at 350°F for 35 mins. Flip and serve.",
  },
  "Jellyfish Jam Donuts": {
    image: "",
    cost: "$6.50",
    servings: "4 servings",
    comparison: "Filled with jellyfish jelly 🪼",
    ingredients: [
      "2 cups flour",
      "2 tbsp sugar",
      "1 tsp yeast",
      "1/2 cup milk",
      "1 egg",
      "1/4 cup jelly",
      "Oil for frying",
    ],
    recipe:
      "Mix dough and let rise. Shape and fry donuts. Fill with jelly and dust with sugar.",
  },
  "Bikini Bottom Banana Pudding": {
    image: "",
    cost: "$5.49",
    servings: "2 servings",
    comparison: "Smooth and sandy 🍌🏖️",
    ingredients: [
      "1 banana",
      "1 cup vanilla pudding",
      "Whipped cream",
      "Vanilla wafers",
    ],
    recipe:
      "Layer pudding, wafers, banana slices. Chill and top with whipped cream.",
  },
  "Gary’s Gooey Goo Cake": {
    image: "",
    cost: "$8.25",
    servings: "6 servings",
    comparison: "Snail-approved slimey treat 🐌",
    ingredients: [
      "1 box chocolate cake mix",
      "1 package cream cheese",
      "1/2 cup butter",
      "2 cups powdered sugar",
    ],
    recipe:
      "Bake cake. Mix gooey topping. Spread over and bake again briefly. Cool before serving.",
  },
  "Krabby Patty Cookie Sandwiches": {
    image: "",
    cost: "$6.99",
    servings: "3 servings",
    comparison: "Secret recipe? Maybe... 🍔🍪",
    ingredients: [
      "Chocolate chip cookies",
      "Vanilla ice cream",
      "Red and green food coloring",
      "White chocolate chips",
    ],
    recipe:
      "Color vanilla ice cream to look like patty layers. Sandwich between cookies and freeze.",
  },
  "Bubble Bass Cheesecake Bites": {
    image: "",
    cost: "$7.25",
    servings: "5 servings",
    comparison: "Bigger than a sea bear 🧀",
    ingredients: [
      "1 cup graham cracker crumbs",
      "2 tbsp butter",
      "8 oz cream cheese",
      "1/4 cup sugar",
      "1 egg",
    ],
    recipe:
      "Make crust with crumbs and butter. Mix filling and bake in mini muffin pans.",
  },
  "Chum Bucket Gelatin Cups": {
    image: "",
    cost: "$3.99",
    servings: "2 servings",
    comparison: "Gross in the show. Sweet in real life! 💀",
    ingredients: [
      "1 packet flavored gelatin",
      "1 cup hot water",
      "1 cup cold water",
      "Candy worms",
    ],
    recipe:
      "Prepare gelatin. Pour into cups with candy worms. Chill until firm.",
  },
  "Mermaid Man Meringue": {
    image: "",
    cost: "$4.25",
    servings: "3 servings",
    comparison: "Soft as a jellyfish’s hug 🧜‍♂️",
    ingredients: [
      "2 egg whites",
      "1/2 cup sugar",
      "1/4 tsp cream of tartar",
      "Food coloring",
    ],
    recipe:
      "Whip egg whites with sugar until stiff. Pipe into shapes. Bake at 200°F for 1.5 hours.",
  },
  "Plankton’s Evil Eclairs": {
    image: "",
    cost: "$6.75",
    servings: "4 servings",
    comparison: "Small, sneaky, and delicious 😈",
    ingredients: [
      "1/2 cup butter",
      "1 cup water",
      "1 cup flour",
      "4 eggs",
      "1 cup pastry cream",
      "Chocolate glaze",
    ],
    recipe: "Make choux dough, bake eclairs, fill with cream, top with glaze.",
  },
};

let isLoginMode = false;

toggleAuth.addEventListener("click", () => {
  isLoginMode = !isLoginMode;
  authTitle.textContent = isLoginMode ? "Login" : "Sign Up";
  authButton.textContent = isLoginMode ? "Login" : "Sign Up";
  toggleAuth.textContent = isLoginMode
    ? "Don't have an account? Sign Up"
    : "Already have an account? Login";
  authMessage.textContent = "";
});

authButton.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    authMessage.textContent = "Please fill out both fields.";
    return;
  }

  const email = `${username}@dessertapp.com`;

  if (isLoginMode) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => showMainContent(username))
      .catch((error) => (authMessage.textContent = error.message));
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => showMainContent(username))
      .catch((error) => (authMessage.textContent = error.message));
  }
});

function showMainContent(username) {
  currentUserName.textContent = username;
  authContainer.style.display = "none";
  mainContent.style.display = "block";
}

function logout() {
  auth.signOut().then(() => {
    mainContent.style.display = "none";
    authContainer.style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
}
window.logout = logout;

document
  .getElementById("dessertSelect")
  .addEventListener("change", function () {
    const selected = this.value;
    const dessert = dessertData[selected];

    if (dessert) {
      document.getElementById("dessertImage").src = dessert.image;
      document.getElementById("dessertCost").textContent =
        "Cost: " + dessert.cost;
      document.getElementById("servingsCount").textContent = dessert.servings;
      document.getElementById("dessertComparison").textContent =
        dessert.comparison;

      const ingredientsList = document.getElementById("ingredientsList");
      ingredientsList.innerHTML = "";
      dessert.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      document.getElementById("recipeText").textContent = dessert.recipe;
      document.getElementById("dessertInfo").style.display = "block";
    } else {
      document.getElementById("dessertInfo").style.display = "none";
    }
  });
