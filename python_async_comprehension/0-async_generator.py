#!/usr/bin/env python3
"""
0-async_generator.py
This module defines an asynchronous generator that yields 10 random numbers
between 0 and 10, waiting 1 second between each yield.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None, None]:
    """
    Asynchronous generator that loops 10 times, waiting 1 second each iteration,
    and yields a random float between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
