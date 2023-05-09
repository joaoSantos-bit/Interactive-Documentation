import React, { useRef, useState } from "react";

import Editor from "@monaco-editor/react";
import Button from "../../components/Button/Button";

import Module from "../../wasm/cvc5";

const Prompt = ({
  defaultCode = "; write and run smtlib2 code",
  height,
  width,
  editorHeight,
  outputHeight
}: {
  defaultCode?: string;
  height: string;
  width: string;
  editorHeight: string;
  outputHeight: string;
}) => {
  const stdoutRef = useRef<string>("");
  const stderrRef = useRef<string>("");
  const textRef = useRef<string>("");
  const changeOutRef = useRef(false);
  const [userOutput, setUserOutput] = useState("");

  const sanitizeDotResult = (result: string): string => result.replaceAll(/(cvc5> )+/g, "");
  const updateStdout = (str: string) => (stdoutRef.current += str + "\n");
  const updateStderr = (str: string) => (stderrRef.current += str + "\n");

  let defaultArgs: string[] = [];

  // Function called post the cvc5 execution
  const postCVC5run = (isThereError: boolean) => {
    stdoutRef.current = sanitizeDotResult(stdoutRef.current).trim();
    // If there was an error
    if (isThereError && !stdoutRef.current.length) {
      // Change the spin message to render
      stderrRef.current = stderrRef.current.length
        ? stderrRef.current
        : "Error: Unknown error, check out the arguments parsed or the smt text.";

      setUserOutput(stderrRef.current);
    }

    // Get the result .dot
    else {
      setUserOutput(stdoutRef.current);
    }
  };

  // Clean the output a single time during the cvc5 execution
  const cleanStdout = () => {
    if (!changeOutRef.current) {
      stdoutRef.current = "";
      changeOutRef.current = true;
    }
  };

  const runCvc5 = () => {
    // reseting varibles before executing cvc5
    stdoutRef.current = "";
    stderrRef.current = "";
    changeOutRef.current = false;

    defaultArgs = [];

    if (textRef.current.trim().length) {
      Module({
        arguments: defaultArgs,
        proofTxt: textRef.current,
        out: updateStdout,
        err: updateStderr,
        postCVC5: postCVC5run,
        cleanStdout: cleanStdout,
        binaryFileName: "cvc5.wasm"
      });
    } else {
      setUserOutput("Error: Empty proof in the code editor.");
    }
  };

  const btnStyle = {
    height: "40px",
    borderRadius: "4px",
    color: "#f4f4f8",
    marginTop: "20px",
    fontWeight: "bolder",
    padding: "5px 40px"
  };

  const runBtnStyle = {
    backgroundColor: "#028a0f"
  };

  const visualizeProofBtn = {
    marginLeft: "auto",
    display: "block",
    backgroundColor: "#1c1c1c"
  };

  return (
    <div
      style={{
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }}
    >
      <div style={{ width: "100%" }}>
        <div style={{ height: editorHeight }}>
          <Editor
            height="100%"
            width="100%"
            defaultLanguage={"graphql"}
            defaultValue={defaultCode}
            onChange={value => value !== undefined && (textRef.current = value)}
          />
        </div>
        <Button contentText="Run" btnStyle={{ ...btnStyle, ...runBtnStyle }} onClick={runCvc5} />
      </div>
      <div style={{ width: "100%" }}>
        <textarea
          style={{
            width: "100%",
            height: outputHeight,
            backgroundColor: "rgba(1, 1, 1, 0.05)",
            border: "--var(contentColor)",
            resize: "none",
            padding: "10px 20px"
          }}
          value={userOutput}
          readOnly={true}
        ></textarea>
        <Button contentText="Visualize Proof" btnStyle={{ ...btnStyle, ...visualizeProofBtn }} />
      </div>
    </div>
  );
};

export default Prompt;
