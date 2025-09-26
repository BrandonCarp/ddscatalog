import math
# recieve input
# split()
# if 1% or less output "E"
# if 99% or more output "F"
# if x or y not an int , or x > y , or y == 0, prompt again
# ValueError , ZeroDivisionError


def main():
    while True:
        try:
            user_fuel = fuel_converter(input("Enter Fuel: "))
            if user_fuel >= 99:
                print("F")
                break
            elif user_fuel <= 1:
                print("E")
                break
            else:
                print(f"{user_fuel}%")
                break

        except (ValueError, ZeroDivisionError):
            # Just ignore and loop back to reprompt
            pass


def fuel_converter(s):
    x, y = s.split("/")
    x = int(x)   # exception if not a number
    y = int(y)   # exception if not a number

    if y == 0 or x > y:
        # explicitly signal "bad input"
        raise ValueError

    z = x / y * 100
    if z < 0:
        raise ValueError
    return round(z)


main()
