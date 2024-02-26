#                                           CONSULTAS ITEM

GET_ITEMS = """
SELECT * FROM tshirt;
"""

GET_ITEM_BY_ID = """
SELECT * FROM tshirt 
WHERE id = %s
"""

POST_ITEM = """
INSERT INTO tshirt (name, description, size) 
VALUES (%s, %s, %s);
"""

DEL_ITEM = """
DELETE FROM tshirt 
WHERE id=%s;
"""


PATCH_ITEM = """
UPDATE tshirt
SET
  name = COALESCE(%s, name),
  description = COALESCE(%s, description),
  size = COALESCE(%s, size)
WHERE id = %s;
"""
