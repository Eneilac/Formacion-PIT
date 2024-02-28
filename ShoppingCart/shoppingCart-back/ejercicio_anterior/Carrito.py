from Item import Item
import itertools


class Carrito:
    id = itertools.count()
    items = list()

    def additem(self, name, amount, price):
        item = Item(name, amount, price)

        self.items.append(item)

    def showCart(self):
        if len(self.items) == 0:
            print('El carrito esta vacio')
        else:
            for item in self.items:
                print('Producto: ' + item.name + '\n'
                                                 'Cantidad: ' + str(item.amount) + '\n'
                                                                                   'Precio: ' + str(item.price) + '\n'
                      )

    def deleteItem(self, name):
        enc = False

        for item in self.items:
            enc = item.name == name
            if enc:
                self.items.remove(item)
                print('Item borrado con exito')
        if not enc:
            print('Ese item no existe')

    def totalCart(self):
        total = 0
        if len(self.items) == 0:
            return total
        else:
            for item in self.items:
                price = item.price * item.amount
                total += price

            return total

    def resetCart(self):
        self.items.clear()

    def cartleng(self):
        return len(self.items)
