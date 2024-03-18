from database.dao import BaseDao
from database.Item import queries


class ItemDao(BaseDao):

    #                             USER BASIC

    def get_items(self):
        result = self.database.execute(queries.GET_ITEMS)
        self.close()
        return result

    def post_item(self, item_data):
        values = [item_data['name'], item_data['description'],
                  item_data['size'], item_data['price']]

        return self.database.execute_id(queries.POST_ITEM, values)

    def delete_item_by_id(self, item_id):
        return self.database.execute_id(queries.DEL_ITEM, item_id)

    def patch_item_by_id(self, data):
        item_id = data.get('id', None)
        name = data.get('name', None)
        description = data.get('description', None)
        size = data.get('size', None)

        return self.database.execute_id(queries.PATCH_ITEM, name, description, size, item_id)

    def get_item_by_id(self, item_id):
        return self.database.execute_id(queries.GET_ITEM_BY_ID, item_id)


