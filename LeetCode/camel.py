# recieve user input camel case
# loop through find first case of upper == [i].isupper()
# [i].replace(f"{i}", f"_{i}.toLower()")

def main():
    userString = input("Enter a camel case :")
    camel_case = ""
    
    for s in userString:
        if s.isupper():
            camel_case += f"_{s.lower()}"
        else:
            camel_case += s
    print(camel_case)
        




main()