#!/usr/bin/env python3
""" documents module"""
from typing import List


def list_all(mongo_collection: object) -> List:
    """finds all documents in a collection"""

    docs = list(mongo_collection.find())
    return docs
