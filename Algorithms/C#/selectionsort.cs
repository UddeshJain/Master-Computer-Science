using System;

namespace Algorithms {
    /// <summary>
    /// Sorts collections using the Selection Sort algorithm.
    /// </summary>
    public static class SelectionSort {
        
        private static void swap(int[] array, int index1, int index2) {
            var temp = array[index1];
            array[index1] = array[index2];
            array[index2] = temp;
        }

        public static void Sort(int[] array) {
            for (int j = 0; j < array.Length - 1; j++) { // Loop through the entire array
                int minIndex = j; // Store the index of the smallest element
                
                for (int i = j; i < array.Length; i++) { // Loop through the unsorted part of the array
                    if (array[i] < array[minIndex]) {
                        minIndex = i;
                    }
                }

                // Swap positions such that the smallest element will be inserted at the beginning of the unsorted part.
                swap(array, j, minIndex); 
            }
        }

        public static int Main(string[] args) {
            int[] numbers = { 5, 4, 1, 2, 3 };

            Sort(numbers);

            foreach (int item in numbers) {
                Console.WriteLine($"{item}");
            }

            Console.Read(); // prevent application from closing.
            return 0;
        }
    }
}
