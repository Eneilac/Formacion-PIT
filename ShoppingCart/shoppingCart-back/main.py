from flask import Flask, jsonify
from flask_jwt_extended import JWTManager

from blueprint.item import blueprint as item_blueprint
from blueprint.cart import blueprint as cart_blueprint

from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(item_blueprint)
app.register_blueprint(cart_blueprint)

cors = CORS(app)
CORS(app, supports_credentials=True, origins=['http://localhost:5173'])


@app.route('/carts/item', methods=['OPTIONS'])
def handle_options():
    # Agrega los encabezados CORS necesarios
    response = jsonify({'message': 'CORS preflight request handled'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:5173')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST')
    return response


# Configuración del JWT
app.config['JWT_SECRET_KEY'] = 'cacahuetesEnAlmibar'  # Cambiar esto con una clave secreta segura
jwt = JWTManager(app)

if __name__ == '__main__':
    app.run()
