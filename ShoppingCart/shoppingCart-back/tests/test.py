import unittest
from unittest.mock import patch

from flask import Flask
from flask_testing import TestCase
from blueprint.item import blueprint as item_blueprint


class TestItemEndpoints(TestCase):
    # Creacion de la app
    def create_app(self):
        app = Flask(__name__)
        app.config['TESTING'] = True
        app.register_blueprint(item_blueprint)
        return app

    # Prueba que traiga todos los items y la respuesta sea 200
    def test_get_items(self):
        response = self.client.get('/items')
        self.assert200(response)

    # añadir un item

    @patch('blueprint.item.patch_item_by_id')
    def test_post_item(self, mock_data):
        mock_data.return_value = {'name': 'camisetaTest', 'description': 'descriptionTest', 'size': 'XL', 'price': '45'}
        item_id = 1
        response = self.client.post(f'/items/{item_id}', json=mock_data)
        self.assert200(response)

    # borrar un item por la id
    def test_delete_item_by_id(self):
        item_id = 1
        response = self.client.delete(f'/items/{item_id}')
        self.assert200(response)

    # Modificar un item por la id
    def test_patch_item_by_id(self):
        data = {'name': 'camisetaTestModify', 'description': 'descriptionTestModify', 'size': 'XXL', 'price': '54'}
        response = self.client.patch('/items', json=data)
        self.assert200(response)

    def test_get_item_by_id(self):
        item_id = 1
        response = self.client.get(f'/items/{item_id}')
        self.assert200(response)


if __name__ == '__main__':
    unittest.main()
