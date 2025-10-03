# When texting or tweeting, it’s not uncommon to shorten words to save time or space, 
# as by omitting vowels, much like Twitter was originally called twttr. In a file called twttr.py, 
# implement a program that prompts the user for a str of text and then outputs that same text 
# but with all vowels (A, E, I, O, and U) omitted, whether inputted in uppercase or lowercase.

# recieve user string
# pass into helper function with logic to loop through entire string
# check it as lower then keep original

# def twttr():
#     str_helper(input("Enter a string : "))

# def str_helper(x):
#     new_str = ""
#     for i in x:
#         if i.lower() in ["a", "e", "i", "o", "u"]:
#             pass
#         else:
#             new_str += i

#     print(new_str)
#     return new_str
            
from random import shuffle

suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

deck = [f"{rank} of {suit}" for suit in suits for rank in ranks]
shuffle(deck)


player1 = [deck.pop(), deck.pop()]
player2 = [deck.pop(), deck.pop()]

flop = [deck.pop(), deck.pop(), deck.pop()]
turn = deck.pop()
river = deck.pop()

print(player1, player2)





# python twttr.py

# twttr()