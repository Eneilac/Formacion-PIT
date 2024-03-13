import unittest
from unittest.mock import patch, MagicMock
from flask import Flask, jsonify
from flask_testing import TestCase
from blueprint.item import blueprint as item_blueprint


class Test(TestCase):

    def create_app(self):
        app = Flask(__name__)
        app.config['TESTING'] = True
        app.register_blueprint(item_blueprint)

        return app

    def setUp(self):
        self.app = self.create_app()
        self.client = self.app.test_client()

        self.db_patch = patch('database.Database.Database.connect')
        self.mock_db_connect = self.db_patch.start()

    def tearDown(self):
        self.db_patch.stop()

    @patch('database.Item.dao.ItemDao.get_items')
    def test_get_items(self, mock_item_dao):
        mock_item_dao.return_value = [{'id': 1, 'name': 'item1'}, {'id': 2, 'name': 'item2'}]

        response = self.client.get('/items')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), mock_item_dao.return_value)

    @patch('database.Item.dao.ItemDao.post_item')
    def test_post_item(self, mock_post_item):
        # Mock de la función que interactúa con la base de datos
        mock_post_item.return_value = {'name': 'camisetaTest', 'description': 'descriptionTest',
                                       'size': 'XL', 'price': '45'}

        response = self.client.post(f'/items', json={'some': 'data'})
        self.assert200(response)

    @patch('blueprint.item.ItemDao')
    def test_delete_item_by_id(self, mock_item_dao):
        mock_dao_instance = mock_item_dao.return_value
        mock_dao_instance.database.execute_id.return_value = []

        item_id = 31
        response = self.client.delete(f'/items/{item_id}')

        mock_dao_instance.delete_item_by_id.assert_called_once_with(item_id)

        expected_response = jsonify({'deleted_item_id': 31, 'message': 'Item deleted successfully'})
        self.assert200(response)
        self.assertEqual(response.get_json(), expected_response.get_json())

    @patch('blueprint.item.ItemDao')
    def test_get_item_by_id(self, mock_item_dao):
        expected_json = [{'id': 1, 'name': 'item1'}, {'id': 2, 'name': 'item2'}]

        mock_dao_instance = mock_item_dao.return_value
        mock_dao_instance.get_items.return_value = expected_json

        mock_item = {'id': 2, 'name': 'item2'}
        mock_dao_instance.get_item_by_id.return_value = mock_item

        item_id = 2
        response = self.client.get(f'/items/{item_id}')

        mock_dao_instance.get_item_by_id.assert_called_once_with(item_id)

        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.is_json)

        self.assertEqual(response.get_json(), mock_item)


if __name__ == '__main__':
    unittest.main()
