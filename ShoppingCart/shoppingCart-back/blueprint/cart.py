from flask import Blueprint, jsonify
from auth.auth import login
from database.user.dao import UserDao
from flask import request

blueprint = Blueprint('users', __name__, url_prefix="/users")


#                             USER BASIC

@blueprint.route('', methods=['GET'])
def get_all_users():
    try:
        dao = UserDao()
        return jsonify(dao.get_all_users())
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': e}), 500


@blueprint.route('', methods=['POST'])
def post_user():
    data = request.get_json()  # Gracias a request que guardo los datos que manda al servidor estando el usuario almace
    try:
        dao = UserDao()
        dao.post_user(data)  # Introduzco los datos obtenidos hacia el post_user donde se ubica la query
        return jsonify({'success': 'Usuario creado correctamente'}), 200
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': e}), 500


@blueprint.route("/<int:user_id>", methods=['DELETE'])
def delete_user_by_id(user_id):
    dao = UserDao()
    dao.delete_user_by_id(user_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("", methods=['PATCH'])
def patch_user_by_id():
    data = request.json
    if not data:
        return jsonify({'error': 'Datos no proporcionados'}), 400

    dao = UserDao()
    try:
        dao.patch_user_by_id(data)
        return jsonify({'msg': 'Usuario actualizado correctamente'}), 200
    except Exception as e:
        # Manejo de errores
        print(e)
        return jsonify({'error': 'Error interno del servidor'}), 500


@blueprint.route("/<int:user_id>", methods=['GET'])
def get_user_by_id(user_id, ):
    dao = UserDao()
    return jsonify(dao.get_user_by_id(user_id))


@blueprint.route("/<int:user_id>/permissions", methods=['GET'])
def get_permissions_by_user_id(user_id):
    dao = UserDao()
    return jsonify(dao.get_permissions_by_user_id(user_id))


#                             USER PERMISSIONS

@blueprint.route("/<int:user_id>/events", methods=['POST'])
def post_user_event(user_id, event_id):
    dao = UserDao()
    dao.post_user_event(user_id, event_id)
    return jsonify({'msg': ''}), 201


@blueprint.route("/<int:user_id>/events", methods=['DELETE'])
def delete_user_all_events(user_id):
    dao = UserDao()
    dao.delete_user_all_events(user_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("/<int:user_id>/events/<int:event_id>", methods=['DELETE'])
def delete_user_event(user_id, event_id):
    dao = UserDao()
    dao.delete_user_event(user_id, event_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("/<int:user_id>/events", methods=['GET'])
def get_user_all_events(user_id):
    dao = UserDao()
    return jsonify(dao.get_user_all_events(user_id))


@blueprint.route("/<int:user_id>/events/<int:event_id>", methods=['GET'])
def get_user_event(user_id, event_id):
    dao = UserDao()
    return jsonify(dao.get_user_event(user_id, event_id))


#                             USER ACHIEVEMENT

@blueprint.route("/achievements", methods=['GET'])
def get_all_users_achievements():
    dao = UserDao()
    return jsonify(dao.get_all_users_achievements())


@blueprint.route("/<int:user_id>/achievements", methods=['GET'])
def get_user_achievements(user_id):
    dao = UserDao()
    return jsonify(dao.get_user_achievements(user_id))


@blueprint.route("/<int:user_id>/achievements/<int:achievement_id>", methods=['GET'])
def get_achievement_user(user_id, achievement_id):
    dao = UserDao()
    return jsonify(dao.get_achievement_user(user_id, achievement_id))


@blueprint.route("/with-achievements/<int:achievement_id>", methods=['GET'])
def get_users_with_achievement(achievement_id):
    dao = UserDao()
    return jsonify(dao.get_users_with_achievement(achievement_id))


@blueprint.route("/<int:user_id>/achievements/<int:achievement_id>", methods=['DELETE'])
def delete_user_achievement(user_id, achievement_id):
    dao = UserDao()
    dao.delete_user_achievement(user_id, achievement_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("/<int:user_id>/achievements", methods=['DELETE'])
def delete_user_all_achievements(user_id):
    dao = UserDao()
    dao.delete_user_all_achievements(user_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("/<int:user_id>/achievements/<int:achievement_id>", methods=['POST'])
def post_user_achievement(user_id, achievement_id):
    dao = UserDao()
    dao.post_user_achievement(user_id, achievement_id)
    return jsonify({'msg': ''}), 201


#                             USER CLUB


@blueprint.route("/<int:user_id>/clubs/<int:club_id>", methods=['POST'])
def post_user_club(user_id, club_id):
    dao = UserDao()
    dao.post_user_club(user_id, club_id)
    return jsonify({'msg': ''}), 201


@blueprint.route("/<int:user_id>/clubs/profile", methods=['GET'])
def get_club_profile_of_user(user_id):
    dao = UserDao()
    return jsonify(dao.get_club_profile_of_user(user_id))


@blueprint.route("/<int:user_id>/clubs/<int:club_id>", methods=['DELETE'])
def delete_user_club(user_id, club_id):
    dao = UserDao()
    dao.delete_user_club(user_id, club_id)
    return jsonify({'msg': ''}), 200


#                             USER ROLE

# TODO
@blueprint.route("/<int:user_id>/roles/levels", methods=['GET'])
def get_level_of_each_users_role(user_id):
    dao = UserDao()
    return jsonify(dao.get_level_of_each_users_role(user_id))


@blueprint.route("/<int:user_id>/roles/<int:role_id>/levels", methods=['GET'])
def get_level_of_user_rol_by_id(user_id, role_id):
    dao = UserDao()
    return jsonify(dao.get_level_of_user_rol_by_id(user_id, role_id))


@blueprint.route("/<int:user_id>/roles/<int:role_id>/levels/<int:level_id>", methods=['POST'])
def post_user_role_level(user_id, role_id, level_id):
    dao = UserDao()
    dao.post_user_role_level(user_id, role_id, level_id)
    return jsonify({'msg': ''}), 201


@blueprint.route("/<int:user_id>/roles/<int:role_id>", methods=['DELETE'])
def delete_user_role_level(user_id, role_id):
    dao = UserDao()
    dao.delete_user_role_level(user_id, role_id)
    return jsonify({'msg': ''}), 201


@blueprint.route("/<int:user_id>/roles/<int:role_id>/levels", methods=['PUT'])
def put_reset_user_role_level(user_id, role_id):
    dao = UserDao()
    dao.put_reset_user_role_level(user_id, role_id)
    return jsonify({'msg': ''}), 200


@blueprint.route("/<int:user_id>/role/<int:role_id>/levels/<int:level_id>", methods=['PUT'])
def put_level_user_role(user_id, role_id, level_id):
    dao = UserDao()
    dao.put_level_user_role(user_id, role_id, level_id)
    return jsonify({'msg': ''}), 200


#                             USER NOTIFICATION


@blueprint.route("/<int:user_id>/notifications/<int:notification_id>", methods=['POST'])
def post_user_notification(user_id, notification_id):
    dao = UserDao()
    dao.post_user_notification(user_id, notification_id)
    return "New notification generated"


@blueprint.route("/<int:user_id>/notifications/<int:notification_id>", methods=['POST'])
def post_notification_checked(user_id, notification_id):
    dao = UserDao()
    dao.post_notification_checked(user_id, notification_id)
    return "Notification was checked"


@blueprint.route("/<int:user_id>/notifications", methods=['GET'])
def get_notification_checked(user_id, ):
    dao = UserDao()
    return jsonify(dao.get_notification_checked(user_id, ))


@blueprint.route("/<int:user_id>/notifications", methods=['GET'])
def get_notification_unchecked(user_id, ):
    dao = UserDao()
    return jsonify(dao.get_notification_unchecked(user_id, ))
