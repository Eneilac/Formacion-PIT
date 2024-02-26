#                                           CONSULTAS USUARIO

##BORRAR LUEGO
GET_USERS = """
SELECT id, username, mail FROM user
"""

# Insertar usuario
POST_USER = """
INSERT INTO user (username, mail, password) 
VALUES (%s, %s, %s)
"""

# Eliminar usuario por id
DELETE_USER_BY_ID = """
DELETE FROM user 
WHERE id = %s
"""
PATCH_USER_BY_ID = """
UPDATE user
SET
  username = COALESCE(%s, username),
  mail = COALESCE(%s, mail),
  password = COALESCE(%s, password)
WHERE id = %s;
"""

# Visualizar los datos de un usuario en concreto por id
GET_USER_BY_ID = """
SELECT id, username, mail FROM user WHERE user.id = %s;
"""

# Visualizar los datos de un usuario en concreto por username
GET_USER_BY_USERNAME = """
SELECT id, username, mail FROM user WHERE user.username = %s;
"""

# Visualizar los datos de un usuario en concreto por mail
GET_USER_BY_MAIL = """
SELECT id, username, mail FROM user WHERE user.mail = %s;
"""

# Obtener todos los permisos de un user en concreto
GET_USER_PERMISSIONS = """
SELECT permission.name as permission
FROM user
JOIN user_role ON user_role.user_id = user.id 
JOIN role ON role.id = user_role.role_id 
JOIN level ON level.role_id = role.id 
JOIN permission_level ON permission_level.level_id = level.id 
JOIN permission ON permission_level.permission_id = permission.id
WHERE user.id = %s
"""

#                                        CONSULTAS USUARIO EVENTOS


# Inscribirse en eventos
POST_USER_EVENT = """
INSERT INTO user_event (user_id, event_id) 
VALUES (%s,%s)
"""

# Borrar usuario de todos los eventos
DELETE_USER_ALL_EVENTS = """
DELETE FROM user_event WHERE user_id = %s
"""

# Borrar usuario de un eventos en concreto
DELETE_USER_EVENT = """
DELETE FROM user_event WHERE user_id = %s AND event_id = %s
"""

# Buscar los eventos en los que esta inscrito un usuario
GET_USER_ALL_EVENTS = """
SELECT * FROM user_event WHERE user_id = %s;
"""

# Buscar un evento por id de un usuario
GET_USER_EVENT = """
SELECT * FROM user_event WHERE user_id = %s AND event_id = %s;
"""

#                                        CONSULTAS USUARIO LOGROS


# Consultar logros de todos los usuarios
GET_ALL_USERS_ACHIEVEMENTS = """
SELECT achievement.content, achievement.icon, user.username
FROM achievement
JOIN achievement_user ON achievement_user.achievement_id = achievement.id
JOIN user ON user.id = achievement_user.user_id
"""

# Consultar logros de un usuario en concreto
GET_USER_ACHIEVEMENTS = """
SELECT achievement.content, achievement.icon
FROM achievement
JOIN achievement_user ON achievement_user.achievement_id = achievement.id
JOIN user ON user.id = achievement_user.user_id
WHERE user_id = %s
"""

# Consultar logro en concreto de un usuario en concreto
GET_ACHIEVEMENT_USER = """
SELECT achievement.content, achievement.icon, user.username
FROM achievement
JOIN achievement_user ON achievement_user.achievement_id = achievement.id
JOIN user ON user.id = achievement_user.user_id
WHERE user_id = %s AND achievement_id = %s
"""

# Buscar que usuarios tienen un logro en concreto
GET_USERS_WITH_ACHIEVEMENT = """
SELECT user.username
FROM achievement
JOIN achievement_user ON achievement_user.achievement_id = achievement.id
JOIN user ON user.id = achievement_user.user_id
WHERE achievement_id = %s
"""

