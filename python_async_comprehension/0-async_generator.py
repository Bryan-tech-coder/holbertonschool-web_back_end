#!/usr/bin/env python3
"""Module containing an asynchronous generator that yields 10 random numbers."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that loops 10 times,
    waits 1 second each iteration, and yields a random float between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
