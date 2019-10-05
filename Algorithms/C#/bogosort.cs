using System;

namespace ConsoleApp1.Algorithms {
    /// <summary>
    /// Sorts collections using the BogoSort algorithm.
    /// (Only added for educational purposes.)
    /// </summary>
    /// <remarks>
    /// Warning: BogoSort is a highly inefficient sorting algorithm. 
    /// An anology for bogosort is to sort a deck of cards by throwing the deck into the air,
    /// picking the cards up at random, and repeating this process untill the deck is sorted.
    /// </remarks>
    public static class BogoSort {
        private static Random random;

        private static void swap(int[] array, int index1, int index2) {
            var temp = array[index1];
            array[index1] = array[index2];
            array[index2] = temp;
        }

        private static void shuffle(int[] array) {
            if (random == null) {
                random = new Random();
            }

            for (int i = 0; i < array.Length; i++) {
                // Randomly swap positions within the collection.
                swap(array, i, random.Next(0, array.Length - 1));
            }
        }

        private static bool isSorted(int[] array) {
            for (int i = 0; i < array.Length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    return false;
                }
            }

            return true;
        }

        public static void Sort(int[] array) {
            while (!isSorted(array)) {
                shuffle(array);
            }
        }


        // Do not actually run this algorithm. It might never complete.
        // It might work for really small collection.
        public static int Main(string[] args) {
            /* Warning: sorting is inefficient. DO NOT run with large collections. */
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