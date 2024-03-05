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
    data = request.get_json()  # Gracias a request que guardo los datos que manda al servidor estando el usuario almace
    try:
        dao = ItemDao()
        dao.post_item(data)  # Introduzco los datos obtenidos hacia el post_item donde se ubica la query
        return jsonify({'success': 'Item creado correctamente'}), 200
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': e}), 500


@blueprint.route("/<int:item_id>", methods=['DELETE'])
def delete_item_by_id(item_id):
    dao = ItemDao()
    dao.delete_item_by_id(item_id)
    return jsonify({'msg': ''}), 200


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

