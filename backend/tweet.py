from flask import Flask, request, jsonify
import json
import sys
import redis
import time


app = Flask(__name__)

tweets_db = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)
users_db = redis.Redis(host='localhost', port=6379, db=1, decode_responses=True)

## Affichier tous les tweets
@app.route('/')
def mytweetList():
    tweets = []
    for key in tweets_db.scan_iter("tweet:*"):
        tweet = tweets_db.get(key)
        tweet = json.loads(tweet)
        tweets.append(tweet)
    return jsonify(tweets)

## Enregistrer un tweet dans Redis
@app.route('/Addtweets', methods=['POST'])
def create_tweet():
    username = request.json.get('username')
    message = request.json.get('tweet')
    timestamp = str(time.time())
    tweet = {
            'author': username,
            'tweet': message
        }
    tweet_key = f'tweet:{timestamp}'
    tweets_db.set(tweet_key, json.dumps(tweet))
    users_key = f'user:{username}'
    users_db.lpush(users_key, timestamp)
    return "magnifique"

## Recuperer les tweets d'un utilisateur grace à son pseudo
@app.route('/tweets/<username>', methods=['GET'])
def get_user_tweets(username):
    user_Key = f'user:{username}'
    # Récupère tous les tweets d'un utilisateur
    for key in tweets_db.scan_iter("user:*"):
        if (user_Key == key):
            user_tweet_keys = users_db.get(key)
        return user_tweet_keys
    return "0"
    #print(user_tweet_keys)

    #if not user_tweet_keys:
    #    return jsonify([])
    #user_tweet_keys = [key.decode('utf-8') for key in user_tweet_keys]

    # user_tweets = []
    # for key in user_tweet_keys:
    #    tweet = json.loads(tweets_db.get(key))
    #    user_tweets.append(tweet)
    #return jsonify(user_tweet_keys)



if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "check_syntax":
            print("Build [ OK ]")
            exit(0)
        else:
            print("Passed argument not supported ! Supported argument: check_syntax")
            exit(1)

    app.run(debug=True)