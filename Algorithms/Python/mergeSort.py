# Merge Sort algorithm in Python

def merge_sort(alist):
    if len(alist) < 2:
        return alist
    else:
        mid = len(alist) / 2
        return merge(merge_sort(alist[:mid]), merge_sort(alist[mid:]))

def merge(left, right):
    i = 0
    j = 0
    merged = []
    while (i < len(left) and j < len(right)):
        if left[i] < right[j]:
            merged.append(left[i])
            i = i + 1
        else:
            merged.append(right[j])
            j = j + 1
    merged = merged + right[j:] + left[i:]
    return merged

print(merge_sort([3, 5, 1, 0]))
print(merge_sort([]))
print(merge_sort([5]))
print(merge_sort([2, 7]))
print(merge_sort([3, -2, 1, 0]))
print(merge_sort([-40, 2000, 1, -2]))