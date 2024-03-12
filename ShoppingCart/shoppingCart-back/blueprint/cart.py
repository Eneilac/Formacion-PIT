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


@blueprint.route("/<int:user_id>", methods=['DELETE'])
def delete_cart_by_id(user_id):
    dao = CartDao()
    dao.delete_cart_by_user_id(user_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("/<int:user_id>", methods=['GET'])
def get_cart_by_user_id(user_id, ):
    dao = CartDao()
    return jsonify(dao.get_cart_by_user_id(user_id))


@blueprint.route("/<int:cart_id>/items", methods=['GET'])
def get_items_in_cart(cart_id):
    dao = CartDao()
    return jsonify(dao.get_items_in_cart(cart_id))


@blueprint.route("/item", methods=['POST'])
def post_items_in_cart():
    data = request.get_json()
    try:
        dao = CartDao()
        dao.post_item_cart(data)
        return jsonify({'success': 'item añadido creado correctamente'}), 200
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': e}), 500

