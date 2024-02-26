from flask import Flask, redirect, url_for
from flask_jwt_extended import JWTManager


from blueprint.item import blueprint as item_blueprint
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.register_blueprint(item_blueprint)


cors = CORS(app)
CORS(app, supports_credentials=True, origins=['http://localhost:5173'])

# Configuración del JWT
app.config['JWT_SECRET_KEY'] = 'cacahuetesEnAlmibar'  # Cambiar esto con una clave secreta segura
jwt = JWTManager(app)


@app.route('/')
@cross_origin()
def printSphere():
    return """
    """


@app.errorhandler(404)
def not_found_error():
    return redirect(url_for('printSphere'))


if __name__ == '__main__':
    app.run()
