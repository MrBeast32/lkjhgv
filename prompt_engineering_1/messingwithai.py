class BrownieRecipe:
    def __init__(self):
        self.ingredients = {
            "Dark Chocolate": {"quantity": 1100000, "unit": "pounds", "cost_per_unit": 15},  # high-end
            "Cultured European Butter": {"quantity": 275000, "unit": "pounds", "cost_per_unit": 15},
            "Organic Avocado Oil": {"quantity": 68750, "unit": "pounds", "cost_per_unit": 20},
            "Granulated Sugar": {"quantity": 1100000, "unit": "pounds", "cost_per_unit": 1},
            "Brown Sugar": {"quantity": 550000, "unit": "pounds", "cost_per_unit": 1.5},
            "Organic Free-Range Eggs": {"quantity": 275000000, "unit": "units", "cost_per_unit": 0.06},
            "Madagascar Vanilla Extract": {"quantity": 275000, "unit": "tablespoons", "cost_per_unit": 0.20},
            "Almond Extract": {"quantity": 137500, "unit": "tablespoons", "cost_per_unit": 0.25},
            "Espresso": {"quantity": 68750, "unit": "gallons", "cost_per_unit": 5},
            "Dutch-process Cocoa Powder": {"quantity": 275000, "unit": "pounds", "cost_per_unit": 2},
            "All-Purpose Flour": {"quantity": 1100000, "unit": "pounds", "cost_per_unit": 0.5},
            "Himalayan Pink Salt": {"quantity": 5500, "unit": "pounds", "cost_per_unit": 1},
            "Baking Powder": {"quantity": 1100, "unit": "pounds", "cost_per_unit": 1},
            "Saigon Cinnamon": {"quantity": 2750, "unit": "pounds", "cost_per_unit": 2},
            "Freshly Grated Nutmeg": {"quantity": 1375, "unit": "pounds", "cost_per_unit": 5},
            "Organic Orange Zest": {"quantity": 2750, "unit": "pounds", "cost_per_unit": 5},
            "Artisanal Chocolate Chips": {"quantity": 275000, "unit": "pounds", "cost_per_unit": 5},
            "Chopped Candied Hazelnuts": {"quantity": 137500, "unit": "pounds", "cost_per_unit": 5},
            "Sea Salt Caramel Ingredients": {
                "Granulated Sugar": {"quantity": 1100000, "unit": "pounds", "cost_per_unit": 1},
                "Butter": {"quantity": 275000, "unit": "pounds", "cost_per_unit": 15},
                "Heavy Cream": {"quantity": 275000, "unit": "gallons", "cost_per_unit": 15},
                "Flaky Sea Salt": {"quantity": 5500, "unit": "pounds", "cost_per_unit": 1},
                "Whiskey": {"quantity": 68750, "unit": "gallons", "cost_per_unit": 10}
            },
            "Chocolate Truffle Layer": {
                "Heavy Cream": {"quantity": 275000, "unit": "gallons", "cost_per_unit": 15},
                "High-Quality Dark Chocolate": {"quantity": 1100000, "unit": "pounds", "cost_per_unit": 15},
                "Vanilla Extract": {"quantity": 275000, "unit": "tablespoons", "cost_per_unit": 0.20},
                "Edible Gold Dust": {"quantity": 275000, "unit": "grams", "cost_per_unit": 0.5}
            }
        }

    def calculate_total_cost(self):
        total_cost = 0
        for ingredient, details in self.ingredients.items():
            if isinstance(details, dict):
                for sub_ingredient, sub_details in details.items():
                    total_cost += sub_details["quantity"] * sub_details["cost_per_unit"]
            else:
                total_cost += details["quantity"] * details["cost_per_unit"]
        return total_cost

    def display_ingredients(self):
        for ingredient, details in self.ingredients.items():
            if isinstance(details, dict):
                print(f"{ingredient}:")
                for sub_ingredient, sub_details in details.items():
                    print(f"  - {sub_ingredient}: {sub_details['quantity']} {sub_details['unit']}")
            else:
                print(f"{ingredient}: {details['quantity']} {details['unit']}")

# Instantiate the BrownieRecipe class
brownie_recipe = BrownieRecipe()

# Display ingredients
brownie_recipe.display_ingredients()

# Calculate total cost
total_cost = brownie_recipe.calculate_total_cost()
print(f"\nTotal estimated cost for the ultimate brownies: ${total_cost:,.2f}")
