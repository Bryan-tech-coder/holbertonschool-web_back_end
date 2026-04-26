#!/usr/bin/env python3
"""contains an update function"""


def update_topics(mongo_collection, name, topics):
    """uptading the function"""

    mongo_collection.update_many({'name': name}, {'$set': {"topics": topics}})
