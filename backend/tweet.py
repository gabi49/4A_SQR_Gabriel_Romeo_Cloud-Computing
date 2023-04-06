from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import sys
import redis
import time


app = Flask(__name__)
CORS(app)

tweets_db = redis.Redis(host='localhost', port=6379,
                        db=0, decode_responses=True)
users_db = redis.Redis(host='localhost', port=6379,
                       db=1, decode_responses=True)
topics_db = redis.Redis(host='localhost', port=6379,
                        db=2, decode_responses=True)

# Affichier tous les tweets


@app.route('/')
def mytweetList():
    tweets = []
    for key in tweets_db.scan_iter("*"):
        tweet = tweets_db.get(key)
        tweet = json.loads(tweet)
        tweets.append(tweet)
    return jsonify(tweets)

# Enregistrer un tweet dans Redis


@app.route('/Addtweets', methods=['POST'])
def create_tweet():

    username = request.json.get('username')
    message = request.json.get('tweet')
    topic = request.json.get('#')
    timestamp = str(time.time())
    tweet = {
        'author': username,
        'tweet': message,
        'sujet': topic
    }
    tweets_db.set(timestamp, json.dumps(tweet))
    users_db.lpush(username, timestamp)
    topics_db.lpush(topic, timestamp)
    return jsonify("magnifique")
# curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"Romeo\", \"tweet\": \"Hello Josepha!\", \"#\": \"Politesse\"}" http://localhost:5000/Addtweets

# Recuperer les tweets d'un utilisateur grace à son pseudo


@app.route('/tweets/<username>', methods=['GET'])
def get_user_tweets(username):
    user_tweet_keys = ""
    user_tweet_keys = users_db.lrange(username, 0, -1)

    user_tweets = []
    for key in user_tweet_keys:
        tweet = json.loads(str(tweets_db.get(key)))
        user_tweets.append(tweet)
    # return user_tweet_keys
    return jsonify(user_tweets)
# curl -X GET http://localhost:5000/tweets/Gabriel

# Retweeter  un tweet d'un utilisateur


@app.route('/retweet/<tweet_id>', methods=['POST'])
def retweeter(tweet_id):

    username = request.json.get('username')
    timestamp = str(time.time())

    # Retweeter un tweet existant
    tweet = json.loads(tweets_db.get(tweet_id))
    retweet = {
        'author': username,
        'tweet': tweet['tweet'],
        'sujet': tweet['sujet'],
        'retweeted_from': tweet_id
    }
    retweet_id = str(time.time())
    tweets_db.set(retweet_id, json.dumps(retweet))
    users_db.lpush(username, timestamp)

    user_tweets = ""
    user_tweets = users_db.lrange(username, 0, -1)

    for i in user_tweets:
        if i == username:
            users_db.lpush(i, retweet_id)
        else:
            users_db.set(username, retweet_id)

    return "cool"

# Recuperer tous les sujets


@app.route('/topics', methods=['GET'])
def get_all_topics():
    topics = []
    for key in topics_db.scan_iter("*"):
        topics.append(key)
    return jsonify(topics)
# curl -X GET http://localhost:5000/topics


# Afficher tous les tweets liés à un sujet

@app.route('/tweet/<topic>', methods=['GET'])
def get_topic_tweets(topic):
    topic_keys = ""
    topic_keys = topics_db.lrange(topic, 0, -1)
    topic_tweets = []
    for key in topic_keys:
        timeList = json.loads(str(tweets_db.get(key)))
        topic_tweets.append(timeList)
    return jsonify(topic_tweets)
# curl -X GET http://localhost:5000/tweet/ecolec


if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == "check_syntax":
            print("Build [ OK ]")
            exit(0)
        else:
            print("Passed argument not supported ! Supported argument: check_syntax")
            exit(1)

    app.run(debug=True)
