from flask import Flask, request, jsonify
import sys


app = Flask(__name__)
calculations = {}
#results = {}
# idOpt = 0

@app.route('/')
def exemple():
    return jsonify(calculations)

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

@app.route("/resultat", methods=["GET"])
def get_result(calculation_id):
    result = calculations.get(calculation_id)
    if result is None:
        return "Calculation not found", 404
    return {"result": result}, 200


if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "check_syntax":
            print("Build [ OK ]")
            exit(0)
        else:
            print("Passed argument not supported ! Supported argument: check_syntax")
            exit(1)

    app.run(debug=True)
