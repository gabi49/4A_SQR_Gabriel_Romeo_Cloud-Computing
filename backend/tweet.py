from flask import Flask, request, jsonify
import sys
import redis


app = Flask(__name__)
tweets = []
tweets_db = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)
users_db = redis.Redis(host='localhost', port=6379, db=1, decode_responses=True)

@app.route('/')
def mytransaction():
    return jsonify(tweets)

@app.route('/tweets', methods=['GET'])
def get_tweets():
    return jsonify(tweets)


@app.route('/Addtweets', methods=['POST'])
def create_tweet():
    tweet = request.json
    newtweet = {
		'author' : tweet['username'],
		'tweet' : tweet['tweet']
	}
    tweets.append(newtweet)
    return jsonify({'message': 'Le tweet a été enregistré avec succès'})



if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "check_syntax":
            print("Build [ OK ]")
            exit(0)
        else:
            print("Passed argument not supported ! Supported argument: check_syntax")
            exit(1)

    app.run(debug=True)