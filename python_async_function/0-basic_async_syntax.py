#!/usr/bin/env python3
"""Module that contains an async function that waits a random delay."""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0 and max_delay seconds and return it."""
    await asyncio.sleep(random.uniform(0, max_delay))
    return random.uniform(0, max_delay)
