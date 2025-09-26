# In Massachusetts, home to Harvard University, it’s possible to request a vanity license plate for your car,
#  with your choice of letters and numbers instead of random ones. Among the requirements, though, are:

# “All vanity plates must start with at least two letters.”
# “… vanity plates may contain a maximum of 6 characters (letters or numbers) and a minimum of 2 characters.”
# “Numbers cannot be used in the middle of a plate; they must come at the end. For example, AAA222 would be an acceptable … 
# vanity plate; AAA22A would not be acceptable. The first number used cannot be a ‘0’.”
# “No periods, spaces, or punctuation marks are allowed.”
# In plates.py, implement a program that prompts the user for a vanity plate and then output Valid if meets all of the requirements
#  or Invalid if it does not. Assume that any letters in the user’s input will be uppercase. Structure your program per the below, 
#  wherein is_valid returns True if s meets all requirements and False if it does not. Assume that s will be a str.
#   You’re welcome to implement additional functions for is_valid to call (e.g., one function per requirement).


# Rules
# valid length DONE
# start with 2 letters DONE
# first number cannot be 0
# no numbers in middle eg. abc323dad
# no periods, spaces, or punctuation marks .replace(".", "", " ", "", "!", "")



def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    if not length_check(s): return False
    if not first_letters(s): return False
    if not special_letters(s): return False
    if not first_num(s): return False
    return True
    
      
   
def length_check(s):
    return 2 <= len(s) <= 6
   

def first_letters(s):
    if s[0].isalpha() and s[1].isalpha():
        return True
    else:
        return False

def special_letters(s):
    for ch in s:
        if ch in [".", " ", "!"]:
            return False
    return True

def first_num(s):
    seen_num = False
    for i, ch in enumerate(s):
        if ch.isdigit():
            if not seen_num:
                if ch == '0':
                    return False
                seen_num = True
        else:
            if seen_num:
                if ch.isalpha():

                    return False


    return True




main()

