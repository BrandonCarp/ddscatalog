def main():
    meal_time = convert(input("Enter a time :"))
    if meal_time >= 7 and meal_time <= 8:
        print("breakfast time")
    elif meal_time >= 12 and meal_time <= 13:
        print("lunch time")
    elif meal_time >= 18 and meal_time <= 19:
        print("dinner time")

def convert(time):
    hours, minutes = time.split(":")
    print(int(hours) + int(minutes) / 60)
    return int(hours) + int(minutes) / 60



if __name__ == "__main__":
    main()

    # take user input
    # conver to float
    # condition
    # 7 to 8 breakfast time
    # 12 to 13 lunch time
    # 18 to 19 dinner time
# do i need to turn it into a number ???
# Your convert function only prints the value and doesn’t return anything. That means meal_time becomes None, and you can’t compare None 
# to numbers.

# Replacing ":" with "." doesn’t turn "7:30" into a numeric hour like 7.5. It’s still a string, and "7.30" isn’t the same as 7.5. 
# Think: split hours/minutes and do minutes ÷ 60.

# After you compute the time, make sure it’s a number (float) before doing >= / <= comparisons.

# Double-check what should happen at exact boundaries (e.g., 8:00 vs 8:01). Your ranges use <=, so think about whether that
#  matches what you want.

# If you fix those three things—return a value, convert properly to hours as a number, and confirm the boundary logic—you’ll be set.

# min / 60