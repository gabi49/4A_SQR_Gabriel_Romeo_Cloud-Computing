from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import redis


app = Flask(__name__)
CORS(app)
calculations = {}
r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)

@app.route('/')
def exemple():
    return jsonify(calculations)

##Première methode en stoxkant les resultats dans une variable dictionnaire
@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.get_json()
    operation = data.get("operation")
    first_operand = data.get("first_operand")
    second_operand = data.get("second_operand")

    if operation == "addition":
        result = first_operand + second_operand
    elif operation == "subtraction":
        result = first_operand - second_operand
    elif operation == "multiplication":
        result = first_operand * second_operand
    elif operation == "division":
        result = first_operand / second_operand
    else:
        return "Invalid Operation", 400

    calculation_id = len(calculations)
    calculations[calculation_id] = result

    #response = {
    #    "id": calculation_id,
    #    "result": result
    #}
    return calculations, 200

##Recuperation d'un resultat à partir de son id
@app.route("/resultat/<int:calculation_id>", methods=["GET"])
def get_result(calculation_id):
    result = calculations.get(calculation_id)
    if result is None:
        return "Calculation not found", 404
    return {"result": result}, 200

##Deuxieme methode de calcul et stocjage du resultat dans redis
@app.route('/addition', methods=['POST'])
def addition():
        # Récupérer les données de la requête
    data = request.get_json()
    a = float(data['num1'])
    b = float(data['num2'])
        # Effectuer l'addition
    result = a + b
        # Stocker le résultat dans Redis
    r.set('addition_result', result)
        # Retourner le résultat au format JSON
    return jsonify({'result': result})

@app.route('/soustraction', methods=['POST'])
def soustraction():
        # Récupérer les données de la requête
    data = request.get_json()
    a = float(data['a'])
    b = float(data['b'])
        # Effectuer l'addition
    result = a - b
        # Stocker le résultat dans Redis
    r.set('soustraction_result', result)
        # Retourner le résultat au format JSON
    return jsonify({'result': result})

@app.route('/multiplication', methods=['POST'])
def multiplication():
        # Récupérer les données de la requête
    data = request.get_json()
    a = float(data['a'])
    b = float(data['b'])
        # Effectuer l'addition
    result = a * b
        # Stocker le résultat dans Redis
    r.set('multiplication_result', result)
        # Retourner le résultat au format JSON
    return jsonify({'result': result})

@app.route('/division', methods=['POST'])    
def division():
        # Récupérer les données de la requête
    data = request.get_json()
    a = float(data['a'])
    b = float(data['b'])
        # Effectuer l'addition
    result = a / b
        # Stocker le résultat dans Redis
    r.set('division_result', result)
        # Retourner le résultat au format JSON
    return jsonify({'result': result})

##Recuperation d'un resultat à partir d'une clé
#@app.route('/resultatAddition')
#def get_resultat():
   # resultat = r.get('addition_result')
    #return resultat

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "check_syntax":
            print("Build [ OK ]")
            exit(0)
        else:
            print("Passed argument not supported ! Supported argument: check_syntax")
            exit(1)

    app.run(debug=True)
