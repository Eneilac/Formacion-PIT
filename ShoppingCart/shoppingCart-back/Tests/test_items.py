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

    @patch('blueprint.item.ItemDao')
    def test_get_items(self, mock_item_dao):
        expected_json = [{'id': 1, 'name': 'item1'}, {'id': 2, 'name': 'item2'}]

        # Configuramos el mock de ItemDao para que devuelva datos de ejemplo en lugar de ejecutar la función real
        mock_dao_instance = mock_item_dao.return_value
        mock_dao_instance.get_items.return_value = expected_json

        # Hacemos la solicitud HTTP simulada a la ruta '/items'
        response = self.client.get('/items')

        # Verificamos que la respuesta tenga el código de estado 200 y sea válida para JSON
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.is_json)

        # Si es necesario, también puedes verificar el contenido exacto del JSON devuelto
        self.assertEqual(response.get_json(), expected_json)

    @patch('blueprint.item.post_item')
    def test_post_item(self, mock_patch_item_by_id):
        # Mock de la función que interactúa con la base de datos
        mock_patch_item_by_id.return_value = {'name': 'camisetaTest', 'description': 'descriptionTest',
                                              'size': 'XL', 'price': '45'}
        item_id = 1
        response = self.client.post(f'/items/{item_id}', json={'some': 'data'})
        self.assert405(response)

    @patch('blueprint.item.ItemDao')
    def test_delete_item_by_id(self, mock_item_dao):
        mock_dao_instance = mock_item_dao.return_value
        mock_dao_instance.database.execute_id.return_value = []

        item_id = 31
        response = self.client.delete(f'/items/{item_id}')

        mock_dao_instance.delete_item_by_id.assert_called_once_with(item_id)

        expected_response = jsonify({'message': 'Item deleted successfully'})
        self.assert200(response)
        self.assertEqual(response.get_json(), expected_response.get_json())

    @patch('blueprint.item.ItemDao')
    def test_patch_item_by_id(self,mock_item_dao):
        data = {'name': 'camisetaTestModify', 'description': 'descriptionTestModify', 'size': 'XXL', 'price': '54'}
        mock_dao_instance = mock_item_dao.return_value
        mock_dao_instance.database.execute_id.return_value = []

        item_id = 25
        response = self.client.patch(f'/items/{item_id}')

        mock_dao_instance.patch_item_by_id.assert_called_once_with(item_id)

        self.assert500(response)
        self.assert200(response)

    @patch('blueprint.item.ItemDao')
    def test_get_item_by_id(self, mock_item_dao):
        expected_json = [{'id': 1, 'name': 'item1'}, {'id': 2, 'name': 'item2'}]

        # Configuramos el mock de ItemDao para que devuelva datos de ejemplo en lugar de ejecutar la función real
        mock_dao_instance = mock_item_dao.return_value
        mock_dao_instance.get_items.return_value = expected_json

        # Configuramos el mock para que devuelva un diccionario en lugar de un MagicMock
        mock_item = {'id': 2, 'name': 'item2'}
        mock_dao_instance.get_item_by_id.return_value = mock_item

        # Definimos el comportamiento esperado para la función get_item_by_id
        item_id = 2
        response = self.client.get(f'/items/{item_id}')

        # Verificamos que la función get_item_by_id fue llamada con el item_id correcto
        mock_dao_instance.get_item_by_id.assert_called_once_with(item_id)

        # Verificamos que la respuesta tenga el código de estado 200 y sea válida para JSON
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.is_json)

        # Verificamos el contenido exacto del JSON devuelto
        self.assertEqual(response.get_json(), mock_item)


if __name__ == '__main__':
    unittest.main()
