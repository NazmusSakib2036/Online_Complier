import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../assets/css/comilor.css';

const Compiler = () => {
  // Default code templates
  const defaultCodes = {
    c: `#include <stdio.h>\n\nint main() {\n    printf("Learn With Nazmus Sakib (C)");\n    return 0;\n}`,
    cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Learn With Nazmus Sakib (C++)" << endl;\n    return 0;\n}`,
    python: `print("Learn With Nazmus Sakib (Python)")`,
    java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Learn With Nazmus Sakib (Java)");\n    }\n}`,
    javascript: `console.log("Learn With Nazmus Sakib (JavaScript)");`,
    go: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Learn With Nazmus Sakib (Go)")\n}`,
    ruby: `puts "Learn With Nazmus Sakib (Ruby)"`,
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
  };

  const [code, setCode] = useState(defaultCodes.cpp);
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFixing, setIsFixing] = useState(false);
  const textareaRef = useRef(null);

  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`;

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(defaultCodes[newLang]);
    setOutput('');
    setErrorMessage('');
  };

  const handleRun = async () => {
    if (!code.trim()) {
      setOutput('Error: Please enter some code first');
      setErrorMessage('Please enter some code first.');
      return;
    }

    setIsLoading(true);
    setOutput('Compiling...');
    setErrorMessage('');

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
        { timeout: 15000 }
      );

      const result = response.data;
      let finalOutput = '';
      let errorDetected = false;

      if (result.compile_output) {
        finalOutput = `Compile Output:\n${result.compile_output}`;
        errorDetected = true;
      } else if (result.run?.stderr) {
        finalOutput = `Runtime Error:\n${result.run.stderr}`;
        errorDetected = true;
      } else if (result.run?.output) {
        finalOutput = result.run.output;
      } else {
        finalOutput = 'Execution completed with no output';
      }

      setOutput(finalOutput);
      if (errorDetected) {
        setErrorMessage(finalOutput);
      } else {
        setErrorMessage('');
      }

    } catch (error) {
      console.error('API Error:', error);
      const errorMsg = `Error: ${error.response?.data?.message || error.message}`;
      setOutput(errorMsg);
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFixCode = async () => {
    if (!code.trim()) {
      setOutput('No error to fix or no code available.');
      // return;
    }

    setIsFixing(true);
    setOutput('Attempting to fix code with AI...');

    try {
      const prompt = `The following code in ${language} has an error. Please fix it and return ONLY the corrected code. Do not include any explanations, comments, or additional text outside the code block. Just the raw, corrected code, ready to be compiled.\n\nCode:\n\`\`\`${language}\n${code}\n\`\`\`\n\nError Message:\n${errorMessage}\n\nFixed code:`;

      const response = await axios.post(
        GEMINI_API_URL,
        {
          contents: [{ parts: [{ text: prompt }] }]
        },
        { timeout: 30000 }
      );

      const fixedCodeResponse = response.data.candidates[0]?.content?.parts[0]?.text;

      if (fixedCodeResponse) {
        const extractedCode = fixedCodeResponse.match(/```(?:\w+)?\n([\s\S]*?)\n```/);
        const finalFixedCode = extractedCode ? extractedCode[1].trim() : fixedCodeResponse.trim();
        setCode(finalFixedCode);
        setOutput('Your Code is fixed. Please click "Run" again to verify.');
        setErrorMessage('');
      } else {
        setOutput('AI could not provide a fix. Please review the code manually.');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      setOutput(`Error fixing code: ${error.response?.data?.error?.message || error.message}. Please try again or fix manually.`);
    } finally {
      setIsFixing(false);
    }
  };

  const handleClear = () => {
    setCode(defaultCodes[language]);
    setOutput('');
    setErrorMessage('');
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
              disabled={isLoading || isFixing}
              className="compiler__select"
            >
              {Object.keys(languageConfig).map(lang => (
                <option key={lang} value={lang}>{lang.toUpperCase()}</option>
              ))}
            </select>
            
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              disabled={isLoading || isFixing}
              className="compiler__select"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
            
            <button
              className={`compiler__button compiler__button--run ${isLoading ? 'disabled' : ''}`}
              onClick={handleRun}
              disabled={isLoading || isFixing}
            >
              {isLoading ? (
                <>
                  <span className="compiler__spinner"></span> Running...
                </>
              ) : (
                <>
                  <span className="compiler__button-icon">▶</span> Run
                </>
              )}
            </button>
            
            <button
              className={`compiler__button compiler__button--clear ${isLoading || isFixing ? 'disabled' : ''}`}
              onClick={handleClear}
              disabled={isLoading || isFixing}
            >
              <span className="compiler__button-icon">✕</span> Clear
            </button>
          </div>
        </header>

        <div className="compiler__workspace">
          <div className="compiler__editor">
            <div className="compiler__editor-header">
              <div className="compiler__filename-container">
                <span className="compiler__file-icon">📄</span>
                <span className="compiler__filename">DarkCode.{language}</span>
              </div>
              {(
                <div className="compiler__fix-action">
                  <button
                    className={`compiler__button compiler__button--fix ${isFixing ? 'disabled' : ''}`}
                    onClick={handleFixCode}
                    disabled={isFixing || isLoading}
                  >
                    {isFixing ? (
                      <>
                        <span className="compiler__spinner"></span> Fixing...
                      </>
                    ) : (
                      <>
                        Fix Now
                      </>
                    )}
                  </button>
                </div>
              )}
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
                disabled={isLoading || isFixing}
              />
            </div>
          </div>

          <div className="compiler__output">
            <div className="compiler__output-header">
              <span className="compiler__output-title">
                <span className="compiler__output-icon">📋</span> Output
              </span>
            </div>
            <div className="compiler__output-content">
              <pre className="compiler__output-text">
                {output || 'Click "Run" to see the output here'}
              </pre>
              {errorMessage && (
                <div className="compiler__fix-action compiler__fix-action--output">
                  <button
                    className={`compiler__button compiler__button--fix ${isFixing ? 'disabled' : ''}`}
                    onClick={handleFixCode}
                    disabled={isFixing || isLoading}
                  >
                    {isFixing ? (
                      <>
                        <span className="compiler__spinner"></span> Fixing...
                      </>
                    ) : (
                      <>
                        Fix Now
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;