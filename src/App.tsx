import React from "react";

import Router from "./router";
// import Home from "./pages/Home/Index";
// import TestCvc5 from "./pages/TestCvc5/Index";
// import Module from "./wasm/cvc5";
import "./App.css";

const App = () => {
  // const stdoutRef = useRef<string>("");
  // const stderrRef = useRef<string>("");
  // const textRef = useRef<HTMLTextAreaElement>(null);
  // const changeOutRef = useRef(false);
  // const [userOutput, setUserOutput] = useState("");

  // const sanitizeDotResult = (result: string): string => result.replaceAll(/(cvc5> )+/g, "");
  // const updateStdout = (str: string) => (stdoutRef.current += str + "\n");
  // const updateStderr = (str: string) => (stderrRef.current += str + "\n");

  // let defaultArgs: string[] = [];

  // // Function called post the cvc5 execution
  // const postCVC5run = (isThereError: boolean) => {
  //   stdoutRef.current = sanitizeDotResult(stdoutRef.current).trim();
  //   // If there was an error
  //   if (isThereError && !stdoutRef.current.length) {
  //     // Change the spin message to render
  //     stderrRef.current = stderrRef.current.length
  //       ? stderrRef.current
  //       : "Error: Unknown error, check out the arguments parsed or the smt text.";

  //     setUserOutput(stderrRef.current);
  //   }

  //   // Get the result .dot
  //   else {
  //     setUserOutput(stdoutRef.current);
  //   }
  // };

  // // Clean the output a single time during the cvc5 execution
  // const cleanStdout = () => {
  //   if (!changeOutRef.current) {
  //     stdoutRef.current = "";
  //     changeOutRef.current = true;
  //   }
  // };

  // const runCvc5 = () => {
  //   // reseting varibles before executing cvc5
  //   stdoutRef.current = "";
  //   stderrRef.current = "";
  //   changeOutRef.current = false;

  //   defaultArgs = [];

  //   if (textRef.current?.value.trim().length) {
  //     Module({
  //       arguments: defaultArgs,
  //       proofTxt: textRef.current?.value,
  //       out: updateStdout,
  //       err: updateStderr,
  //       postCVC5: postCVC5run,
  //       cleanStdout: cleanStdout,
  //       binaryFileName: "cvc5.wasm"
  //     });
  //   } else {
  //     console.log("Error: Empty proof in the code editor.");
  //   }
  // };

  return (
    <div>
      <Router />

      {/*
      <textarea ref={textRef} rows={10} cols={50}></textarea>
      <button onClick={() => runCvc5()}>Run</button>
      <textarea rows={10} cols={50} value={userOutput} readOnly={true}></textarea> */}
    </div>
  );
};

export default App;
