import itertools


class Item:
    id = itertools.count()

    def __init__(self, name, amount, price):
        self.name = name
        self.amount = amount
        self.price = price

