// Toggle between Sign Up and Login
const authButton = document.getElementById("authButton");
const toggleAuth = document.getElementById("toggleAuth");
const authTitle = document.getElementById("authTitle");
const authMessage = document.getElementById("authMessage");

let isLogin = false;
let currentUser = "";

toggleAuth.addEventListener("click", () => {
  isLogin = !isLogin;
  authTitle.textContent = isLogin ? "Login" : "Sign Up";
  authButton.textContent = isLogin ? "Login" : "Sign Up";
  toggleAuth.textContent = isLogin
    ? "Don't have an account? Sign Up"
    : "Already have an account? Login";
  authMessage.textContent = "";
});

authButton.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    authMessage.textContent = "Please enter both username and password.";
    return;
  }

  currentUser = username;
  document.getElementById("currentUserName").textContent = currentUser;
  document.getElementById("authContainer").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
});

function logout() {
  currentUser = "";
  document.getElementById("authContainer").style.display = "block";
  document.getElementById("mainContent").style.display = "none";
}

const desserts = {
  Brownie: {
    cost: "$5.00 for 9 servings",
    servings: "9 squares",
    comparison: "Packaged: $3.49 for 6 brownies (Little Debbie)",
    ingredients: [
      "1/2 cup (1 stick) unsalted butter ($1.00)",
      "1 cup granulated sugar ($0.50)",
      "2 large eggs ($0.50)",
      "1/3 cup unsweetened cocoa powder ($0.60)",
      "1/2 cup all-purpose flour ($0.20)",
      "1/4 tsp salt ($0.05)",
      "1/4 tsp baking powder ($0.05)",
    ],
    recipe: `1. Preheat oven to 350°F (175°C). Grease an 8x8-inch baking dish.
2. Melt butter in a saucepan. Remove from heat and stir in sugar, eggs, and vanilla.
3. Beat in cocoa, flour, salt, and baking powder.
4. Spread batter into pan. Bake for 25–30 minutes.
5. Cool, cut into squares, and serve.`,
  },
  "Chocolate Chip Cookies": {
    cost: "$6.00 for 24 cookies",
    servings: "24 cookies",
    comparison: "Packaged: $4.00 for 18 cookies (Chips Ahoy)",
    ingredients: [
      "1 cup unsalted butter, softened ($2.00)",
      "1 cup brown sugar ($0.50)",
      "1/2 cup white sugar ($0.25)",
      "2 eggs ($0.50)",
      "2 tsp vanilla extract ($0.30)",
      "3 cups all-purpose flour ($0.60)",
      "1 tsp baking soda ($0.10)",
      "1/2 tsp salt ($0.05)",
      "2 cups semisweet chocolate chips ($1.70)",
    ],
    recipe: `1. Preheat oven to 375°F (190°C).
2. Cream together butter, sugars, and vanilla. Beat in eggs one at a time.
3. In another bowl, mix flour, baking soda, and salt. Gradually add to wet mixture.
4. Stir in chocolate chips.
5. Drop by spoonfuls onto a baking sheet. Bake 8–10 minutes until golden.
6. Cool and enjoy.`,
  },
  "Strawberry Shortcake": {
    cost: "$8.00 for 6 servings",
    servings: "6 servings",
    comparison: "Packaged: $4.99 for 6 snack cakes (Hostess)",
    ingredients: [
      "2 cups all-purpose flour ($0.40)",
      "1/4 cup sugar ($0.10)",
      "1 tbsp baking powder ($0.10)",
      "1/2 tsp salt ($0.05)",
      "1/2 cup cold butter, cubed ($1.00)",
      "2/3 cup milk ($0.30)",
      "2 cups sliced strawberries ($2.00)",
      "1/4 cup sugar for strawberries ($0.10)",
      "1 cup whipped cream ($1.95)",
    ],
    recipe: `1. Preheat oven to 425°F (220°C).
2. Mix flour, sugar, baking powder, salt. Cut in butter until crumbly.
3. Stir in milk until just combined. Drop onto baking sheet.
4. Bake 12–15 minutes. Meanwhile, mix strawberries and sugar; let sit 10 minutes.
5. Slice shortcakes, fill with strawberries and whipped cream.`,
  },
  "Lemon Bars": {
    cost: "$6.50 for 16 squares",
    servings: "16 squares",
    comparison: "Packaged: $3.99 for 8 bars (Entenmann’s)",
    ingredients: [
      "1 cup unsalted butter ($2.00)",
      "1/2 cup powdered sugar ($0.50)",
      "2 cups all-purpose flour ($0.40)",
      "4 large eggs ($1.00)",
      "1 1/2 cups sugar ($0.40)",
      "1/4 cup all-purpose flour ($0.05)",
      "2/3 cup lemon juice ($1.15)",
    ],
    recipe: `1. Preheat oven to 350°F (175°C).
2. Combine butter, powdered sugar, and 2 cups flour for crust. Press into a 9x13" pan.
3. Bake crust 20 minutes.
4. Whisk eggs, sugar, 1/4 cup flour, and lemon juice.
5. Pour over hot crust. Bake another 20 minutes.
6. Cool completely, dust with powdered sugar, and cut.`,
  },
  Tiramisu: {
    cost: "$12.00 for 9 servings",
    servings: "9 pieces",
    comparison: "Packaged: $6.00 for 6-pack (Italian Delights)",
    ingredients: [
      "6 egg yolks ($1.50)",
      "3/4 cup sugar ($0.30)",
      "1 cup mascarpone cheese ($4.00)",
      "1 1/2 cups heavy cream ($2.00)",
      "2 cups espresso or strong coffee ($0.50)",
      "1 pack ladyfingers ($2.00)",
      "2 tbsp cocoa powder ($0.20)",
      "1 tsp vanilla extract ($0.30)",
    ],
    recipe: `1. Beat egg yolks with sugar until thick (5 mins). Fold in mascarpone.
2. Whip cream to stiff peaks. Gently fold into yolk mixture.
3. Dip ladyfingers into coffee. Line dish with soaked fingers.
4. Layer cream mix, repeat layers.
5. Chill 4+ hours. Dust with cocoa powder before serving.`,
  },
  "Banana Bread": {
    cost: "$4.00 for 10 slices",
    servings: "10 slices",
    comparison: "Packaged: $3.99 for 8 slices (Sara Lee)",
    ingredients: [
      "2 ripe bananas ($0.60)",
      "1/2 cup butter ($1.00)",
      "1 cup sugar ($0.50)",
      "2 eggs ($0.50)",
      "1 1/2 cups flour ($0.30)",
      "1 tsp baking soda ($0.10)",
      "1/2 tsp salt ($0.05)",
      "1/4 cup milk ($0.20)",
    ],
    recipe: `1. Preheat oven to 350°F (175°C). Grease a loaf pan.
2. Mash bananas. Mix in butter and sugar until creamy.
3. Beat in eggs and milk.
4. Combine dry ingredients separately, then stir into banana mixture.
5. Pour into pan and bake 60 minutes. Cool and slice.`,
  },
  "Vanilla Cupcakes": {
    cost: "$6.50 for 12 cupcakes",
    servings: "12 cupcakes",
    comparison: "Packaged: $5.29 for 10 mini cakes (Little Debbie)",
    ingredients: [
      "1 1/2 cups flour ($0.30)",
      "1/2 cup butter ($1.00)",
      "1 cup sugar ($0.50)",
      "2 eggs ($0.50)",
      "1/2 cup milk ($0.20)",
      "1 tsp vanilla extract ($0.30)",
      "1 1/2 tsp baking powder ($0.10)",
      "1/4 tsp salt ($0.05)",
    ],
    recipe: `1. Preheat oven to 350°F (175°C). Line muffin tin with papers.
2. Cream butter and sugar. Beat in eggs and vanilla.
3. In separate bowl, combine dry ingredients. Mix alternately with milk.
4. Fill cups 2/3 full. Bake 18–20 minutes. Cool and frost.`,
  },
  Cheesecake: {
    cost: "$9.00 for 12 slices",
    servings: "12 slices",
    comparison: "Packaged: $5.99 for 6 slices (Philadelphia)",
    ingredients: [
      "1 1/2 cups graham cracker crumbs ($1.00)",
      "1/4 cup sugar ($0.10)",
      "1/2 cup butter, melted ($1.00)",
      "3 packages cream cheese ($4.50)",
      "3/4 cup sugar ($0.30)",
      "3 eggs ($0.75)",
      "1 tsp vanilla extract ($0.30)",
    ],
    recipe: `1. Preheat oven to 325°F (165°C). Mix crust and press into pan.
2. Beat cream cheese and sugar until smooth. Add eggs and vanilla.
3. Pour into crust. Bake 50–60 minutes.
4. Cool and refrigerate 4+ hours before serving.`,
  },
  "Carrot Cake": {
    cost: "$8.50 for 10 slices",
    servings: "10 slices",
    comparison: "Packaged: $4.99 for 6 slices (Entenmann’s)",
    ingredients: [
      "2 cups grated carrots ($1.00)",
      "1 1/2 cups sugar ($0.50)",
      "1 cup vegetable oil ($1.00)",
      "4 eggs ($1.00)",
      "2 cups flour ($0.40)",
      "2 tsp baking soda ($0.10)",
      "1 tsp cinnamon ($0.10)",
      "1/2 tsp salt ($0.05)",
      "1/2 cup chopped walnuts ($1.35)",
    ],
    recipe: `1. Preheat oven to 350°F (175°C). Grease a 9x13 pan.
2. Mix sugar, oil, and eggs. Stir in carrots and dry ingredients.
3. Fold in walnuts.
4. Pour into pan. Bake 40–45 minutes. Cool before frosting.`,
  },
  "Apple Pie": {
    cost: "$7.00 for 8 slices",
    servings: "8 slices",
    comparison: "Packaged: $5.50 for 6 mini pies (Hostess)",
    ingredients: [
      "2 pie crusts ($2.00)",
      "6 cups peeled, sliced apples ($2.50)",
      "3/4 cup sugar ($0.30)",
      "2 tbsp flour ($0.05)",
      "1 tsp cinnamon ($0.10)",
      "1 tbsp lemon juice ($0.20)",
      "1 tbsp butter ($0.10)",
    ],
    recipe: `1. Preheat oven to 425°F (220°C).
2. Combine apples with sugar, flour, cinnamon, lemon juice.
3. Fill bottom crust, dot with butter, cover with top crust.
4. Cut slits, bake 45–50 minutes. Cool before slicing.`,
  },
  "Chocolate Mousse": {
    cost: "$6.00 for 6 servings",
    servings: "6 servings",
    comparison: "Packaged: $4.49 for 4 cups (Swiss Miss)",
    ingredients: [
      "1 cup semisweet chocolate chips ($1.50)",
      "3 eggs, separated ($0.75)",
      "1/4 cup sugar ($0.10)",
      "1 cup heavy cream ($1.50)",
      "1 tsp vanilla extract ($0.30)",
    ],
    recipe: `1. Melt chocolate chips and cool slightly.
2. Beat egg yolks and stir into chocolate with vanilla.
3. Whip cream to soft peaks. Fold into chocolate.
4. Beat egg whites and sugar to stiff peaks. Fold into mousse.
5. Chill 2+ hours before serving.`,
  },
};

const select = document.getElementById("dessertSelect");
Object.keys(desserts).forEach((dessert) => {
  const option = document.createElement("option");
  option.value = dessert;
  option.textContent = dessert;
  select.appendChild(option);
});

select.addEventListener("change", () => {
  const dessert = desserts[select.value];
  const dessertInfo = document.getElementById("dessertInfo");

  if (dessert) {
    document.getElementById(
      "dessertCost"
    ).textContent = `Cost: ${dessert.cost}`;
    document.getElementById(
      "servingsCount"
    ).textContent = `Servings: ${dessert.servings}`;
    document.getElementById(
      "dessertComparison"
    ).textContent = `Packaged Comparison: ${dessert.comparison}`;
    document.getElementById("ingredientsList").innerHTML = dessert.ingredients
      .map((i) => `<li>${i}</li>`)
      .join("");
    document.getElementById("recipeText").textContent = dessert.recipe;
    dessertInfo.style.display = "block";
  } else {
    dessertInfo.style.display = "none";
  }

  document.getElementById("dessertImage").style.display = "none";
});
