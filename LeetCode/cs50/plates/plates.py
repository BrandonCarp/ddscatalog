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



if __name__ == "__main__":
    main()