# Eliminar un logro de un usuario
DELETE_USER_ACHIEVEMENT = """
DELETE FROM achievement_user WHERE user_id = %s AND achievement_id = %s
"""

# Eliminar todos los logros de un usuario
DELETE_USER_ALL_ACHIEVEMENTS = """
DELETE FROM achievement_user WHERE user_id = %s 
"""

# Insertar logro para usuario
POST_USER_ACHIEVEMENT = """
INSERT INTO achievement_user (user_id, achievement_id) 
VALUES (%s, %s);
"""

#                                        CONSULTAS USUARIO CLUB


# Inscribir un user en un club
POST_USER_CLUB = """
INSERT INTO user_club (user_id, club_id) 
VALUES (%s, %s);
"""

# Consultar datos del club al que pertenece un usuario
GET_CLUB_PROFILE_OF_USER = """
SELECT club.name, club.cif, club.telf, club.id, user_club.join_date  
FROM club 
JOIN user_club ON user_club.club_id = club.id
WHERE user_id = %s
"""

# Eliminar un usuario de un club
DELETE_USER_CLUB = """
DELETE FROM user_club WHERE user_id = %s AND club_id = %s
"""

#                                        CONSULTAS USUARIO ROL


# Buscar el nivel de cada rol de un usuario ??????????
GET_LEVEL_OF_EACH_USERS_ROLE = """
SELECT user.username AS user, role.name AS 'Role name', level.name AS Level 
FROM user_role_level 
JOIN user ON user_role_level.user_id = user.id
JOIN level ON user_role_level.level_id = level.id
JOIN role ON user_role_level.role_id = role.id
WHERE user_id = %s
"""

# Buscar nivel de un usuario por id con un rol dado  ??????????
GET_LEVEL_OF_USER_ROLE_BY_ID = """
SELECT user.username AS user, role.name AS 'Role name', level.name AS Level 
FROM user_role_level 
JOIN user ON user_role_level.user_id = user.id
JOIN level ON user_role_level.level_id = level.id
JOIN role ON user_role_level.role_id = role.id
WHERE user_id = %s AND role_id = %s
"""

# Insertar nivel a un usuario con un rol.
POST_LEVEL_TO_USER_ROLE = """
INSERT INTO user_role_level (user_id, role_id, level_id)
VALUES (%s, %s, %s) 
"""

# Eliminar rol de un usuario
DELETE_USER_ROLE_LEVEL = """
DELETE FROM user_role_level 
WHERE user_id = %s AND role_id = %s 
"""

# Resetear nivel del rol de un usuario
PUT_RESET_USER_ROLE_LEVEL = """
UPDATE user_role_level 
SET level_id = DEFAULT 
WHERE user_id = %s AND role_id = %s 
"""

# Modificar el nivel de un usuario con un rol.
PUT_LEVEL_USER_ROLE = """
UPDATE user_role_level
SET level_id = %s
WHERE user_id = %s AND role_id = %s
"""

#                                        CONSULTAS USUARIO NOTIFICATION


# Asignar a quien se manda una notificación
POST_USER_NOTIFICATION = """
INSERT INTO user_notification (notification_id, user_id)
VALUES (%s, %s) 
"""

# Marcar como leida una notificacion
POST_NOTIFICATION_CHECKED = """
UPDATE user_notification 
SET isChecked = 1
WHERE user_id = %s AND notification_id = %s
"""

# Mostrar las notificaciones leidas de un usuario
GET_NOTIFICATION_CHECKED = """
SELECT notification.id, notification.title, notification.text, notification.register_date 
FROM user_notification
JOIN notification ON user_notification.notification_id = notification.id
WHERE user_id = %s AND isChecked = 1
"""

# Mostrar las notificaciones no leidas de un usuario
GET_NOTIFICATION_UNCHECKED = """
SELECT notification.id, notification.title, notification.text, notification.register_date 
FROM user_notification
JOIN notification ON user_notification.notification_id = notification.id
WHERE user_id = %s AND isChecked = 0
"""