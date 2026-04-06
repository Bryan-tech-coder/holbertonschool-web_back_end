#!/usr/bin/env python3
"""Module that contains a function to create a key-value tuple."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with the string and the square of the number."""
    return (k, float(v ** 2))
