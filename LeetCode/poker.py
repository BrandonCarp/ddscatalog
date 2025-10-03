from random import shuffle

suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

deck = [f"{rank} of {suit}" for suit in suits for rank in ranks]
shuffle(deck)

class Player:
    def __init__(self, deck):
        self.chips = 500
        self.cards = [deck.pop(), deck.pop()]

player1 = Player(deck)
player2 = Player(deck)

flop = [deck.pop(), deck.pop(), deck.pop()]
turn = deck.pop()
river = deck.pop()

print(player1, player2)

def game_start():




def blinds():


def 



game_start():

# players recieve cards
# alternate big/small blinds - chips 25/50
# big blind player can bet / fold / stand
# if bet - chips - next player turn
# if fold other player wins pot
# if stand - next player turn
# small blind turn
# 
# small blind turn / bet / fold / stand
# 

# big blind / small blind function
# bet function
# stand function
# fold function
# flop function
# turn function
# river function
# payout function
# subtract chip function

