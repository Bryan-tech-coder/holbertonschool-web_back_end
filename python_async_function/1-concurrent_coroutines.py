#!/usr/bin/env python3
"""Module to concurrently run wait_random coroutines and return results in order of completion."""

import asyncio
from 0-basic_async_syntax import wait_random
from typing import List


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay and
    return a list of all delays in order of completion.
    """
    # Crear tareas
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results: List[float] = []

    # Iterar sobre las tareas en orden de finalización
    for task in asyncio.as_completed(tasks):
        result = await task
        results.append(result)

    return results
