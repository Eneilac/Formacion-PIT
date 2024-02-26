from pymysql.cursors import DictCursor

from database.dao import BaseDao
from database.user import queries


class UserDao(BaseDao):

    #                             USER BASIC

    def get_all_users(self):  # Buscar todas las temporadas
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USERS)
            self.connection.commit()
            return cur.fetchall()

    def post_user(self, user_data):
        with self.connection.cursor(DictCursor) as cur:
            values = [user_data['username'], user_data['mail'],
                      user_data['password']]
            try:
                cur.execute(queries.POST_USER, values)
                self.connection.commit()
            except Exception as e:
                # Manejo de errores
                print(e)
                return e

    def delete_user_by_id(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DELETE_USER_BY_ID, (user_id,))
            self.connection.commit()

    def patch_user_by_id(self, data):
        id_user = data.get('id', None)
        username = data.get('username', None)
        mail = data.get('mail', None)
        password = data.get('password', None)

        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.PATCH_USER_BY_ID, (username, mail, password, id_user))
            self.connection.commit()

    def get_user_by_id(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USER_BY_ID, (user_id,))
            return cur.fetchall()

    def get_user_by_username(self, username):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USER_BY_USERNAME, (username,))
            return cur.fetchall()

    def get_user_by_mail(self, mail):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USER_BY_MAIL, (mail,))
            return cur.fetchall()

    #                             USER PERMISSIONS

    def get_permissions_by_user_id(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USER_PERMISSIONS, (user_id,))
            return cur.fetchall()

    #                             USER EVENT

    def post_user_event(self, user_id, event_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.POST_USER_EVENT, (user_id, event_id))
            self.connection.commit()

    def delete_user_all_events(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DELETE_USER_ALL_EVENTS, (user_id,))
            self.connection.commit()

    def delete_user_event(self, user_id, event_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DELETE_USER_EVENT, (user_id, event_id))
            self.connection.commit()

    def get_user_all_events(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USER_ALL_EVENTS, (user_id,))
            return cur.fetchall()

    def get_user_event(self, user_id, event_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USER_EVENT, (user_id, event_id))
            return cur.fetchall()

    #                             USER ACHIEVEMENT

    def get_all_users_achievements(self, ):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_ALL_USERS_ACHIEVEMENTS, ())
            return cur.fetchall()

    def get_user_achievements(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USER_ACHIEVEMENTS, (user_id,))
            return cur.fetchall()

    def get_achievement_user(self, user_id, achievement_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_ACHIEVEMENT_USER, (user_id, achievement_id))
            return cur.fetchall()

    def get_users_with_achievement(self, achievement_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_USERS_WITH_ACHIEVEMENT, (achievement_id,))
            return cur.fetchall()

    def delete_user_achievement(self, user_id, achievement_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DELETE_USER_ACHIEVEMENT, (user_id, achievement_id))
            self.connection.commit()

    def delete_user_all_achievements(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DELETE_USER_ALL_ACHIEVEMENTS, (user_id,))
            self.connection.commit()

    def post_user_achievement(self, user_id, achievement_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.POST_USER_ACHIEVEMENT, (user_id, achievement_id))
            self.connection.commit()

    #                             USER CLUB

    def post_user_club(self, user_id, club_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.POST_USER_CLUB, (user_id, club_id))
            self.connection.commit()

    def get_club_profile_of_user(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_CLUB_PROFILE_OF_USER, (user_id,))
            return cur.fetchall()

    def delete_user_club(self, user_id, club_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DELETE_USER_CLUB, (user_id, club_id))
            self.connection.commit()

    #                             USER ROLE

    def get_level_of_each_users_role(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_LEVEL_OF_EACH_USERS_ROLE, (user_id,))
            return cur.fetchall()

    def get_level_of_user_rol_by_id(self, user_id, role_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_LEVEL_OF_USER_ROLE_BY_ID, (user_id, role_id))
            return cur.fetchall()

    def post_user_role_level(self, user_id, role_id, level_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.POST_LEVEL_TO_USER_ROLE, (user_id, role_id, level_id))
            self.connection.commit()

    def delete_user_role_level(self, user_id, role_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.DELETE_USER_ROLE_LEVEL, (user_id, role_id))
            self.connection.commit()

    def put_reset_user_role_level(self, user_id, role_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.PUT_RESET_USER_ROLE_LEVEL, (user_id, role_id))
            self.connection.commit()

    def put_level_user_role(self, user_id, role_id, level_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.PUT_LEVEL_USER_ROLE, (level_id, user_id, role_id))
            self.connection.commit()

    #                             USER NOTIFICATION

    def post_user_notification(self, user_id, notification_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.POST_USER_NOTIFICATION, (notification_id, user_id))
            self.connection.commit()

    def post_notification_checked(self, user_id, notification_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.POST_NOTIFICATION_CHECKED, (user_id, notification_id))
            self.connection.commit()

    def get_notification_checked(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_NOTIFICATION_CHECKED, (user_id,))
            return cur.fetchall()

    def get_notification_unchecked(self, user_id):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(queries.GET_NOTIFICATION_UNCHECKED, (user_id,))
            return cur.fetchall()
