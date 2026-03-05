import { NextResponse } from "next/server";

const JUDGE0_API_URL = "https://ce.judge0.com/submissions?wait=true&base64_encoded=false";

// Map Piston language names to Judge0 language IDs
const LANGUAGE_MAP: Record<string, number> = {
  javascript: 93,  // Node.js 18.15.0
  typescript: 94,  // TypeScript 5.0.3
  python: 71,      // Python 3.8.1
  java: 62,        // Java (OpenJDK 13.0.1)
  go: 95,          // Go 1.18.5
  rust: 73,        // Rust 1.40.0
  cpp: 54,         // C++ (GCC 9.2.0)
  csharp: 51,      // C# (Mono 6.6.0.161)
  ruby: 72,        // Ruby 2.7.0
  swift: 83,       // Swift 5.2.3
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const languageId = LANGUAGE_MAP[body.language];
    if (!languageId) {
      return NextResponse.json(
        { message: `Unsupported language: ${body.language}` },
        { status: 400 }
      );
    }

    const sourceCode = body.files?.[0]?.content || "";

    const response = await fetch(JUDGE0_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: sourceCode,
      }),
    });

    const data = await response.json();

    // Translate Judge0 response to Piston-compatible format
    const stdout = data.stdout || "";
    const stderr = data.stderr || "";
    const compileOutput = data.compile_output || "";

    // Judge0 status IDs: 1-2 = queued/processing, 3 = accepted (success),
    // 5 = time limit, 6 = compilation error, 7-12 = runtime errors
    const isCompileError = data.status?.id === 6;
    const isRuntimeError = data.status?.id >= 7 && data.status?.id <= 12;

    if (isCompileError) {
      return NextResponse.json({
        compile: {
          code: 1,
          output: compileOutput,
          stderr: compileOutput,
        },
        run: null,
      });
    }

    return NextResponse.json({
      compile: null,
      run: {
        code: isRuntimeError ? 1 : 0,
        output: stdout || stderr,
        stdout: stdout,
        stderr: stderr,
      },
    });
  } catch (error) {
    console.error("Code execution error:", error);
    return NextResponse.json(
      { message: "Failed to execute code" },
      { status: 500 }
    );
  }
}
