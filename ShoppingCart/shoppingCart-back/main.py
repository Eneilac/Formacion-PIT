from Carrito import Carrito


def menu():
    print('Bienvenido seleccione una opción\n'
          '1- Añadir item al carrito\n'
          '2- Mostrar items del carrito\n'
          '3- Eliminar item del carrito\n'
          '4- Calcular total del carrito\n'
          '5- Vaciar carrito\n'
          '6- Salir\n')


if __name__ == '__main__':
    option = 0

    while option != 6:
        menu()

        option = int(input('Opción:'))
        print('\n')
        cart = Carrito()

        match option:
            case 1:
                name = str(input('Nombre del item: '))
                try:
                    amount = int(input('Cantidad de items: '))
                except:
                    print('Error no has ingresado un valor valido')
                    break
                try:
                    price = int(input('precio del item: '))
                except:
                    print('Error no has ingresado un valor valido')
                    break

                cart.additem(name, amount, price)
                print('Item creado añadido correctamente\n')

            case 2:
                cart.showCart()
            case 3:
                numItems = cart.cartleng()

                if numItems == 0:
                    print('El carrito esta vacio\n')
                else:
                    name = input('Nombre del item que desea eliminar: ')
                    cart.deleteItem(name)
            case 4:
                total = cart.totalCart()
                print('total a pagar ' + str(total) + '€')
            case 5:
                cart.resetCart()
                print('carrito vacio\n')
            case 6:
                print('Hasta pronto')
            case _:
                print('opcion no valida\n')
