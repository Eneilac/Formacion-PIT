import pymysql.cursors

from database.Database import Database


class BaseDao:
    def __init__(self):
        self.database = Database()
        self.database.connect()

    def commit(self):
        if self.database.connection:
            self.database.commit()

    def close(self):
        if self.database.connection:
            self.database.close_connection()



