
import tkinter as tk
from tkinter import messagebox
import os

# Dessert recipes with ingredients, instructions, and image file paths
recipes = {
    "Brownies": {
        "ingredients": "• 1/2 cup butter\n• 1 cup sugar\n• 2 eggs\n• 1 teaspoon vanilla\n• 1/3 cup cocoa powder\n• 1/2 cup flour\n• 1/4 teaspoon salt",
        "instructions": "1. Preheat oven to 350°F (175°C).\n2. Melt butter and mix with sugar.\n3. Add eggs and vanilla.\n4. Stir in cocoa, flour, and salt.\n5. Pour into a greased pan and bake for 30 minutes.",
        "comments": [],
        "image": "brownies.png"
    },
    "Cookies": {
        "ingredients": "• 1 cup butter\n• 1 cup sugar\n• 2 eggs\n• 2 1/2 cups flour\n• 1 teaspoon baking soda\n• 1/2 teaspoon salt\n• 2 cups chocolate chips",
        "instructions": "1. Preheat oven to 350°F (175°C).\n2. Cream butter and sugar together.\n3. Add eggs and mix well.\n4. Stir in flour, baking soda, and salt.\n5. Fold in chocolate chips.\n6. Bake for 12 minutes.",
        "comments": [],
        "image": "cookies.png"
    },
    "Cinnamon Rolls": {
        "ingredients": "• 4 cups flour\n• 1/2 cup sugar\n• 1 teaspoon salt\n• 1 packet yeast\n• 1 cup warm milk\n• 1/2 cup butter\n• 1 tablespoon cinnamon",
        "instructions": "1. Combine flour, sugar, salt, and yeast.\n2. Mix in warm milk and melted butter.\n3. Knead dough and let rise.\n4. Roll out, sprinkle with cinnamon, and cut.\n5. Bake until golden.",
        "comments": [],
        "image": "cinnamon_rolls.png"
    },
    "Churros": {
        "ingredients": "• 1 cup water\n• 1/2 cup butter\n• 1 cup flour\n• 1 teaspoon sugar\n• 1/4 teaspoon salt\n• 2 eggs\n• Cinnamon sugar for coating",
        "instructions": "1. Boil water and butter.\n2. Stir in flour, sugar, and salt.\n3. Remove from heat and mix in eggs.\n4. Pipe dough and fry until golden.\n5. Coat in cinnamon sugar.",
        "comments": [],
        "image": "churros.png"
    },
    "Muffins": {
        "ingredients": "• 2 cups flour\n• 1/2 cup sugar\n• 1 tablespoon baking powder\n• 1/2 teaspoon salt\n• 1 cup milk\n• 1/3 cup oil\n• 1 egg",
        "instructions": "1. Preheat oven to 400°F (200°C).\n2. Mix dry ingredients.\n3. In another bowl, combine milk, oil, and egg.\n4. Mix wet into dry.\n5. Bake for 20 minutes.",
        "comments": [],
        "image": "muffins.png"
    },
    "Jello": {
        "ingredients": "• 1 box jello mix\n• 2 cups boiling water\n• 2 cups cold water",
        "instructions": "1. Dissolve jello in boiling water.\n2. Stir in cold water.\n3. Pour into molds and refrigerate until set.",
        "comments": [],
        "image": "jello.png"
    }
}

# Initialize Tkinter
root = tk.Tk()
root.title("Dessert Recipes")

# Function to handle recipe selection
def open_recipe(dessert):
    recipe_info = recipes[dessert]
    ingredients = recipe_info["ingredients"]
    instructions = recipe_info["instructions"]
    comments = "\n".join(recipe_info["comments"]) if recipe_info["comments"] else "No comments yet."
    
    messagebox.showinfo(dessert, f"Ingredients:\n{ingredients}\n\nInstructions:\n{instructions}\n\nComments:\n{comments}")

# Function to add a comment
def add_comment(dessert):
    comment = comment_entries[dessert].get()
    if comment:
        recipes[dessert]["comments"].append(comment)
        comment_entries[dessert].delete(0, tk.END)  # Clear the comment entry
        update_comments(dessert)

# Function to update the comment display
def update_comments(dessert):
    comments = recipes[dessert]["comments"]
    comment_display[dessert].config(state=tk.NORMAL)  # Allow editing
    comment_display[dessert].delete(1.0, tk.END)  # Clear current text
    comment_display[dessert].insert(tk.END, "\n".join(comments))  # Insert updated comments
    comment_display[dessert].config(state=tk.DISABLED)  # Make it read-only

# Create UI for each dessert
comment_entries = {}
comment_display = {}

for dessert in recipes.keys():
    frame = tk.Frame(root)
    frame.pack(pady=10)
    
    # Load and display the image
    img_path = recipes[dessert]["image"]
    if os.path.isfile(img_path):  # Check if the image file exists
        img = tk.PhotoImage(file=img_path)  # Load the image file
        img_label = tk.Label(frame, image=img)
        img_label.image = img  # Keep a reference to avoid garbage collection
        img_label.pack(side=tk.LEFT)
    else:
        print(f"Warning: Image file '{img_path}' not found.")
    
    btn = tk.Button(frame, text=dessert, command=lambda d=dessert: open_recipe(d))
    btn.pack(side=tk.LEFT)
    
    comment_entry = tk.Entry(frame, width=30)
    comment_entry.pack(side=tk.LEFT, padx=5)
    comment_entries[dessert] = comment_entry
    
    comment_btn = tk.Button(frame, text="Comment", command=lambda d=dessert: add_comment(d))
    comment_btn.pack(side=tk.LEFT)

    # Text area for displaying comments
    comment_text = tk.Text(frame, width=50, height=5, state=tk.DISABLED)
    comment_text.pack(pady=5)
    comment_display[dessert] = comment_text

# Encourage sharing
share_label = tk.Label(root, text="Please share your creation!")
share_label.pack(pady=10)

# Keep the program running until closed
root.mainloop()
