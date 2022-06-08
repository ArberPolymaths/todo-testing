Feature: Add a new task in the Todo app

    Scenario: Add a task with valid name
        Given I want to create a new task with valid name
        When I click the Add Button, give valid input in the name field and press Done Button
        Then This task appears in the Todo list

#   Scenario: Add a task with invalid name
#       Given I want to Add a new task with invalid name
#       When I click the Add Button, give invalid input in the name field and press Done Button
#       Then This task does not appear in the Todo list

# Scenario: Add a task without a name
#       Given I want to Add a new task without a name
#       When I click the Add Button, give no input in the name field and press Done Button
#       Then This task does not appear in the Todo list

# Scenario: Add a task without a category
#       Given I want to Add a new task without a category
#       When I click the Add Button, fill in the name, choose no category and press Done Button
#       Then This task appears in the Todo list

# Scenario: Add a task with a category
#       Given I want to create a new task without a category
#       When I click the Add Button, fill in the name, choose a category and press Done Button
#       Then This task appears in the Todo list