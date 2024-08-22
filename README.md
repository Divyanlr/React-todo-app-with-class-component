
The TodoList component is a class-based React component that manages a list of to-do items. It includes the following key features:
	1. State Management:
		○ The component's state holds two key pieces of data:
			§ item: An array of strings representing the to-do items.
			§ input: A string that tracks the current value of the input field.
	2. Input Handling:
		○ handleChange(event): This method updates the input state as the user types in the input field, ensuring that the component's state reflects the current value of the input.
	3. Adding Items:
		○ handleInput(): When the user clicks the "Add" button, this method is triggered. It takes the current value of the input field (input), adds it to the item array, and updates the state. This effectively adds a new item to the to-do list.
	4. Deleting Items:
		○ handleDelete(index): This method removes an item from the item array based on its index. When the "Delete" button next to an item is clicked, this method is invoked to remove that specific item from the list.
	5. Rendering the UI:
		○ The render() method returns JSX that defines the structure of the to-do list:
			§ An input field to type in new items.
			§ A button to add the typed item to the list.
			§ An unordered list (<ul>) that dynamically displays all items in the item array.
			§ Each list item (<li>) has a "Delete" button to remove the corresponding item.

