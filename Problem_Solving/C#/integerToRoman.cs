using System;

namespace ProblemSolving {
    /// <summary>
    /// Transforms an integer into a roman numeral.
    /// </summary>
    public static class IntegerToRoman {

        public static string ConvertToRoman(int number) {
            if ((number < 0) || (number >= 4000)) {
                throw new ArgumentOutOfRangeException("Number should be a positive integer not larger than 3999");
            }

            StringBuilder stringBuilder = new StringBuilder();

            while(number >= 1) {
                if     (number >= 1000) { stringBuilder.Append("M");  number -= 1000; }
                else if (number >= 900) { stringBuilder.Append("CM"); number -=  900; }
                else if (number >= 500) { stringBuilder.Append("D");  number -=  500; }
                else if (number >= 400) { stringBuilder.Append("CD"); number -=  400; }
                else if (number >= 100) { stringBuilder.Append("C");  number -=  100; }
                else if (number >=  90) { stringBuilder.Append("XC"); number -=   90; }
                else if (number >=  50) { stringBuilder.Append("L");  number -=   50; }
                else if (number >=  40) { stringBuilder.Append("XL"); number -=   40; }
                else if (number >=  10) { stringBuilder.Append("X");  number -=   10; }
                else if (number >=   9) { stringBuilder.Append("IX"); number -=    9; }
                else if (number >=   5) { stringBuilder.Append("V");  number -=    5; }
                else if (number >=   4) { stringBuilder.Append("IV"); number -=    4; }
                else if (number >=   1) { stringBuilder.Append("I");  number -=    1; }
            }

            return stringBuilder.ToString();
        }

        public static int Main(string[] args) {
            Console.WriteLine( ConvertToRoman(792) );

            Console.Read(); // prevent application from closing.
            return 0;
        }
    }
}
