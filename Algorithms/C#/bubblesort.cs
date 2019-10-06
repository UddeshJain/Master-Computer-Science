using System;

namespace Algorithms {
    /// <summary>
    /// Sorts collections using the BubbleSort algorithm.
    /// </summary>
    public static class BubbleSort {

        private static void swap(int[] array, int index1, int index2) {
            var temp = array[index1];
            array[index1] = array[index2];
            array[index2] = temp;
        }

        public static void Sort(int[] array) {
            for (int j = 0; j < array.Length - 1; j++) {
                for (int i = 0; i < array.Length - 1; i++) {
                    if (array[i] > array[i + 1]) {
                        swap(array, i, i + 1);
                    }
                }
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
