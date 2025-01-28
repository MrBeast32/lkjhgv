document.getElementById('dessertSelector').addEventListener('change', function () {
  const dessertDetails = {
      Brownies: {
          storeCost: '$2.50',
          homeCost: '$1.50',
          ingredients: [
              '1/2 cup unsalted butter',
              '1 cup granulated sugar',
              '2 large eggs',
              '1/3 cup cocoa powder',
              '1/2 cup all-purpose flour',
              '1/4 tsp salt',
              '1/4 tsp baking powder'
          ],
          recipe: 'Melt butter and mix with sugar, eggs, and vanilla. Add dry ingredients. Bake at 350°F (175°C) for 20-25 minutes.',
          servings: 'Serves 9 brownies'
      },
      Cheesecake: {
          storeCost: '$4.00',
          homeCost: '$3.00',
          ingredients: [
              '2 cups graham cracker crumbs',
              '1/2 cup melted butter',
              '2 cups cream cheese',
              '1 cup sugar',
              '1 tsp vanilla extract',
              '3 large eggs'
          ],
          recipe: 'Mix crumbs and butter for the crust. Beat cream cheese, sugar, and vanilla, then add eggs. Pour over crust and bake at 325°F (160°C) for 45-50 minutes.',
          servings: 'Serves 8 slices'
      },
      Cupcakes: {
          storeCost: '$3.00',
          homeCost: '$2.00',
          ingredients: [
              '1 1/2 cups all-purpose flour',
              '1 1/2 tsp baking powder',
              '1/4 tsp salt',
              '1/2 cup unsalted butter',
              '1 cup sugar',
              '2 large eggs',
              '1/2 cup milk'
          ],
          recipe: 'Mix dry ingredients. Cream butter and sugar, then add eggs and milk. Combine and bake at 350°F (175°C) for 18-20 minutes.',
          servings: 'Makes 12 cupcakes'
      },
      'Ice Cream': {
          storeCost: '$2.75',
          homeCost: '$1.50',
          ingredients: [
              '2 cups heavy cream',
              '1 cup whole milk',
              '3/4 cup sugar',
              '1 tbsp vanilla extract'
          ],
          recipe: 'Whisk all ingredients until sugar dissolves. Chill for 2 hours. Churn in an ice cream maker according to the manufacturer’s instructions. Freeze until firm.',
          servings: 'Serves 4 cups of ice cream'
      },
      Cookies: {
          storeCost: '$1.50',
          homeCost: '$1.00',
          ingredients: [
              '1/2 cup unsalted butter',
              '1/2 cup sugar',
              '1/2 cup brown sugar',
              '1 large egg',
              '1 tsp vanilla extract',
              '1 1/4 cups all-purpose flour',
              '1/2 tsp baking soda',
              '1/4 tsp salt',
              '1 cup chocolate chips'
          ],
          recipe: 'Cream butter and sugars. Add egg and vanilla, then dry ingredients. Fold in chocolate chips. Bake at 350°F (175°C) for 10-12 minutes.',
          servings: 'Makes 24 cookies'
      },
      Donuts: {
          storeCost: '$1.25',
          homeCost: '$0.75',
          ingredients: [
              '2 1/2 cups all-purpose flour',
              '1/2 cup sugar',
              '1 tbsp baking powder',
              '1/2 tsp salt',
              '1/2 cup milk',
              '2 large eggs',
              '1/4 cup melted butter'
          ],
          recipe: 'Mix dry and wet ingredients separately, then combine. Roll dough, cut shapes, and fry until golden. Cool and glaze.',
          servings: 'Makes 12 donuts'
      },
      Macarons: {
          storeCost: '$3.50',
          homeCost: '$2.50',
          ingredients: [
              '1 cup almond flour',
              '1 3/4 cups powdered sugar',
              '3 large egg whites',
              '1/4 cup granulated sugar',
              '1/2 tsp vanilla extract'
          ],
          recipe: 'Sift almond flour and powdered sugar. Whisk egg whites and granulated sugar to stiff peaks. Fold dry ingredients into meringue. Pipe circles and bake at 300°F (150°C) for 15 minutes.',
          servings: 'Makes 24 macarons'
      },
      Pies: {
          storeCost: '$5.00',
          homeCost: '$3.50',
          ingredients: [
              '2 1/2 cups all-purpose flour',
              '1 tsp salt',
              '1 cup unsalted butter',
              '1/2 cup cold water',
              '5 cups fruit filling of choice'
          ],
          recipe: 'Prepare crust by cutting butter into flour and salt, then adding water. Roll dough, fill with fruit, and bake at 375°F (190°C) for 45-50 minutes.',
          servings: 'Serves 8 slices'
      },
      Tiramisu: {
          storeCost: '$6.00',
          homeCost: '$4.50',
          ingredients: [
              '6 large egg yolks',
              '3/4 cup sugar',
              '2 cups mascarpone cheese',
              '1 1/2 cups heavy cream',
              '2 cups brewed espresso',
              '24 ladyfingers',
              'Cocoa powder for dusting'
          ],
          recipe: 'Whisk egg yolks and sugar over simmering water. Cool and fold in mascarpone. Whip cream and fold in. Dip ladyfingers in espresso, layer with cream, and dust with cocoa. Chill for 4 hours.',
          servings: 'Serves 8'
      }
  };

  const selectedDessert = this.value;
  const dessertInfo = document.getElementById('dessertInfo');
  const costDisplay = document.getElementById('dessertComparison');
  const ingredientsList = document.getElementById('ingredientsList');
  const recipeText = document.getElementById('recipeText');
  const servingsCount = document.getElementById('servingsCount');
  const dessertImageSection = document.getElementById('dessertImageSection');

  // Hide image section initially
  dessertImageSection.style.display = 'none';

  if (selectedDessert && dessertDetails[selectedDessert]) {
      const { storeCost, homeCost, ingredients, recipe, servings } = dessertDetails[selectedDessert];

      costDisplay.textContent = `Store Cost: ${storeCost}, Home Cost: ${homeCost}`;
      ingredientsList.innerHTML = '';
      ingredients.forEach(ingredient => {
          const li = document.createElement('li');
          li.textContent = ingredient;
          ingredientsList.appendChild(li);
      });

      recipeText.textContent = `Recipe: ${recipe}`;
      servingsCount.textContent = servings;

      dessertInfo.style.display = 'block';

      // Show the image section if "Brownies" is selected
      if (selectedDessert === "Brownies") {
          dessertImageSection.style.display = 'block';
      }

  } else {
      dessertInfo.style.display = 'none';
  }
});