from pymysql.cursors import DictCursor
from database.dao import BaseDao
from database.cart import queries


class CartDao(BaseDao):

    #                             CART BASIC

    def get_cart(self):
        result = self.database.execute(queries.GET_CART_BY_ID)
        self.close()
        return result

    def post_cart(self, cart_data):
        values = [cart_data['creation'], cart_data['paid']]

        return self.database.execute_id(queries.POST_CART, values)

    def delete_cart_by_user_id(self, user_id):
        return self.database.execute_id(queries.DEL_CART, user_id)

    def get_cart_by_user_id(self, user_id):
        return self.database.execute_id(queries.GET_CART_BY_ID, user_id)