import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/themes/prism-okaidia.css'; // A dark theme for code highlighting
import '../assets/css/learn.css'; // Custom CSS for this page

const LearnPage = () => {
  const [activeTab, setActiveTab] = useState('c'); // 'c' or 'cpp'

  // Effect to re-highlight code when the activeTab changes
  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  const cExamples = [
    {
      title: 'Hello World',
      description: 'The classic first program. Prints "Hello, World!" to the console.',
      code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`
    },
    {
      title: 'Variables and Data Types',
      description: 'Demonstrates basic integer, float, and character variable declarations and assignments.',
      code: `#include <stdio.h>\n\nint main() {\n    int age = 30;\n    float price = 19.99;\n    char initial = 'J';\n\n    printf("Age: %d\\n", age);\n    printf("Price: %.2f\\n", price);\n    printf("Initial: %c\\n", initial);\n    return 0;\n}`
    },
    {
      title: 'Basic Input/Output',
      description: 'Reads an integer from the user and prints it back.',
      code: `#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter an integer: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}`
    },
    {
      title: 'Conditional Statement (if-else)',
      description: 'Checks if a number is positive or negative.',
      code: `#include <stdio.h>\n\nint main() {\n    int num = -5;\n    if (num > 0) {\n        printf("%d is positive.\\n", num);\n    } else {\n        printf("%d is negative or zero.\\n", num);\n    }\n    return 0;\n}`
    },
    {
      title: 'Loop (for)',
      description: 'Prints numbers from 1 to 5 using a for loop.',
      code: `#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}`
    },
  ];

  const cppExamples = [
    {
      title: 'Hello World',
      description: 'The classic first program using C++ streams.',
      code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`
    },
    {
      title: 'Variables and Data Types',
      description: 'Demonstrates basic integer, double, and character variable declarations and assignments in C++.',
      code: `#include <iostream>\n\nint main() {\n    int score = 100;\n    double pi = 3.14159;\n    char grade = 'A';\n\n    std::cout << "Score: " << score << std::endl;\n    std::cout << "Pi: " << pi << std::endl;\n    std::cout << "Grade: " << grade << std::endl;\n    return 0;\n}`
    },
    {
      title: 'Basic Input/Output',
      description: 'Reads a string from the user and prints it back using `std::cin` and `std::cout`.',
      code: `#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::cout << "Enter your name: ";\n    std::cin >> name;\n    std::cout << "Hello, " << name << "!" << std::endl;\n    return 0;\n}`
    },
    {
      title: 'Conditional Statement (if-else)',
      description: 'Checks if a number is even or odd.',
      code: `#include <iostream>\n\nint main() {\n    int num = 7;\n    if (num % 2 == 0) {\n        std::cout << num << " is even." << std::endl;\n    } else {\n        std::cout << num << " is odd." << std::endl;\n    }\n    return 0;\n}`
    },
    {
      title: 'Loop (while)',
      description: 'Counts down from 5 to 1 using a while loop.',
      code: `#include <iostream>\n\nint main() {\n    int i = 5;\n    while (i > 0) {\n        std::cout << i << "... ";\n        i--;\n    }\n    std::cout << "Blastoff!" << std::endl;\n    return 0;\n}`
    },
    {
      title: 'Simple Class Example',
      description: 'Defines a simple `Dog` class with a constructor and a method.',
      code: `#include <iostream>\n#include <string>\n\nclass Dog {\npublic:\n    std::string name;\n    int age;\n\n    Dog(std::string n, int a) : name(n), age(a) {}\n\n    void bark() {\n        std::cout << name << " says Woof! I am " << age << " years old.\\n";\n    }\n};\n\nint main() {\n    Dog myDog("Buddy", 3);\n    myDog.bark();\n    return 0;\n}`
    },
  ];

  return (
    <div className="learn-container">
      <h1 className="learn-title">Learn C/C++ with Examples</h1>

      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'c' ? 'active' : ''}`}
          onClick={() => setActiveTab('c')}
        >
          Learn C
        </button>
        <button
          className={`tab-btn ${activeTab === 'cpp' ? 'active' : ''}`}
          onClick={() => setActiveTab('cpp')}
        >
          Learn C++
        </button>
      </div>

      <div className="content-area">
        {activeTab === 'c' && (
          <div className="language-section">
            <h2>C Programming Examples</h2>
            {cExamples.map((example, index) => (
              <div key={index} className="example-block">
                <h3>{example.title}</h3>
                <p>{example.description}</p>
                <pre><code className="language-c">{example.code}</code></pre>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cpp' && (
          <div className="language-section">
            <h2>C++ Programming Examples</h2>
            {cppExamples.map((example, index) => (
              <div key={index} className="example-block">
                <h3>{example.title}</h3>
                <p>{example.description}</p>
                <pre><code className="language-cpp">{example.code}</code></pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnPage;
