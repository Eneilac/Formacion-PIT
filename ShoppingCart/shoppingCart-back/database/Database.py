import pymysql
from pymysql.cursors import DictCursor


class Database:

    def __init__(self):
        self.connection = None

    def connect(self):
        self.connection = pymysql.connect(
            user="root",
            password="root",
            database="neilashop",
            cursorclass=pymysql.cursors.DictCursor
        )

    def close_connection(self):
        if self.connection:
            self.connection.close()

    def execute(self, query):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(query)
            self.connection.commit()
            return cur.fetchall()

    def execute_id(self, query, args=None):
        with self.connection.cursor(DictCursor) as cur:
            cur.execute(query, args)
        return cur.fetchall()

    def commit(self):
        if self.connection:
            self.connection.commit()
