#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict


class Server:
    """Server class to paginate a database."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Loads dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Indexed dataset."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = 0, page_size: int = 10) -> Dict:
        """Returns a deletion-resilient page."""
        dataset = self.indexed_dataset()

        # ✅ Validación
        assert isinstance(index, int)
        assert index >= 0 and index < len(dataset)

        data = []
        current_index = index

        # ✅ Recorrer sin romperse si hay deletes
        while len(data) < page_size and current_index <= max(dataset.keys()):
            if current_index in dataset:
                data.append(dataset[current_index])
            current_index += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": current_index
        }
