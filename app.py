from flask import Flask, request, jsonify
import sys


app = Flask(__name__)
results = {}

@app.route('/')
def exemple():
    return "bonjour"


@app.route("/addition", methods=["POST"])
def addition():
    data = request.get_json()
    a = data["a"]
    b = data["b"]
    result = a + b
    id = len(results)
    results[id] = result
    return jsonify({"id": id})


@app.route("/resultat", methods=["GET"])
def resultat(id):
    result = results.get(id)
    if result is None:
        return jsonify({"error": "Invalid id"}), 404
    return jsonify({"result": result})





if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "check_syntax":
            print("Build [ OK ]")
            exit(0)
        else:
            print("Passed argument not supported ! Supported argument: check_syntax")
            exit(1)

    app.run(debug=True)
