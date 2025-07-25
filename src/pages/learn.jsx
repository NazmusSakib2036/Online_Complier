import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-ruby';
import 'prismjs/themes/prism-okaidia.css'; // A dark theme for code highlighting
import '../assets/css/learn.css'; // Custom CSS for this page

const LearnPage = () => {
const [activeTab, setActiveTab] = useState('c'); // Default to 'c'

// Effect to re-highlight code when the activeTab changes
useEffect(() => {
Prism.highlightAll();
}, [activeTab]);

const cExamples = [
{
title: 'Hello World',
description: 'The classic first program. Prints "Hello, World!" to the console.',
code: `#include <stdio.h>\n\nint main() {\n printf("Hello, World!\\n");\n return 0;\n}`
},
{
title: 'Variables and Data Types',
description: 'Demonstrates basic integer, float, and character variable declarations and assignments.',
code: `#include <stdio.h>\n\nint main() {\n int age = 30;\n float price = 19.99;\n char initial = 'J';\n\n printf("Age: %d\\n", age);\n printf("Price: %.2f\\n", price);\n printf("Initial: %c\\n", initial);\n return 0;\n}`
},
{
title: 'Basic Input/Output',
description: 'Reads an integer from the user and prints it back.',
code: `#include <stdio.h>\n\nint main() {\n int num;\n printf("Enter an integer: ");\n scanf("%d", &num);\n printf("You entered: %d\\n", num);\n return 0;\n}`
},
{
title: 'Conditional Statement (if-else)',
description: 'Checks if a number is positive or negative.',
code: `#include <stdio.h>\n\nint main() {\n int num = -5;\n if (num > 0) {\n printf("%d is positive.\\n", num);\n } else {\n printf("%d is negative or zero.\\n", num);\n }\n return 0;\n}`
},
{
title: 'Loop (for)',
description: 'Prints numbers from 1 to 5 using a for loop.',
code: `#include <stdio.h>\n\nint main() {\n for (int i = 1; i <= 5; i++) {\n printf("%d ", i);\n }\n printf("\\n");\n return 0;\n}`
},
];

const cppExamples = [
{
title: 'Hello World',
description: 'The classic first program using C++ streams.',
code: `#include <iostream>\n\nint main() {\n std::cout << "Hello, World!" << std::endl;\n return 0;\n}`
},
{
title: 'Variables and Data Types',
description: 'Demonstrates basic integer, double, and character variable declarations and assignments in C++.',
code: `#include <iostream>\n\nint main() {\n int score = 100;\n double pi = 3.14159;\n char grade = 'A';\n\n std::cout << "Score: " << score << std::endl;\n std::cout << "Pi: " << pi << std::endl;\n std::cout << "Grade: " << grade << std::endl;\n return 0;\n}`
},
{
title: 'Basic Input/Output',
description: 'Reads a string from the user and prints it back using `std::cin` and `std::cout`.',
code: `#include <iostream>\n#include <string>\n\nint main() {\n std::string name;\n std::cout << "Enter your name: ";\n std::cin >> name;\n std::cout << "Hello, " << name << "!" << std::endl;\n return 0;\n}`
},
{
title: 'Conditional Statement (if-else)',
description: 'Checks if a number is even or odd.',
code: `#include <iostream>\n\nint main() {\n int num = 7;\n if (num % 2 == 0) {\n std::cout << num << " is even." << std::endl;\n } else {\n std::cout << num << " is odd." << std::endl;\n }\n return 0;\n}`
},
{
title: 'Loop (while)',
description: 'Counts down from 5 to 1 using a while loop.',
code: `#include <iostream>\n\nint main() {\n int i = 5;\n while (i > 0) {\n std::cout << i << "... ";\n i--;\n }\n std::cout << "Blastoff!" << std::endl;\n return 0;\n}`
},
{
title: 'Simple Class Example',
description: 'Defines a simple `Dog` class with a constructor and a method.',
code: `#include <iostream>\n#include <string>\n\nclass Dog {\npublic:\n std::string name;\n int age;\n\n Dog(std::string n, int a) : name(n), age(a) {}\n\n void bark() {\n std::cout << name << " says Woof! I am " << age << " years old.\\n";\n }\n};\n\nint main() {\n Dog myDog("Buddy", 3);\n myDog.bark();\n return 0;\n}`
},
];

const pythonExamples = [
{
title: 'Hello World',
description: 'Prints "Hello, World!" to the console in Python.',
code: `print("Hello, World!")`
},
{
title: 'Variables and Data Types',
description: 'Demonstrates integer, float, and string variable assignments.',
code: `age = 30\nprice = 19.99\nname = "Alice"\n\nprint(f"Age: {age}")\nprint(f"Price: {price}")\nprint(f"Name: {name}")`
},
{
title: 'Basic Input/Output',
description: 'Reads a name from the user and prints a greeting.',
code: `name = input("Enter your name: ")\nprint(f"Hello, {name}!")`
},
{
title: 'Conditional Statement (if-else)',
description: 'Checks if a number is positive or negative.',
code: `num = -5\nif num > 0:\n print(f"{num} is positive.")\nelse:\n print(f"{num} is negative or zero.")`
},
{
title: 'Loop (for)',
description: 'Prints numbers from 1 to 5 using a for loop.',
code: `for i in range(1, 6):\n print(i, end=" ")`
},
];

const javaExamples = [
{
title: 'Hello World',
description: 'The classic first program in Java.',
code: `public class HelloWorld {\n public static void main(String[] args) {\n System.out.println("Hello, World!");\n }\n}`
},
{
title: 'Variables and Data Types',
description: 'Demonstrates integer, double, and string variable declarations.',
code: `public class DataTypes {\n public static void main(String[] args) {\n int age = 25;\n double salary = 50000.50;\n String city = "New York";\n\n System.out.println("Age: " + age);\n System.out.println("Salary: " + salary);\n System.out.println("City: " + city);\n }\n}`
},
{
title: 'Basic Input/Output',
description: 'Reads an integer from the user and prints it back.',
code: `import java.util.Scanner;\n\npublic class InputOutput {\n public static void main(String[] args) {\n Scanner scanner = new Scanner(System.in);\n System.out.print("Enter an integer: ");\n int num = scanner.nextInt();\n System.out.println("You entered: " + num);\n scanner.close();\n }\n}`
},
{
title: 'Conditional Statement (if-else)',
description: 'Checks if a number is even or odd.',
code: `public class Conditional {\n public static void main(String[] args) {\n int num = 10;\n if (num % 2 == 0) {\n System.out.println(num + " is even.");\n } else {\n System.out.println(num + " is odd.");\n }\n }\n}`
},
{
title: 'Loop (for)',
description: 'Prints numbers from 1 to 5 using a for loop.',
code: `public class ForLoop {\n public static void main(String[] args) {\n for (int i = 1; i <= 5; i++) {\n System.out.print(i + " ");\n }\n System.out.println();\n }\n}`
},
];

const javascriptExamples = [
{
title: 'Hello World',
description: 'Prints "Hello, World!" to the console in JavaScript.',
code: `console.log("Hello, World!");`
},
{
title: 'Variables and Data Types',
description: 'Demonstrates number, string, and boolean variable declarations.',
code: `let age = 28;\nconst name = "Bob";\nlet isActive = true;\n\nconsole.log(\`Age: \${age}\`);\nconsole.log(\`Name: \${name}\`);\nconsole.log(\`Active: \${isActive}\`);`
},
{
title: 'Basic Input/Output (Browser)',
description: 'Uses `prompt` for input and `alert` for output (browser environment).',
code: `// This code runs in a browser environment\n// let userName = prompt("What's your name?");\n// alert(\`Hello, \${userName}!\`);\n\n// For Node.js/console, you'd use a library like 'readline-sync'\nconsole.log("Input/Output examples vary by JS environment.");`
},
{
title: 'Conditional Statement (if-else)',
description: 'Checks if a number is greater than 10.',
code: `let num = 12;\nif (num > 10) {\n console.log(\`\${num} is greater than 10.\`);\n} else {\n console.log(\`\${num} is not greater than 10.\`);\n}`
},
{
title: 'Loop (for)',
description: 'Prints numbers from 0 to 4 using a for loop.',
code: `for (let i = 0; i < 5; i++) {\n console.log(i);\n}`
},
];

const goExamples = [
{
title: 'Hello World',
description: 'The classic first program in Go.',
code: `package main\n\nimport "fmt"\n\nfunc main() {\n fmt.Println("Hello, World!")\n}`
},
{
title: 'Variables and Data Types',
description: 'Demonstrates variable declarations and types in Go.',
code: `package main\n\nimport "fmt"\n\nfunc main() {\n var name string = "Charlie"\n age := 40 // Short declaration\n isGoGopher := true\n\n fmt.Printf("Name: %s\\n", name)\n fmt.Printf("Age: %d\\n", age)\n fmt.Printf("Is Go Gopher: %t\\n", isGoGopher)\n}`
},
{
title: 'Basic Input/Output',
description: 'Reads a string from the user and prints it back.',
code: `package main\n\nimport (\n "bufio"\n "fmt"\n "os"\n "strings"\n)\n\nfunc main() {\n reader := bufio.NewReader(os.Stdin)\n fmt.Print("Enter some text: ")\n input, _ := reader.ReadString('\\n')\n fmt.Println("You entered:", strings.TrimSpace(input))\n}`
},
{
title: 'Conditional Statement (if-else)',
description: 'Checks if a number is even or odd.',
code: `package main\n\nimport "fmt"\n\nfunc main() {\n num := 9\n if num%2 == 0 {\n fmt.Printf("%d is even.\\n", num)\n } else {\n fmt.Printf("%d is odd.\\n", num)\n }\n}`
},
{
title: 'Loop (for)',
description: 'Prints numbers from 1 to 3 using a for loop.',
code: `package main\n\nimport "fmt"\n\nfunc main() {\n for i := 1; i <= 3; i++ {\n fmt.Println(i)\n }\n}`
},
];

const rubyExamples = [
{
title: 'Hello World',
description: 'The classic first program in Ruby.',
code: `puts "Hello, World!"`
},
{
title: 'Variables and Data Types',
description: 'Demonstrates basic variable assignments in Ruby.',
code: `name = "David"\nage = 35\nprice = 29.99\n\nputs "Name: #{name}"\nputs "Age: #{age}"\nputs "Price: #{price}"`
},
{
title: 'Basic Input/Output',
description: 'Reads a name from the user and prints a greeting.',
code: `print "Enter your name: "\nname = gets.chomp\nputs "Hello, #{name}!"`
},
{
title: 'Conditional Statement (if-else)',
description: 'Checks if a number is greater than 10.',
code: `num = 7\nif num > 10\n puts "#{num} is greater than 10."\nelse\n puts "#{num} is not greater than 10."\nend`
},
{
title: 'Loop (times method)',
description: 'Prints "Hello" 3 times using the `times` method.',
code: `3.times do |i|\n puts "Hello #{i + 1}"\nend`
},
];

const allExamples = {
c: cExamples,
cpp: cppExamples,
python: pythonExamples,
java: javaExamples,
javascript: javascriptExamples,
go: goExamples,
ruby: rubyExamples,
};

return (
<div className="learn-container">
<h1 className="learn-title">Learn Programming with Examples</h1>

<div className="tab-navigation">
<button
className={`tab-btn ${activeTab === 'c' ? 'active' : ''}`}
onClick={() => setActiveTab('c')}
>
C
</button>
<button
className={`tab-btn ${activeTab === 'cpp' ? 'active' : ''}`}
onClick={() => setActiveTab('cpp')}
>
C++
</button>
<button
className={`tab-btn ${activeTab === 'python' ? 'active' : ''}`}
onClick={() => setActiveTab('python')}
>
Python
</button>
<button
className={`tab-btn ${activeTab === 'java' ? 'active' : ''}`}
onClick={() => setActiveTab('java')}
>
Java
</button>
<button
className={`tab-btn ${activeTab === 'javascript' ? 'active' : ''}`}
onClick={() => setActiveTab('javascript')}
>
JavaScript
</button>
<button
className={`tab-btn ${activeTab === 'go' ? 'active' : ''}`}
onClick={() => setActiveTab('go')}
>
Go
</button>
<button
className={`tab-btn ${activeTab === 'ruby' ? 'active' : ''}`}
onClick={() => setActiveTab('ruby')}
>
Ruby
</button>
</div>

<div className="content-area">
{allExamples[activeTab] && (
<div className="language-section">
<h2>{activeTab.toUpperCase()} Programming Examples</h2>
{allExamples[activeTab].map((example, index) => (
<div key={index} className="example-block">
<h3>{example.title}</h3>
<p>{example.description}</p>
<pre><code className={`language-${activeTab}`}>{example.code}</code></pre>
</div>
))}
</div>
)}
</div>
</div>
);
};

export default LearnPage;