# coke is 50 cents , only accepts 25 , 10 , 5
# one coin at a time, out put how many cents owed if so
# ignore if not a cent
# Amount Due: / Change Owed : / Insert Coin :

def main():
    change = 0
    
    while change < 50:
        x = int(input("Insert Coin :"))
        if x != 25 and x != 10 and x != 5:
           pass
        else:
            change += x
            print(f"Amount Due: {50 - change}")
    print(f"Change Owed:{change - 50}")
         

        





main()