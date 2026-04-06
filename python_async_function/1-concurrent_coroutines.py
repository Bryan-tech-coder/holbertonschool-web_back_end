#!/usr/bin/env python3
"""Module that contains an async function to run multiple wait_random coroutines concurrently."""

import asyncio
from 0-basic_async_syntax import wait_random
from typing import List


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with max_delay and return list of results in order of completion."""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results = []
    for task in asyncio.as_completed(tasks):
        result = await task
        results.append(result)
    return results
