import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./bunk.css";

const Bunk = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [totalClasses, setTotalClasses] = useState(0);
  const [classesDone, setClassesDone] = useState(0);
  const [attendedClasses, setAttendedClasses] = useState(0);
  const [minAttendance, setMinAttendance] = useState(75);
  const [result, setResult] = useState("");

  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const landingRef = useRef(null);
  const resultRef = useRef(null);
  const textRef = useRef(null);
  const catRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const codeText = `
    const checkBunkability = () => {
      // Wanna see if you can bunk classes?
      let canBunk = true;
      return canBunk;
    };
  `;

  useEffect(() => {
    if (landingRef.current) {
      gsap.fromTo(
        landingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    if (textRef.current) {
      textRef.current.innerHTML = codeText
        .split("")
        .map((char) => {
          if (char === "\n") return "<br/>";
          if (char === " ") return `<span class="char">&nbsp;</span>`;
          return `<span class="char">${char}</span>`;
        })
        .join("");

      gsap.fromTo(
        ".char",
        { opacity: 0 },
        { opacity: 1, stagger: 0.05, duration: 0.05, ease: "none" }
      );
    }

    catRefs.forEach((catRef) => {
      if (catRef.current) {
        gsap.to(catRef.current, {
          x: "random(-100, 100)",
          y: "random(-100, 100)",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  const handleTryItOut = () => {
    setShowCalculator(true);
  };

  useEffect(() => {
    if (showCalculator) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [showCalculator]);

  const calculateAttendance = () => {
    if (
      totalClasses <= 0 ||
      classesDone <= 0 ||
      attendedClasses < 0 ||
      attendedClasses > classesDone ||
      classesDone > totalClasses
    ) {
      setResult("Please provide valid input values.");
      return;
    }

    const currentAttendance = (attendedClasses / classesDone) * 100;
    const requiredClasses = Math.ceil((minAttendance / 100) * totalClasses);
    const remainingClasses = totalClasses - classesDone;
    const moreClassesToAttend = requiredClasses - attendedClasses;

    if (moreClassesToAttend > remainingClasses) {
      setResult(
        `It's not possible to meet the minimum attendance criteria. You need to attend ${moreClassesToAttend} more classes, but there are only ${remainingClasses} classes left.`
      );
      return;
    }

    if (currentAttendance < minAttendance) {
      setResult(
        `Your current attendance is below the required minimum. You need to attend ${moreClassesToAttend} more classes to meet the minimum attendance requirement.`
      );
      return;
    }

    const totalBunkableClasses = totalClasses - requiredClasses;
    const classesLeftToBunk =
      totalBunkableClasses - (classesDone - attendedClasses);

    if (classesLeftToBunk > 0) {
      setResult(
        `You can bunk ${classesLeftToBunk} more classes while maintaining the minimum attendance.`
      );
    } else {
      setResult(
        "You cannot bunk any more classes without dropping below the minimum attendance."
      );
    }

    gsap.fromTo(resultRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  };

  return (
    <div className="bunk-container">
      <svg
        ref={catRefs[0]}
        className="cat cat1"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2h8v8h-8zM44 2h8v8h-8zM2 10h8v8H2zM54 10h8v8h-8zM12 18h40v8H12zM10 26h8v8h-8zM46 26h8v8h-8zM4 34h8v8H4zM52 34h8v8h-8zM8 42h48v8H8zM16 50h32v8H16z" />
      </svg>
      <svg
        ref={catRefs[1]}
        className="cat cat2"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2h8v8h-8zM44 2h8v8h-8zM2 10h8v8H2zM54 10h8v8h-8zM12 18h40v8H12zM14 26h4v4h-4zM46 26h8v8h-8zM4 34h8v8H4zM52 34h8v8h-8zM8 42h48v8H8zM18 50h28v8H18z" />
      </svg>
      <svg
        ref={catRefs[2]}
        className="cat cat3"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 4h8v8h-8zM44 4h8v8h-8zM4 10h8v8H4zM52 10h8v8h-8zM12 18h40v8H12zM14 28h8v8h-8zM42 28h8v8h-8zM4 36h8v8H4zM52 36h8v8h-8zM10 44h44v8H10zM18 54h28v6H18z" />
      </svg>
      <svg
        ref={catRefs[3]}
        className="cat cat4"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 2h8v8h-8zM46 2h8v8h-8zM2 10h8v8H2zM54 10h8v8h-8zM14 18h36v8H14zM12 28h8v8h-8zM44 28h8v8h-8zM4 36h8v8H4zM52 36h8v8h-8zM8 46h48v8H8zM16 56h32v4H16z" />
      </svg>
      <svg
        ref={catRefs[4]}
        className="cat cat5"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4h8v8h-8zM46 4h8v8h-8zM2 12h8v8H2zM54 12h8v8h-8zM14 20h36v8H14zM12 30h8v8h-8zM44 30h8v8h-8zM4 38h8v8H4zM52 38h8v8h-8zM8 48h48v8H8zM18 58h28v4H18z" />
      </svg>

      {!showCalculator ? (
        <div className="landing-screen" ref={landingRef}>
          <div className="code-editor">
            <div className="editor-header">
              <div className="editor-title">BunkApp - main.js</div>
              <div className="editor-buttons">
                <span className="button red"></span>
                <span className="button yellow"></span>
                <span className="button green"></span>
              </div>
            </div>
            <div className="editor-body">
              <pre className="code-area" ref={textRef}></pre>
            </div>
          </div>
          <button
            onClick={handleTryItOut}
            ref={buttonRef}
            className="terminal-button"
          >
            Try It Out
          </button>
        </div>
      ) : (
        <div className="form" ref={formRef}>
          <div className="input-group">
            <label>Total Classes (Planned): </label>
            <input
              type="number"
              value={totalClasses}
              onChange={(e) => setTotalClasses(Number(e.target.value))}
              placeholder="Enter total number of classes"
              className="input"
            />
          </div>

          <div className="input-group">
            <label>Classes Done So Far: </label>
            <input
              type="number"
              value={classesDone}
              onChange={(e) => setClassesDone(Number(e.target.value))}
              placeholder="Enter number of classes done"
              className="input"
            />
          </div>

          <div className="input-group">
            <label>Classes Attended: </label>
            <input
              type="number"
              value={attendedClasses}
              onChange={(e) => setAttendedClasses(Number(e.target.value))}
              placeholder="Enter number of classes attended"
              className="input"
            />
          </div>

          <div className="input-group">
            <label>Minimum Attendance Percentage (%): </label>
            <input
              type="number"
              value={minAttendance}
              onChange={(e) => setMinAttendance(Number(e.target.value))}
              placeholder="Enter minimum attendance percentage"
              className="input"
            />
          </div>

          <button
            onClick={calculateAttendance}
            ref={buttonRef}
            className="button"
          >
            Calculate
          </button>

          {result && (
            <div className="result" ref={resultRef}>
              <strong>{result}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Bunk;
