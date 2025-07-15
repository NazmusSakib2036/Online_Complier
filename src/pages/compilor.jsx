import React, { useState, useRef } from 'react';

import axios from 'axios';

import '../assets/css/comilor.css';



const Compiler = () => {

  const defaultCodes = {

    c: `#include <stdio.h>\n\nint main() {\n    printf("Learn With Nazmus Sakib (C)");\n    return 0;\n}`,

    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Learn With Nazmus Sakib (C++)" << endl;\n    return 0;\n}`,

    python: `print("Learn With Nazmus Sakib (Python)")`,

    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Learn With Nazmus Sakib (Java)");\n    }\n}`,

    javascript: `console.log("Learn With Nazmus Sakib (JavaScript)");`,

    go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Learn With Nazmus Sakib (Go)")\n}`,

    ruby: `puts "Learn With Nazmus Sakib (Ruby)"`,

    csharp: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Learn With Nazmus Sakib (C#)");\n    }\n}`,

    typescript: `console.log("Learn With Nazmus Sakib (TypeScript)");`

  };



  // Language configurations

  const languageConfig = {

    c: { language: 'c', version: '10.2.0' },

    cpp: { language: 'cpp', version: '10.2.0' },

    python: { language: 'python', version: '3.10.0' },

    java: { language: 'java', version: '15.0.2' },

    javascript: { language: 'javascript', version: '18.15.0' },

    go: { language: 'go', version: '1.16.2' },

    ruby: { language: 'ruby', version: '3.0.1' },

    csharp: { language: 'csharp', version: '6.12.0' },

    typescript: { language: 'typescript', version: '5.0.3' }

  };



  const [code, setCode] = useState(defaultCodes.cpp);

  const [output, setOutput] = useState('');

  const [language, setLanguage] = useState('cpp');

  const [theme, setTheme] = useState('dark');

  const [isLoading, setIsLoading] = useState(false);

  const textareaRef = useRef(null);



  const handleLanguageChange = (e) => {

    const newLang = e.target.value;

    setLanguage(newLang);

    setCode(defaultCodes[newLang]);

    setOutput('');

  };



  const handleRun = async () => {

    if (!code.trim()) {

      setOutput('Error: Please enter some code first');

      return;

    }



    setIsLoading(true);

    setOutput('Compiling...');

    

    try {

      const config = languageConfig[language];

      if (!config) throw new Error('Language not supported');



      const response = await axios.post(

        import.meta.env.VITE_PISTON_API_URL || 'https://emkc.org/api/v2/piston/execute',

        {

          language: config.language,

          version: config.version,

          files: [{ content: code }]

        },

        { timeout: 10000 }

      );



      const result = response.data;

      setOutput(

        result.run?.stderr || 

        result.compile_output || 

        result.run?.output || 

        'Execution completed with no output'

      );

    } catch (error) {

      console.error('API Error:', error);

      setOutput(`Error: ${error.response?.data?.message || error.message}`);

    } finally {

      setIsLoading(false);

    }

  };



  const handleClear = () => {

    setCode(defaultCodes[language]);

    setOutput('');

  };



  const handleKeyDown = (e) => {

    if (e.key === 'Tab') {

      e.preventDefault();

      const { selectionStart, selectionEnd } = e.target;

      const newCode = code.substring(0, selectionStart) + '    ' + code.substring(selectionEnd);

      setCode(newCode);

      

      setTimeout(() => {

        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 4;

      }, 0);

    }

  };



  return (

    <div className={`compiler ${theme}-theme`}>

      <div className="compiler__container">

        <header className="compiler__header">

          <h1 className="compiler__title">Online Multi-Language Compiler</h1>

          <div className="compiler__controls">

            <select 

              value={language} 

              onChange={handleLanguageChange}

              disabled={isLoading}

              className="compiler__select"

            >

              {Object.keys(languageConfig).map(lang => (

                <option key={lang} value={lang}>{lang.toUpperCase()}</option>

              ))}

            </select>

            

            <select 

              value={theme} 

              onChange={(e) => setTheme(e.target.value)}

              disabled={isLoading}

              className="compiler__select"

            >

              <option value="dark">Dark</option>

              <option value="light">Light</option>

            </select>

            

            <button 

              className={`compiler__button compiler__button--run ${isLoading ? 'disabled' : ''}`} 

              onClick={handleRun}

              disabled={isLoading}

            >

              {isLoading ? (

                <>

                  <span className="compiler__spinner"></span> Running...

                </>

              ) : 'Run'}

            </button>

            

            <button 

              className={`compiler__button compiler__button--clear ${isLoading ? 'disabled' : ''}`} 

              onClick={handleClear}

              disabled={isLoading}

            >

              Clear

            </button>

          </div>

        </header>



        <div className="compiler__workspace">

          <div className="compiler__editor">

            <div className="compiler__editor-header">

              <span>Sakib.{language}</span>

            </div>

            <div className="compiler__code-wrapper">

              <pre className="compiler__code-display">{code}</pre>

              <textarea

                ref={textareaRef}

                value={code}

                onChange={(e) => setCode(e.target.value)}

                onKeyDown={handleKeyDown}

                className="compiler__code-input"

                spellCheck="false"

                disabled={isLoading}

              />

            </div>

          </div>



          <div className="compiler__output">

            <div className="compiler__output-header">

              <span>Output</span>

            </div>

            <pre className="compiler__output-content">

              {output || 'Click "Run" to see the output here'}

            </pre>

          </div>

        </div>

      </div>

    </div>

  );

};



export default Compiler;