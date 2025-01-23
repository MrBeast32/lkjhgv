// JavaScript to display dessert costs and details
document.getElementById('dessertSelector').addEventListener('change', function () {
    const dessertCosts = {
      Brownies: '$2.50',
      Cheesecake: '$4.00',
      Cupcakes: '$3.00',
      'Ice Cream': '$2.75',
      Cookies: '$1.50',
      Donuts: '$1.25',
      Macarons: '$3.50',
      Pies: '$5.00',
      Tiramisu: '$6.00',
    };
  
    // Dessert details (ingredients and recipe)
    const dessertDetails = {
      Brownies: {
        ingredients: ['1/2 cup butter', '1 cup sugar', '2 eggs', '1/3 cup cocoa powder', '1/2 cup flour'],
        recipe: 'Preheat oven to 350°F. Melt butter and stir in sugar and eggs. Add cocoa powder and flour. Bake for 25 minutes.',
      },
      Cheesecake: {
        ingredients: ['2 cups cream cheese', '1 cup sugar', '3 eggs', '1 tsp vanilla', '1/2 cup graham cracker crumbs'],
        recipe: 'Preheat oven to 325°F. Mix cream cheese with sugar, eggs, and vanilla. Pour over graham cracker crust. Bake for 45 minutes.',
      },
      Cupcakes: {
        ingredients: ['1 cup flour', '1/2 cup sugar', '1/2 cup butter', '2 eggs', '1 tsp vanilla'],
        recipe: 'Preheat oven to 350°F. Mix all ingredients and pour into cupcake liners. Bake for 18 minutes.',
      },
      IceCream: {
        ingredients: ['2 cups heavy cream', '1 cup whole milk', '3/4 cup sugar', '1 tsp vanilla'],
        recipe: 'Mix ingredients together and churn in an ice cream maker for 20-25 minutes.',
      },
      Cookies: {
        ingredients: ['1 cup butter', '1 cup sugar', '1 egg', '2 cups flour', '1 tsp vanilla'],
        recipe: 'Preheat oven to 350°F. Cream butter and sugar, add egg and vanilla, then stir in flour. Drop spoonfuls on a baking sheet and bake for 10-12 minutes.',
      },
      Donuts: {
        ingredients: ['2 cups flour', '1/2 cup sugar', '1 egg', '1/2 cup milk', '1 tsp baking powder'],
        recipe: 'Preheat oven to 350°F. Mix ingredients together and pour into a donut pan. Bake for 15-20 minutes.',
      },
      Macarons: {
        ingredients: ['1 cup powdered sugar', '1/2 cup almond flour', '2 egg whites', '1/4 cup sugar'],
        recipe: 'Preheat oven to 300°F. Whisk egg whites until stiff peaks form, fold in dry ingredients, pipe into circles, and bake for 15 minutes.',
      },
      Pies: {
        ingredients: ['1 pie crust', '1 cup sugar', '1/4 cup flour', '3 cups fruit filling'],
        recipe: 'Preheat oven to 375°F. Mix sugar and flour with fruit, pour into pie crust, and bake for 45 minutes.',
      },
      Tiramisu: {
        ingredients: ['1 cup mascarpone cheese', '1 cup heavy cream', '1/2 cup sugar', '1 tsp vanilla', 'Ladyfingers'],
        recipe: 'Whisk mascarpone, heavy cream, sugar, and vanilla until smooth. Layer ladyfingers with cream mixture and refrigerate for 4 hours.',
      },
    };
  
    const selectedDessert = this.value;
    const costDisplay = document.getElementById('dessertCost');
    const dessertInfo = document.getElementById('dessertInfo');
    const dessertName = document.getElementById('dessertName');
    const ingredientsList = document.getElementById('ingredientsList');
    const recipeText = document.getElementById('recipeText');
    const brownieImage = document.getElementById('brownieImage');
  
    if (selectedDessert && dessertCosts[selectedDessert]) {
      costDisplay.textContent = `The average cost of ${selectedDessert} is ${dessertCosts[selectedDessert]}.`;
  
      // Show dessert details
      dessertInfo.style.display = 'block';
      dessertName.textContent = selectedDessert;
  
      // Update ingredients list
      ingredientsList.innerHTML = ''; // Clear previous ingredients
      dessertDetails[selectedDessert].ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
      });
  
      // Update recipe
      recipeText.textContent = dessertDetails[selectedDessert].recipe;
  
      // Show brownie image if selected
      if (selectedDessert === 'Brownies') {
        brownieImage.style.display = 'block';
      } else {
        brownieImage.style.display = 'none';
      }
    } else {
      costDisplay.textContent = '';
      dessertInfo.style.display = 'none';  // Hide the dessert details when no dessert is selected
      brownieImage.style.display = 'none';
    }
  });
  