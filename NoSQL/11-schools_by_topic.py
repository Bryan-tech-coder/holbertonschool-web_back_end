#!/usr/bin/env python3
"""contains the find by topic function"""


def schools_by_topic(mongo_collection, topic):
    """ finds a school by topic"""

    return list(mongo_collection.find({'topics': topic}))
