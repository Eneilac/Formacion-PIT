import pymysql.cursors


class BaseDao:
    def __init__(self):
        self.connection = pymysql.connect(
            user="root",
            password="root",
            database="neilashop",
            cursorclass=pymysql.cursors.DictCursor
        )

    def close_connection(self):
        if self.connection:
            self.connection.close()

