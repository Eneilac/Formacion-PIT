from flask import Flask
from flask_jwt_extended import JWTManager


from blueprint.item import blueprint as item_blueprint
from blueprint.cart import blueprint as cart_blueprint

from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(item_blueprint)
app.register_blueprint(cart_blueprint)


cors = CORS(app)
CORS(app, supports_credentials=True, origins=['http://localhost:5173'])

# Configuración del JWT
app.config['JWT_SECRET_KEY'] = 'cacahuetesEnAlmibar'  # Cambiar esto con una clave secreta segura
jwt = JWTManager(app)


if __name__ == '__main__':
    app.run()
