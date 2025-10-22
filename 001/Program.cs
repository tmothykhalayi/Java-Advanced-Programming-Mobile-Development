// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
// Console.Write("I'm Timothy Khalayi");
//A SIMPLE C# PROGRAM
// using System ;
// class Program 
// {
//     static void Main (string[] args )
//     {
//         Console.WriteLine("I'm Timothy Khalayi");
//     }
// }

// A SIMPLE C# PROGRAM WITH USER INPUT
// using System ;
// class Program 
// {
//     static void Main (string [] args )
//     {
//         Console.WriteLine("Enter your First Name:");
//         string firstName =Console.ReadLine ();
//         Console.WriteLine("Enter your Last Name:");
//         string lastName =Console.ReadLine ();
//         Console.WriteLine("I'm " + firstName + " " + lastName);
//     }
// }

//datatypes in C#
// using System ;
// class Program
// {
// static void Main (String [] args )
// {
// int radius =7;
// double  pi =3.14;
// double area =pi *radius *radius;
// Console.WriteLine("The area of the circle is :" + area);
// }

// }

//control state ments in c# and declaration of variables
//if ..else statement
// using System ;
// class Program 
// {
//     static void Main (string []args )
//     {
//         Console.WriteLine("Enter your Age:");
//         int age = Convert.ToInt32(Console.ReadLine());
//         if (age >= 18)
//         {
//             Console.WriteLine("You are an adult .");
//         }
//         else
//         {
//             Console.WriteLine("You are a minor .");

//         }

//     }
// }


//switch statement
// using System ;
// class Program 
// {
//     static void Main (string []args )
//     {
//         int marks =65 ;
//        switch (marks)
//         {
//             case int n when (n >= 70):
//         Console.WriteLine("Excellent");
//         break;
//     case int n when (n >= 60):
//         Console.WriteLine("Very Good");
//         break;
//     case int n when (n >= 50):
//         Console.WriteLine("Good");
//         break;
//     case int n when (n >= 40):
//         Console.WriteLine("Average");
//         break;
//     default:
//         Console.WriteLine("Below Average");
//         break;
// }
//         }
//     }


//loops in c#
//for loop
// using System ;
// class Program 
// {
//     static void Main (string []args )
//     {
//         for (int i =1;i<=10;i++)
//         {
//             Console.WriteLine("The value of i is :" + i);

//         }
        
//     }
// }

//while loop
// using System;
// class Program 
// {
//     static void Main (string [] args )
//     {
//         int i =1;
//         while (i <=10)
//         {
//             Console.WriteLine("The value of i is :" + i);
//             i++;    
//         }
//     }
// }

//do..while loop
// using System;
// class Program 
// {
//     static void Main (string [] args )
//     {
//         int i =1;
//         do{
//             Console.WriteLine("The value of i is :" + i);
//             i++;
//         }
//         while (i <=10);
//     }
// }

//Functions in c#
using System ;
class Program
{
    static void Main (string [] args )
    {
        int num1 =5;
        int num2 =10;
        int sum =AddNumbers(num1,num2);
        Console.WriteLine("The sum of " + num1 + " and " + num2 + " is :" + sum);
    }

    static int AddNumbers(int a, int b)
    {
        return a + b;
    }
    static int MultiplyNumbers(int a, int b)
    {
        return a * b;
    }
}