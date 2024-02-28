from pymysql.cursors import DictCursor
from database.dao import BaseDao
from database.cart import queries


class CartDao(BaseDao):

    #                             CART BASIC

    def get_cart(self):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_CART)
            self.connection.commit()
            return cur.fetchall()

    def post_cart(self, cart_data):
        with self.connection.cursor(DictCursor) as cur:
            values = [cart_data['creation'], cart_data['paid']]
            try:
                cur.execute(queries.POST_CART, values)
                self.connection.commit()
            except Exception as e:
                # Manejo de errores
                print(e)
                return e

    def delete_cart_by_id(self, cart_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DEL_CART, (cart_id,))
            self.connection.commit()

    def patch_cart_by_id(self, data):
        id = data.get('id', None)
        creation = data.get('creation', None)
        paid = data.get('paid', None)

        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.PATCH_CART, (creation, paid, id))
            self.connection.commit()

    def get_cart_by_id(self, cart_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_CART_BY_ID, (cart_id,))
            return cur.fetchall()

