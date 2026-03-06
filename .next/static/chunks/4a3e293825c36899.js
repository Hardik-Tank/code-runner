(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75254,e=>{"use strict";var r=e.i(71645);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim(),n=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:a="",children:s,iconNode:l,...c},d)=>(0,r.createElement)("svg",{ref:d,...o,width:n,height:n,stroke:e,strokeWidth:i?24*Number(u)/Number(n):u,className:t("lucide",a),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...l.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),i=(e,o)=>{let i=(0,r.forwardRef)(({className:i,...a},s)=>(0,r.createElement)(u,{ref:s,iconNode:o,className:t(`lucide-${n(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,i),...a}));return i.displayName=n(e),i};e.s(["default",()=>i],75254)},52061,46753,84614,e=>{"use strict";var r=e.i(43476),t=e.i(53355),n=e.i(92448),o=e.i(88077);let u=(0,e.i(75254).default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["default",()=>u],46753),e.s(["User",()=>u],84614),e.s(["default",0,function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.UserButton,{children:(0,r.jsx)(o.UserButton.MenuItems,{children:(0,r.jsx)(o.UserButton.Link,{label:"Profile",labelIcon:(0,r.jsx)(u,{className:"size-4"}),href:"/profile"})})}),(0,r.jsx)(t.SignedOut,{children:(0,r.jsx)(n.SignInButton,{})})]})}],52061)},61888,97625,83086,e=>{"use strict";var r=e.i(75254);let t=(0,r.default)("blocks",[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]);e.s(["Blocks",()=>t],61888);let n=(0,r.default)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["Code2",()=>n],97625);let o=(0,r.default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",()=>o],83086)},3116,e=>{"use strict";let r=(0,e.i(75254).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",()=>r],3116)},37727,e=>{"use strict";let r=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>r],37727)},88653,31171,e=>{"use strict";e.i(47167);var r=e.i(43476),t=e.i(71645),n=e.i(31178),o=e.i(47414),u=e.i(74008),i=e.i(21476),a=e.i(72846),s=t,l=e.i(37806);function c(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}class d extends s.Component{getSnapshotBeforeUpdate(e){let r=this.props.childRef.current;if(r&&e.isPresent&&!this.props.isPresent){let e=r.offsetParent,t=(0,a.isHTMLElement)(e)&&e.offsetWidth||0,n=(0,a.isHTMLElement)(e)&&e.offsetHeight||0,o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft,o.right=t-o.width-o.left,o.bottom=n-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:n,anchorX:o,anchorY:u,root:i}){let a=(0,s.useId)(),f=(0,s.useRef)(null),m=(0,s.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=(0,s.useContext)(l.MotionConfigContext),p=function(...e){return t.useCallback(function(...e){return r=>{let t=!1,n=e.map(e=>{let n=c(e,r);return t||"function"!=typeof n||(t=!0),n});if(t)return()=>{for(let r=0;r<n.length;r++){let t=n[r];"function"==typeof t?t():c(e[r],null)}}}}(...e),e)}(f,e.props?.ref??e?.ref);return(0,s.useInsertionEffect)(()=>{let{width:e,height:r,top:t,left:s,right:l,bottom:c}=m.current;if(n||!f.current||!e||!r)return;let d="left"===o?`left: ${s}`:`right: ${l}`,p="bottom"===u?`bottom: ${c}`:`top: ${t}`;f.current.dataset.motionPopId=a;let h=document.createElement("style");g&&(h.nonce=g);let b=i??document.head;return b.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            ${d}px !important;
            ${p}px !important;
          }
        `),()=>{b.contains(h)&&b.removeChild(h)}},[n]),(0,r.jsx)(d,{isPresent:n,childRef:f,sizeRef:m,children:s.cloneElement(e,{ref:p})})}let m=({children:e,initial:n,isPresent:u,onExitComplete:a,custom:s,presenceAffectsLayout:l,mode:c,anchorX:d,anchorY:m,root:p})=>{let h=(0,o.useConstant)(g),b=(0,t.useId)(),v=!0,y=(0,t.useMemo)(()=>(v=!1,{id:b,initial:n,isPresent:u,custom:s,onExitComplete:e=>{for(let r of(h.set(e,!0),h.values()))if(!r)return;a&&a()},register:e=>(h.set(e,!1),()=>h.delete(e))}),[u,h,a]);return l&&v&&(y={...y}),(0,t.useMemo)(()=>{h.forEach((e,r)=>h.set(r,!1))},[u]),t.useEffect(()=>{u||h.size||!a||a()},[u]),"popLayout"===c&&(e=(0,r.jsx)(f,{isPresent:u,anchorX:d,anchorY:m,root:p,children:e})),(0,r.jsx)(i.PresenceContext.Provider,{value:y,children:e})};function g(){return new Map}var p=e.i(64978);let h=e=>e.key||"";function b(e){let r=[];return t.Children.forEach(e,e=>{(0,t.isValidElement)(e)&&r.push(e)}),r}let v=({children:e,custom:i,initial:a=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:c="sync",propagate:d=!1,anchorX:f="left",anchorY:g="top",root:v})=>{let[y,k]=(0,p.usePresence)(d),w=(0,t.useMemo)(()=>b(e),[e]),C=d&&!y?[]:w.map(h),E=(0,t.useRef)(!0),M=(0,t.useRef)(w),j=(0,o.useConstant)(()=>new Map),S=(0,t.useRef)(new Set),[P,O]=(0,t.useState)(w),[q,R]=(0,t.useState)(w);(0,u.useIsomorphicLayoutEffect)(()=>{E.current=!1,M.current=w;for(let e=0;e<q.length;e++){let r=h(q[e]);C.includes(r)?(j.delete(r),S.current.delete(r)):!0!==j.get(r)&&j.set(r,!1)}},[q,C.length,C.join("-")]);let x=[];if(w!==P){let e=[...w];for(let r=0;r<q.length;r++){let t=q[r],n=h(t);C.includes(n)||(e.splice(r,0,t),x.push(t))}return"wait"===c&&x.length&&(e=x),R(b(e)),O(w),null}let{forceRender:L}=(0,t.useContext)(n.LayoutGroupContext);return(0,r.jsx)(r.Fragment,{children:q.map(e=>{let t=h(e),n=(!d||!!y)&&(w===q||C.includes(t));return(0,r.jsx)(m,{isPresent:n,initial:(!E.current||!!a)&&void 0,custom:i,presenceAffectsLayout:l,mode:c,root:v,onExitComplete:n?void 0:()=>{if(S.current.has(t)||(S.current.add(t),!j.has(t)))return;j.set(t,!0);let e=!0;j.forEach(r=>{r||(e=!1)}),e&&(L?.(),R(M.current),d&&k?.(),s&&s())},anchorX:f,anchorY:g,children:e},t)})})};e.s(["AnimatePresence",()=>v],88653);let y=(0,e.i(75254).default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["default",()=>y],31171)},31278,e=>{"use strict";let r=(0,e.i(75254).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>r],31278)},33947,e=>{"use strict";let r={javascript:{id:"javascript",label:"JavaScript",logoPath:"/javascript.png",pistonRuntime:{language:"javascript",version:"18.15.0"},monacoLanguage:"javascript",defaultCode:`// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];

// Map numbers to their squares
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);

// Filter for even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Calculate sum using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`},typescript:{id:"typescript",label:"TypeScript",logoPath:"/typescript.png",pistonRuntime:{language:"typescript",version:"5.0.3"},monacoLanguage:"typescript",defaultCode:`// TypeScript Playground
interface NumberArray {
  numbers: number[];
  sum(): number;
  squares(): number[];
  evenNumbers(): number[];
}

class MathOperations implements NumberArray {
  constructor(public numbers: number[]) {}

  sum(): number {
    return this.numbers.reduce((acc, curr) => acc + curr, 0);
  }

  squares(): number[] {
    return this.numbers.map(n => n * n);
  }

  evenNumbers(): number[] {
    return this.numbers.filter(n => n % 2 === 0);
  }
}

const math = new MathOperations([1, 2, 3, 4, 5]);

console.log('Original numbers:', math.numbers);
console.log('Squared numbers:', math.squares());
console.log('Even numbers:', math.evenNumbers());
console.log('Sum of numbers:', math.sum());`},python:{id:"python",label:"Python",logoPath:"/python.png",pistonRuntime:{language:"python",version:"3.10.0"},monacoLanguage:"python",defaultCode:`# Python Playground
numbers = [1, 2, 3, 4, 5]

# Map numbers to their squares
squares = [n ** 2 for n in numbers]
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squares}")

# Filter for even numbers
even_numbers = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {even_numbers}")

# Calculate sum
numbers_sum = sum(numbers)
print(f"Sum of numbers: {numbers_sum}")`},java:{id:"java",label:"Java",logoPath:"/java.png",pistonRuntime:{language:"java",version:"15.0.2"},monacoLanguage:"java",defaultCode:`public class Main {
  public static void main(String[] args) {
      // Create array
      int[] numbers = {1, 2, 3, 4, 5};
      
      // Print original numbers
      System.out.print("Original numbers: ");
      printArray(numbers);
      
      // Calculate and print squares
      int[] squares = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
          squares[i] = numbers[i] * numbers[i];
      }
      System.out.print("Squared numbers: ");
      printArray(squares);
      
      // Print even numbers
      System.out.print("Even numbers: ");
      for (int n : numbers) {
          if (n % 2 == 0) System.out.print(n + " ");
      }
      System.out.println();
      
      // Calculate and print sum
      int sum = 0;
      for (int n : numbers) sum += n;
      System.out.println("Sum of numbers: " + sum);
  }
  
  private static void printArray(int[] arr) {
      for (int n : arr) System.out.print(n + " ");
      System.out.println();
  }
}`},go:{id:"go",label:"Go",logoPath:"/go.png",pistonRuntime:{language:"go",version:"1.16.2"},monacoLanguage:"go",defaultCode:`package main

import "fmt"

func main() {
  // Create slice
  numbers := []int{1, 2, 3, 4, 5}
  
  // Print original numbers
  fmt.Println("Original numbers:", numbers)
  
  // Calculate squares
  squares := make([]int, len(numbers))
  for i, n := range numbers {
      squares[i] = n * n
  }
  fmt.Println("Squared numbers:", squares)
  
  // Filter even numbers
  var evenNumbers []int
  for _, n := range numbers {
      if n%2 == 0 {
          evenNumbers = append(evenNumbers, n)
      }
  }
  fmt.Println("Even numbers:", evenNumbers)
  
  // Calculate sum
  sum := 0
  for _, n := range numbers {
      sum += n
  }
  fmt.Println("Sum of numbers:", sum)
}`},rust:{id:"rust",label:"Rust",logoPath:"/rust.png",pistonRuntime:{language:"rust",version:"1.68.2"},monacoLanguage:"rust",defaultCode:`fn main() {
    // Create vector
    let numbers = vec![1, 2, 3, 4, 5];
    
    // Print original numbers
    println!("Original numbers: {:?}", numbers);
    
    // Calculate squares
    let squares: Vec<i32> = numbers
        .iter()
        .map(|&n| n * n)
        .collect();
    println!("Squared numbers: {:?}", squares);
    
    // Filter even numbers
    let even_numbers: Vec<i32> = numbers
        .iter()
        .filter(|&&n| n % 2 == 0)
        .cloned()
        .collect();
    println!("Even numbers: {:?}", even_numbers);
    
    // Calculate sum
    let sum: i32 = numbers.iter().sum();
    println!("Sum of numbers: {}", sum);
}`},cpp:{id:"cpp",label:"C++",logoPath:"/cpp.png",pistonRuntime:{language:"cpp",version:"10.2.0"},monacoLanguage:"cpp",defaultCode:`#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    // Create vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Print original numbers
    std::cout << "Original numbers: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;
    
    // Calculate squares
    std::vector<int> squares;
    std::transform(numbers.begin(), numbers.end(), 
                  std::back_inserter(squares),
                  [](int n) { return n * n; });
    
    std::cout << "Squared numbers: ";
    for (int n : squares) std::cout << n << " ";
    std::cout << std::endl;
    
    // Filter even numbers
    std::cout << "Even numbers: ";
    for (int n : numbers) {
        if (n % 2 == 0) std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // Calculate sum
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Sum of numbers: " << sum << std::endl;
    
    return 0;
}`},csharp:{id:"csharp",label:"C#",logoPath:"/csharp.png",pistonRuntime:{language:"csharp",version:"6.12.0"},monacoLanguage:"csharp",defaultCode:`using System;
using System.Linq;

class Program {
    static void Main() {
        // Create array
        int[] numbers = { 1, 2, 3, 4, 5 };
        
        // Print original numbers
        Console.WriteLine($"Original numbers: {string.Join(" ", numbers)}");
        
        // Calculate squares
        var squares = numbers.Select(n => n * n);
        Console.WriteLine($"Squared numbers: {string.Join(" ", squares)}");
        
        // Filter even numbers
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine($"Even numbers: {string.Join(" ", evenNumbers)}");
        
        // Calculate sum
        var sum = numbers.Sum();
        Console.WriteLine($"Sum of numbers: {sum}");
    }
}`},ruby:{id:"ruby",label:"Ruby",logoPath:"/ruby.png",pistonRuntime:{language:"ruby",version:"3.0.1"},monacoLanguage:"ruby",defaultCode:`# Create array
numbers = [1, 2, 3, 4, 5]

# Print original numbers
puts "Original numbers: #{numbers.join(' ')}"

# Calculate squares
squares = numbers.map { |n| n * n }
puts "Squared numbers: #{squares.join(' ')}"

# Filter even numbers
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers.join(' ')}"

# Calculate sum
sum = numbers.sum
puts "Sum of numbers: #{sum}"`},swift:{id:"swift",label:"Swift",logoPath:"/swift.png",pistonRuntime:{language:"swift",version:"5.3.3"},monacoLanguage:"swift",defaultCode:`// Create array
let numbers = [1, 2, 3, 4, 5]

// Print original numbers
print("Original numbers: \\(numbers)")

// Calculate squares
let squares = numbers.map { $0 * $0 }
print("Squared numbers: \\(squares)")

// Filter even numbers
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print("Even numbers: \\(evenNumbers)")

// Calculate sum
let sum = numbers.reduce(0, +)
print("Sum of numbers: \\(sum)")`}},t={"github-dark":{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6e7681"},{token:"string",foreground:"a5d6ff"},{token:"keyword",foreground:"ff7b72"},{token:"number",foreground:"79c0ff"},{token:"type",foreground:"ffa657"},{token:"class",foreground:"ffa657"},{token:"function",foreground:"d2a8ff"},{token:"variable",foreground:"ffa657"},{token:"operator",foreground:"ff7b72"}],colors:{"editor.background":"#0d1117","editor.foreground":"#c9d1d9","editor.lineHighlightBackground":"#161b22","editorLineNumber.foreground":"#6e7681","editorIndentGuide.background":"#21262d","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#264f7855"}},monokai:{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"75715E"},{token:"string",foreground:"E6DB74"},{token:"keyword",foreground:"F92672"},{token:"number",foreground:"AE81FF"},{token:"type",foreground:"66D9EF"},{token:"class",foreground:"A6E22E"},{token:"function",foreground:"A6E22E"},{token:"variable",foreground:"F8F8F2"},{token:"operator",foreground:"F92672"}],colors:{"editor.background":"#272822","editor.foreground":"#F8F8F2","editorLineNumber.foreground":"#75715E","editor.selectionBackground":"#49483E","editor.lineHighlightBackground":"#3E3D32","editorCursor.foreground":"#F8F8F2","editor.selectionHighlightBackground":"#49483E"}},"solarized-dark":{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"586e75"},{token:"string",foreground:"2aa198"},{token:"keyword",foreground:"859900"},{token:"number",foreground:"d33682"},{token:"type",foreground:"b58900"},{token:"class",foreground:"b58900"},{token:"function",foreground:"268bd2"},{token:"variable",foreground:"b58900"},{token:"operator",foreground:"859900"}],colors:{"editor.background":"#002b36","editor.foreground":"#839496","editorLineNumber.foreground":"#586e75","editor.selectionBackground":"#073642","editor.lineHighlightBackground":"#073642","editorCursor.foreground":"#839496","editor.selectionHighlightBackground":"#073642"}}};e.s(["LANGUAGE_CONFIG",0,r,"THEMES",0,[{id:"vs-dark",label:"VS Dark",color:"#1e1e1e"},{id:"vs-light",label:"VS Light",color:"#ffffff"},{id:"github-dark",label:"GitHub Dark",color:"#0d1117"},{id:"monokai",label:"Monokai",color:"#272822"},{id:"solarized-dark",label:"Solarized Dark",color:"#002b36"}],"defineMonacoThemes",0,e=>{Object.entries(t).forEach(([r,t])=>{e.editor.defineTheme(r,{base:t.base,inherit:t.inherit,rules:t.rules.map(e=>({...e,foreground:e.foreground})),colors:t.colors})})}])},88784,e=>{"use strict";function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o(e){return function r(){for(var t=this,n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,n=Array(e),u=0;u<e;u++)n[u]=arguments[u];return r.apply(t,[].concat(o,n))}}}function u(e){return({}).toString.call(e).includes("Object")}function i(e){return"function"==typeof e}var a,s,l=o(function(e,r){throw Error(e[r]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),c=function(e,r){return u(r)||l("changeType"),Object.keys(r).some(function(r){return!Object.prototype.hasOwnProperty.call(e,r)})&&l("changeField"),r},d=function(e){i(e)||l("selectorType")},f=function(e){i(e)||u(e)||l("handlerType"),u(e)&&Object.values(e).some(function(e){return!i(e)})&&l("handlersType")},m=function(e){e||l("initialIsRequired"),u(e)||l("initialType"),Object.keys(e).length||l("initialContent")};function g(e,r){return i(r)?r(e.current):r}function p(e,r){return e.current=n(n({},e.current),r),r}function h(e,r,t){return i(r)?r(e.current):Object.keys(t).forEach(function(t){var n;return null==(n=r[t])?void 0:n.call(r,e.current[t])}),t}var b={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},v=(a=function(e,r){throw Error(e[r]||e.default)},function e(){for(var r=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return n.length>=a.length?a.apply(this,n):function(){for(var t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];return e.apply(r,[].concat(n,o))}})(b),y=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduceRight(function(e,r){return r(e)},e)}},k={type:"cancelation",msg:"operation is manually canceled"};function w(e){var r=!1,t=new Promise(function(t,n){e.then(function(e){return r?n(k):t(e)}),e.catch(n)});return t.cancel=function(){return r=!0},t}var C=function(e){if(Array.isArray(e))return e}(s=({create:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};m(e),f(r);var t={current:e},n=o(h)(t,r),u=o(p)(t),i=o(c)(e),a=o(g)(t);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return d(e),e(t.current)},function(e){(function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.reduceRight(function(e,r){return r(e)},e)}})(n,u,i,a)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u,i,a=[],s=!0,l=!1;try{u=(t=t.call(e)).next,!1;for(;!(s=(n=u.call(t)).done)&&(a.push(n.value),2!==a.length);s=!0);}catch(e){l=!0,o=e}finally{try{if(!s&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(s,2)||function(e,t){if(e){if("string"==typeof e)return r(e,2);var n=({}).toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,2):void 0}}(s,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),E=C[0],M=C[1];function j(e){return document.body.appendChild(e)}function S(e){var r,t,n=E(function(e){return{config:e.config,reject:e.reject}}),o=(r="".concat(n.config.paths.vs,"/loader.js"),t=document.createElement("script"),r&&(t.src=r),t);return o.onload=function(){return e()},o.onerror=n.reject,o}function P(){var e=E(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),r=window.require;r.config(e.config),r(["vs/editor/editor.main"],function(r){var t=r.m||r;O(t),e.resolve(t)},function(r){e.reject(r)})}function O(e){E().monaco||M({monaco:e})}var q=new Promise(function(e,r){return M({resolve:e,reject:r})}),R=function(){var e=E(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(M({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),w(q);if(window.monaco&&window.monaco.editor)return O(window.monaco),e.resolve(window.monaco),w(q);y(j,S)(P)}return w(q)},x=e.i(71645),L={display:"flex",position:"relative",textAlign:"initial"},A={width:"100%"},N={display:"none"},F={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},T=function({children:e}){return x.default.createElement("div",{style:F},e)},I=(0,x.memo)(function({width:e,height:r,isEditorReady:t,loading:n,_ref:o,className:u,wrapperProps:i}){return x.default.createElement("section",{style:{...L,width:e,height:r},...i},!t&&x.default.createElement(T,null,n),x.default.createElement("div",{ref:o,style:{...A,...!t&&N},className:u}))}),$=function(e){(0,x.useEffect)(e,[])},B=function(e,r,t=!0){let n=(0,x.useRef)(!0);(0,x.useEffect)(n.current||!t?()=>{n.current=!1}:e,r)};function V(){}function z(e,r,t,n){var o,u,i,a,s,l;return o=e,u=n,o.editor.getModel(_(o,u))||(i=e,a=r,s=t,l=n,i.editor.createModel(a,s,l?_(i,l):void 0))}function _(e,r){return e.Uri.parse(r)}(0,x.memo)(function({original:e,modified:r,language:t,originalLanguage:n,modifiedLanguage:o,originalModelPath:u,modifiedModelPath:i,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:s=!1,theme:l="light",loading:c="Loading...",options:d={},height:f="100%",width:m="100%",className:g,wrapperProps:p={},beforeMount:h=V,onMount:b=V}){let[v,y]=(0,x.useState)(!1),[k,w]=(0,x.useState)(!0),C=(0,x.useRef)(null),E=(0,x.useRef)(null),M=(0,x.useRef)(null),j=(0,x.useRef)(b),S=(0,x.useRef)(h),P=(0,x.useRef)(!1);$(()=>{let e=R();return e.then(e=>(E.current=e)&&w(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let r;return C.current?(r=C.current?.getModel(),void(a||r?.original?.dispose(),s||r?.modified?.dispose(),C.current?.dispose())):e.cancel()}}),B(()=>{if(C.current&&E.current){let r=C.current.getOriginalEditor(),o=z(E.current,e||"",n||t||"text",u||"");o!==r.getModel()&&r.setModel(o)}},[u],v),B(()=>{if(C.current&&E.current){let e=C.current.getModifiedEditor(),n=z(E.current,r||"",o||t||"text",i||"");n!==e.getModel()&&e.setModel(n)}},[i],v),B(()=>{let e=C.current.getModifiedEditor();e.getOption(E.current.editor.EditorOption.readOnly)?e.setValue(r||""):r!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[r],v),B(()=>{C.current?.getModel()?.original.setValue(e||"")},[e],v),B(()=>{let{original:e,modified:r}=C.current.getModel();E.current.editor.setModelLanguage(e,n||t||"text"),E.current.editor.setModelLanguage(r,o||t||"text")},[t,n,o],v),B(()=>{E.current?.editor.setTheme(l)},[l],v),B(()=>{C.current?.updateOptions(d)},[d],v);let O=(0,x.useCallback)(()=>{if(!E.current)return;S.current(E.current);let a=z(E.current,e||"",n||t||"text",u||""),s=z(E.current,r||"",o||t||"text",i||"");C.current?.setModel({original:a,modified:s})},[t,r,o,e,n,u,i]),q=(0,x.useCallback)(()=>{!P.current&&M.current&&(C.current=E.current.editor.createDiffEditor(M.current,{automaticLayout:!0,...d}),O(),E.current?.editor.setTheme(l),y(!0),P.current=!0)},[d,l,O]);return(0,x.useEffect)(()=>{v&&j.current(C.current,E.current)},[v]),(0,x.useEffect)(()=>{k||v||q()},[k,v,q]),x.default.createElement(I,{width:m,height:f,isEditorReady:v,loading:c,_ref:M,className:g,wrapperProps:p})});var D=function(e){let r=(0,x.useRef)();return(0,x.useEffect)(()=>{r.current=e},[e]),r.current},U=new Map,H=(0,x.memo)(function({defaultValue:e,defaultLanguage:r,defaultPath:t,value:n,language:o,path:u,theme:i="light",line:a,loading:s="Loading...",options:l={},overrideServices:c={},saveViewState:d=!0,keepCurrentModel:f=!1,width:m="100%",height:g="100%",className:p,wrapperProps:h={},beforeMount:b=V,onMount:v=V,onChange:y,onValidate:k=V}){let[w,C]=(0,x.useState)(!1),[E,M]=(0,x.useState)(!0),j=(0,x.useRef)(null),S=(0,x.useRef)(null),P=(0,x.useRef)(null),O=(0,x.useRef)(v),q=(0,x.useRef)(b),L=(0,x.useRef)(),A=(0,x.useRef)(n),N=D(u),F=(0,x.useRef)(!1),T=(0,x.useRef)(!1);$(()=>{let e=R();return e.then(e=>(j.current=e)&&M(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>S.current?void(L.current?.dispose(),f?d&&U.set(u,S.current.saveViewState()):S.current.getModel()?.dispose(),S.current.dispose()):e.cancel()}),B(()=>{let i=z(j.current,e||n||"",r||o||"",u||t||"");i!==S.current?.getModel()&&(d&&U.set(N,S.current?.saveViewState()),S.current?.setModel(i),d&&S.current?.restoreViewState(U.get(u)))},[u],w),B(()=>{S.current?.updateOptions(l)},[l],w),B(()=>{S.current&&void 0!==n&&(S.current.getOption(j.current.editor.EditorOption.readOnly)?S.current.setValue(n):n!==S.current.getValue()&&(T.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),S.current.pushUndoStop(),T.current=!1))},[n],w),B(()=>{let e=S.current?.getModel();e&&o&&j.current?.editor.setModelLanguage(e,o)},[o],w),B(()=>{void 0!==a&&S.current?.revealLine(a)},[a],w),B(()=>{j.current?.editor.setTheme(i)},[i],w);let _=(0,x.useCallback)(()=>{if(!(!P.current||!j.current)&&!F.current){q.current(j.current);let s=u||t,f=z(j.current,n||e||"",r||o||"",s||"");S.current=j.current?.editor.create(P.current,{model:f,automaticLayout:!0,...l},c),d&&S.current.restoreViewState(U.get(s)),j.current.editor.setTheme(i),void 0!==a&&S.current.revealLine(a),C(!0),F.current=!0}},[e,r,t,n,o,u,l,c,d,i,a]);return(0,x.useEffect)(()=>{w&&O.current(S.current,j.current)},[w]),(0,x.useEffect)(()=>{E||w||_()},[E,w,_]),A.current=n,(0,x.useEffect)(()=>{w&&y&&(L.current?.dispose(),L.current=S.current?.onDidChangeModelContent(e=>{T.current||y(S.current.getValue(),e)}))},[w,y]),(0,x.useEffect)(()=>{if(w){let e=j.current.editor.onDidChangeMarkers(e=>{let r=S.current.getModel()?.uri;if(r&&e.find(e=>e.path===r.path)){let e=j.current.editor.getModelMarkers({resource:r});k?.(e)}});return()=>{e?.dispose()}}return()=>{}},[w,k]),x.default.createElement(I,{width:m,height:g,isEditorReady:w,loading:s,_ref:P,className:p,wrapperProps:h})});e.s(["Editor",()=>H],88784)},74886,e=>{"use strict";let r=(0,e.i(75254).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",()=>r],74886)}]);