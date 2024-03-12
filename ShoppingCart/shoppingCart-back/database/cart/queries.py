#                                           CONSULTAS CART

GET_CART = """
SELECT * FROM cart;
"""

GET_CART_BY_ID = """
SELECT * FROM cart 
WHERE user_id = %s
"""

POST_CART = """
INSERT INTO cart (creation, paid) 
VALUES (%s, %s);
"""

DEL_CART = """
DELETE FROM cart 
WHERE id=%s;
"""

PATCH_CART = """
UPDATE cart
SET
  creation = COALESCE(%s, creation),
  paid = COALESCE(%s, paid),
WHERE id = %s;
"""

PATCH_USER_BY_ID = """
UPDATE user
SET
  username = %(username)s,
  mail = %(mail)s,
  password = %(password)s
WHERE id = %(user_id)s;
"""

GET_ITEMS_CART = """
SELECT t.*
FROM tshirt t
INNER JOIN tshirt_cart tc ON t.id = tc.id_tshirt
WHERE tc.id_cart = %s;
"""

POST_ITEMS_CART = """
INSERT INTO tshirt_cart (id_cart, id_tshirt)
values (%s, %s)
"""

if __name__ == '__main__':
    params = {
        "username": "edu",
        "mail": "edu@yahoo.com",
        "password": "hola123",
        "user_id": 1
    }
    query = PATCH_USER_BY_ID, params
    print(query)
