# In a file called taqueria.py, implement a program that enables a user to place an order, 
# prompting them for items, one per line, until the user inputs control-d
# (which is a common way of ending one’s input to a program).
#  After each inputted item, display the total cost of all items inputted thus far, prefixed with a dollar sign ($)
#   and formatted to two decimal places. Treat the user’s input case insensitively. Ignore any input that isn’t an item.
#    Assume that every item on the menu will be titlecased.

# except EOFError:
#             print("You are done entering")
#             break
    # enter function call in it most likely / use continue I think

# recieve input use .title()
# append the values felipe[i] to a list 
# print total after each append
# use continue after each input UNTIL ctrl D
# ignore anything that isnt an item

felipes = {
    "Baja Taco": 4.25,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}


def main():
    total_cost = 0
    while True:
        try:
            input("Enter an item").title()
        except EOFError:
            print(f"${total_cost}")
            break
        except ZeroDivisionError:
            pass



def cost_converter():


main()