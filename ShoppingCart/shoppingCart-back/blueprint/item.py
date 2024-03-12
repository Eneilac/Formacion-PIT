from flask import Blueprint, jsonify
from database.Item.dao import ItemDao
from flask import request

blueprint = Blueprint('items', __name__, url_prefix="/items")


#                             item BASIC

@blueprint.route('', methods=['GET'])
def get_items():
    try:
        dao = ItemDao()
        return jsonify(dao.get_items())
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': e}), 500


@blueprint.route('', methods=['POST'])
def post_item():
    data = request.get_json()
    try:
        dao = ItemDao()

        # Ejecutar la consulta de inserción y obtener la última ID insertada
        dao.post_item(data)

        # Modificar el objeto 'data' con la nueva información
        data['image_url'] = '/img/porDefecto.png'

        return jsonify({'success': 'Item creado correctamente', 'item': data}), 200
    except Exception as e:
        print(f"Error en la ruta /items: {str(e)}")
        return jsonify({'error': str(e)}), 500


@blueprint.route('/<int:item_id>', methods=['DELETE'])
def delete_item_by_id(item_id):
    dao = ItemDao()
    try:
        print(item_id)
        dao.delete_item_by_id(item_id)
        return jsonify({'message': 'Item deleted successfully', 'deleted_item_id': item_id})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@blueprint.route("", methods=['PATCH'])
def patch_item_by_id():
    data = request.json
    if not data:
        return jsonify({'error': 'Datos no proporcionados'}), 400

    dao = ItemDao()
    try:
        dao.patch_item_by_id(data)
        return jsonify({'msg': 'Usuario actualizado correctamente'}), 200
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': 'Error interno del servidor'}), 500


@blueprint.route("/<int:item_id>", methods=['GET'])
def get_item_by_id(item_id, ):
    dao = ItemDao()
    return jsonify(dao.get_item_by_id(item_id))
