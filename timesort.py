import threading
import time

def handleelem(elem):
    time.sleep(elem)
    print(elem)

def time_sort(array):
    final_array = []
    for i in array:
        t = threading.Thread(target=handleelem, args=[i])
        t.start()

array = [2, 5, 2, 6, 1, 3, 4, 5, 2, 4, 3]
time_sort(array)