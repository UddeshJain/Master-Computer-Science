# Python program for implementation of Insertion Sort


def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr


if __name__ == "__main__":
    n = int(input("Enter the no of elements:"))
    ar = []
    print("Enter elements:-")
    for i in range(n):
        ar.append(int(input()))
    ar = insertionSort(ar)
    for j in ar:
        print(j, end=' ')
