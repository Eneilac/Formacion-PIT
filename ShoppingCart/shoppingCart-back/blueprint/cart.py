from flask import Blueprint, jsonify
from database.cart.dao import CartDao
from flask import request

blueprint = Blueprint('carts', __name__, url_prefix="/carts")


#                             cart BASIC

@blueprint.route('', methods=['GET'])
def get_cart():
    try:
        dao = CartDao()
        return jsonify(dao.get_cart())
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': e}), 500


@blueprint.route('', methods=['POST'])
def post_cart():
    data = request.get_json()  # Gracias a request que guardo los datos que manda al servidor estando el usuario almace
    try:
        dao = CartDao()
        dao.post_cart(data)  # Introduzco los datos obtenidos hacia el post_cart donde se ubica la query
        return jsonify({'success': 'Usuario creado correctamente'}), 200
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': e}), 500


@blueprint.route("/<int:cart_id>", methods=['DELETE'])
def delete_cart_by_id(cart_id):
    dao = CartDao()
    dao.delete_cart_by_id(cart_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("", methods=['PATCH'])
def patch_cart_by_id():
    data = request.json
    if not data:
        return jsonify({'error': 'Datos no proporcionados'}), 400

    dao = CartDao()
    try:
        dao.patch_cart_by_id(data)
        return jsonify({'msg': 'Usuario actualizado correctamente'}), 200
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': 'Error interno del servidor'}), 500


@blueprint.route("/<int:cart_id>", methods=['GET'])
def get_cart_by_id(cart_id, ):
    dao = CartDao()
    return jsonify(dao.get_cart_by_id(cart_id))

