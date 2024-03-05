from pymysql.cursors import DictCursor
from database.dao import BaseDao
from database.Item import queries


class ItemDao(BaseDao):

    #                             USER BASIC

    def get_items(self): 
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_ITEMS)
            self.connection.commit()
            return cur.fetchall()

    def post_item(self, item_data):
        with self.connection.cursor(DictCursor) as cur:
            values = [item_data['name'], item_data['description'],
                      item_data['size'],item_data['price']]
            try:
                cur.execute(queries.POST_ITEM, values)
                self.connection.commit()
            except Exception as e:
                # Manejo de errores
                print(e)
                return e

    def delete_item_by_id(self, item_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DEL_ITEM, (item_id,))
            self.connection.commit()

    def patch_item_by_id(self, data):
        item_id = data.get('id', None)
        name = data.get('name', None)
        description = data.get('description', None)
        size = data.get('size', None)

        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.PATCH_ITEM, (name, description, size, item_id))
            self.connection.commit()

    def get_item_by_id(self, item_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_ITEM_BY_ID, (item_id,))
            return cur.fetchall()

    