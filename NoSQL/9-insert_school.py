#!/usr/bin/env python3
"""doc into a collection"""


def insert_school(mongo_collection, **kwargs):
    """doc into a collection"""

    doc = mongo_collection.insert_one(kwargs)
    return doc.inserted_id
