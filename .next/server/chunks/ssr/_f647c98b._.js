module.exports=[73017,a=>{"use strict";let b={javascript:{id:"javascript",label:"JavaScript",logoPath:"/javascript.png",pistonRuntime:{language:"javascript",version:"18.15.0"},monacoLanguage:"javascript",defaultCode:`// JavaScript Playground
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
print("Sum of numbers: \\(sum)")`}},c={"github-dark":{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"6e7681"},{token:"string",foreground:"a5d6ff"},{token:"keyword",foreground:"ff7b72"},{token:"number",foreground:"79c0ff"},{token:"type",foreground:"ffa657"},{token:"class",foreground:"ffa657"},{token:"function",foreground:"d2a8ff"},{token:"variable",foreground:"ffa657"},{token:"operator",foreground:"ff7b72"}],colors:{"editor.background":"#0d1117","editor.foreground":"#c9d1d9","editor.lineHighlightBackground":"#161b22","editorLineNumber.foreground":"#6e7681","editorIndentGuide.background":"#21262d","editor.selectionBackground":"#264f78","editor.inactiveSelectionBackground":"#264f7855"}},monokai:{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"75715E"},{token:"string",foreground:"E6DB74"},{token:"keyword",foreground:"F92672"},{token:"number",foreground:"AE81FF"},{token:"type",foreground:"66D9EF"},{token:"class",foreground:"A6E22E"},{token:"function",foreground:"A6E22E"},{token:"variable",foreground:"F8F8F2"},{token:"operator",foreground:"F92672"}],colors:{"editor.background":"#272822","editor.foreground":"#F8F8F2","editorLineNumber.foreground":"#75715E","editor.selectionBackground":"#49483E","editor.lineHighlightBackground":"#3E3D32","editorCursor.foreground":"#F8F8F2","editor.selectionHighlightBackground":"#49483E"}},"solarized-dark":{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"586e75"},{token:"string",foreground:"2aa198"},{token:"keyword",foreground:"859900"},{token:"number",foreground:"d33682"},{token:"type",foreground:"b58900"},{token:"class",foreground:"b58900"},{token:"function",foreground:"268bd2"},{token:"variable",foreground:"b58900"},{token:"operator",foreground:"859900"}],colors:{"editor.background":"#002b36","editor.foreground":"#839496","editorLineNumber.foreground":"#586e75","editor.selectionBackground":"#073642","editor.lineHighlightBackground":"#073642","editorCursor.foreground":"#839496","editor.selectionHighlightBackground":"#073642"}}};a.s(["LANGUAGE_CONFIG",0,b,"THEMES",0,[{id:"vs-dark",label:"VS Dark",color:"#1e1e1e"},{id:"vs-light",label:"VS Light",color:"#ffffff"},{id:"github-dark",label:"GitHub Dark",color:"#0d1117"},{id:"monokai",label:"Monokai",color:"#272822"},{id:"solarized-dark",label:"Solarized Dark",color:"#002b36"}],"defineMonacoThemes",0,a=>{Object.entries(c).forEach(([b,c])=>{a.editor.defineTheme(b,{base:c.base,inherit:c.inherit,rules:c.rules.map(a=>({...a,foreground:a.foreground})),colors:c.colors})})}])},77928,a=>{"use strict";function b(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function c(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function d(a){for(var b=1;b<arguments.length;b++){var d=null!=arguments[b]?arguments[b]:{};b%2?c(Object(d),!0).forEach(function(b){var c;c=d[b],b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(d)):c(Object(d)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(d,b))})}return a}function e(a){return function b(){for(var c=this,d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return e.length>=a.length?a.apply(this,e):function(){for(var a=arguments.length,d=Array(a),f=0;f<a;f++)d[f]=arguments[f];return b.apply(c,[].concat(e,d))}}}function f(a){return({}).toString.call(a).includes("Object")}function g(a){return"function"==typeof a}var h,i,j=e(function(a,b){throw Error(a[b]||a.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),k=function(a,b){return f(b)||j("changeType"),Object.keys(b).some(function(b){return!Object.prototype.hasOwnProperty.call(a,b)})&&j("changeField"),b},l=function(a){g(a)||j("selectorType")},m=function(a){g(a)||f(a)||j("handlerType"),f(a)&&Object.values(a).some(function(a){return!g(a)})&&j("handlersType")},n=function(a){a||j("initialIsRequired"),f(a)||j("initialType"),Object.keys(a).length||j("initialContent")};function o(a,b){return g(b)?b(a.current):b}function p(a,b){return a.current=d(d({},a.current),b),b}function q(a,b,c){return g(b)?b(a.current):Object.keys(c).forEach(function(c){var d;return null==(d=b[c])?void 0:d.call(b,a.current[c])}),c}var r={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},s=(h=function(a,b){throw Error(a[b]||a.default)},function a(){for(var b=this,c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return d.length>=h.length?h.apply(this,d):function(){for(var c=arguments.length,e=Array(c),f=0;f<c;f++)e[f]=arguments[f];return a.apply(b,[].concat(d,e))}})(r),t=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){return b.reduceRight(function(a,b){return b(a)},a)}},u={type:"cancelation",msg:"operation is manually canceled"};function v(a){var b=!1,c=new Promise(function(c,d){a.then(function(a){return b?d(u):c(a)}),a.catch(d)});return c.cancel=function(){return b=!0},c}var w=function(a){if(Array.isArray(a))return a}(i=({create:function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(a),m(b);var c={current:a},d=e(q)(c,b),f=e(p)(c),g=e(k)(a),h=e(o)(c);return[function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(a){return a};return l(a),a(c.current)},function(a){(function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){return b.reduceRight(function(a,b){return b(a)},a)}})(d,f,g,h)(a)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f,g,h=[],i=!0,j=!1;try{f=(c=c.call(a)).next,!1;for(;!(i=(d=f.call(c)).done)&&(h.push(d.value),2!==h.length);i=!0);}catch(a){j=!0,e=a}finally{try{if(!i&&null!=c.return&&(g=c.return(),Object(g)!==g))return}finally{if(j)throw e}}return h}}(i,2)||function(a,c){if(a){if("string"==typeof a)return b(a,2);var d=({}).toString.call(a).slice(8,-1);return"Object"===d&&a.constructor&&(d=a.constructor.name),"Map"===d||"Set"===d?Array.from(a):"Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?b(a,2):void 0}}(i,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=w[0],y=w[1];function z(a){return document.body.appendChild(a)}function A(a){var b,c,d=x(function(a){return{config:a.config,reject:a.reject}}),e=(b="".concat(d.config.paths.vs,"/loader.js"),c=document.createElement("script"),b&&(c.src=b),c);return e.onload=function(){return a()},e.onerror=d.reject,e}function B(){var a=x(function(a){return{config:a.config,resolve:a.resolve,reject:a.reject}}),b=window.require;b.config(a.config),b(["vs/editor/editor.main"],function(b){var c=b.m||b;C(c),a.resolve(c)},function(b){a.reject(b)})}function C(a){x().monaco||y({monaco:a})}var D=new Promise(function(a,b){return y({resolve:a,reject:b})}),E=function(){var a=x(function(a){return{monaco:a.monaco,isInitialized:a.isInitialized,resolve:a.resolve}});if(!a.isInitialized){if(y({isInitialized:!0}),a.monaco)return a.resolve(a.monaco),v(D);if(window.monaco&&window.monaco.editor)return C(window.monaco),a.resolve(window.monaco),v(D);t(z,A)(B)}return v(D)},F=a.i(72131),G={display:"flex",position:"relative",textAlign:"initial"},H={width:"100%"},I={display:"none"},J={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},K=function({children:a}){return F.default.createElement("div",{style:J},a)},L=(0,F.memo)(function({width:a,height:b,isEditorReady:c,loading:d,_ref:e,className:f,wrapperProps:g}){return F.default.createElement("section",{style:{...G,width:a,height:b},...g},!c&&F.default.createElement(K,null,d),F.default.createElement("div",{ref:e,style:{...H,...!c&&I},className:f}))}),M=function(a){(0,F.useEffect)(a,[])},N=function(a,b,c=!0){let d=(0,F.useRef)(!0);(0,F.useEffect)(d.current||!c?()=>{d.current=!1}:a,b)};function O(){}function P(a,b,c,d){var e,f,g,h,i,j;return e=a,f=d,e.editor.getModel(Q(e,f))||(g=a,h=b,i=c,j=d,g.editor.createModel(h,i,j?Q(g,j):void 0))}function Q(a,b){return a.Uri.parse(b)}(0,F.memo)(function({original:a,modified:b,language:c,originalLanguage:d,modifiedLanguage:e,originalModelPath:f,modifiedModelPath:g,keepCurrentOriginalModel:h=!1,keepCurrentModifiedModel:i=!1,theme:j="light",loading:k="Loading...",options:l={},height:m="100%",width:n="100%",className:o,wrapperProps:p={},beforeMount:q=O,onMount:r=O}){let[s,t]=(0,F.useState)(!1),[u,v]=(0,F.useState)(!0),w=(0,F.useRef)(null),x=(0,F.useRef)(null),y=(0,F.useRef)(null),z=(0,F.useRef)(r),A=(0,F.useRef)(q),B=(0,F.useRef)(!1);M(()=>{let a=E();return a.then(a=>(x.current=a)&&v(!1)).catch(a=>a?.type!=="cancelation"&&console.error("Monaco initialization: error:",a)),()=>{let b;return w.current?(b=w.current?.getModel(),void(h||b?.original?.dispose(),i||b?.modified?.dispose(),w.current?.dispose())):a.cancel()}}),N(()=>{if(w.current&&x.current){let b=w.current.getOriginalEditor(),e=P(x.current,a||"",d||c||"text",f||"");e!==b.getModel()&&b.setModel(e)}},[f],s),N(()=>{if(w.current&&x.current){let a=w.current.getModifiedEditor(),d=P(x.current,b||"",e||c||"text",g||"");d!==a.getModel()&&a.setModel(d)}},[g],s),N(()=>{let a=w.current.getModifiedEditor();a.getOption(x.current.editor.EditorOption.readOnly)?a.setValue(b||""):b!==a.getValue()&&(a.executeEdits("",[{range:a.getModel().getFullModelRange(),text:b||"",forceMoveMarkers:!0}]),a.pushUndoStop())},[b],s),N(()=>{w.current?.getModel()?.original.setValue(a||"")},[a],s),N(()=>{let{original:a,modified:b}=w.current.getModel();x.current.editor.setModelLanguage(a,d||c||"text"),x.current.editor.setModelLanguage(b,e||c||"text")},[c,d,e],s),N(()=>{x.current?.editor.setTheme(j)},[j],s),N(()=>{w.current?.updateOptions(l)},[l],s);let C=(0,F.useCallback)(()=>{if(!x.current)return;A.current(x.current);let h=P(x.current,a||"",d||c||"text",f||""),i=P(x.current,b||"",e||c||"text",g||"");w.current?.setModel({original:h,modified:i})},[c,b,e,a,d,f,g]),D=(0,F.useCallback)(()=>{!B.current&&y.current&&(w.current=x.current.editor.createDiffEditor(y.current,{automaticLayout:!0,...l}),C(),x.current?.editor.setTheme(j),t(!0),B.current=!0)},[l,j,C]);return(0,F.useEffect)(()=>{s&&z.current(w.current,x.current)},[s]),(0,F.useEffect)(()=>{u||s||D()},[u,s,D]),F.default.createElement(L,{width:n,height:m,isEditorReady:s,loading:k,_ref:y,className:o,wrapperProps:p})});var R=function(a){let b=(0,F.useRef)();return(0,F.useEffect)(()=>{b.current=a},[a]),b.current},S=new Map,T=(0,F.memo)(function({defaultValue:a,defaultLanguage:b,defaultPath:c,value:d,language:e,path:f,theme:g="light",line:h,loading:i="Loading...",options:j={},overrideServices:k={},saveViewState:l=!0,keepCurrentModel:m=!1,width:n="100%",height:o="100%",className:p,wrapperProps:q={},beforeMount:r=O,onMount:s=O,onChange:t,onValidate:u=O}){let[v,w]=(0,F.useState)(!1),[x,y]=(0,F.useState)(!0),z=(0,F.useRef)(null),A=(0,F.useRef)(null),B=(0,F.useRef)(null),C=(0,F.useRef)(s),D=(0,F.useRef)(r),G=(0,F.useRef)(),H=(0,F.useRef)(d),I=R(f),J=(0,F.useRef)(!1),K=(0,F.useRef)(!1);M(()=>{let a=E();return a.then(a=>(z.current=a)&&y(!1)).catch(a=>a?.type!=="cancelation"&&console.error("Monaco initialization: error:",a)),()=>A.current?void(G.current?.dispose(),m?l&&S.set(f,A.current.saveViewState()):A.current.getModel()?.dispose(),A.current.dispose()):a.cancel()}),N(()=>{let g=P(z.current,a||d||"",b||e||"",f||c||"");g!==A.current?.getModel()&&(l&&S.set(I,A.current?.saveViewState()),A.current?.setModel(g),l&&A.current?.restoreViewState(S.get(f)))},[f],v),N(()=>{A.current?.updateOptions(j)},[j],v),N(()=>{A.current&&void 0!==d&&(A.current.getOption(z.current.editor.EditorOption.readOnly)?A.current.setValue(d):d!==A.current.getValue()&&(K.current=!0,A.current.executeEdits("",[{range:A.current.getModel().getFullModelRange(),text:d,forceMoveMarkers:!0}]),A.current.pushUndoStop(),K.current=!1))},[d],v),N(()=>{let a=A.current?.getModel();a&&e&&z.current?.editor.setModelLanguage(a,e)},[e],v),N(()=>{void 0!==h&&A.current?.revealLine(h)},[h],v),N(()=>{z.current?.editor.setTheme(g)},[g],v);let Q=(0,F.useCallback)(()=>{if(!(!B.current||!z.current)&&!J.current){D.current(z.current);let i=f||c,m=P(z.current,d||a||"",b||e||"",i||"");A.current=z.current?.editor.create(B.current,{model:m,automaticLayout:!0,...j},k),l&&A.current.restoreViewState(S.get(i)),z.current.editor.setTheme(g),void 0!==h&&A.current.revealLine(h),w(!0),J.current=!0}},[a,b,c,d,e,f,j,k,l,g,h]);return(0,F.useEffect)(()=>{v&&C.current(A.current,z.current)},[v]),(0,F.useEffect)(()=>{x||v||Q()},[x,v,Q]),H.current=d,(0,F.useEffect)(()=>{v&&t&&(G.current?.dispose(),G.current=A.current?.onDidChangeModelContent(a=>{K.current||t(A.current.getValue(),a)}))},[v,t]),(0,F.useEffect)(()=>{if(v){let a=z.current.editor.onDidChangeMarkers(a=>{let b=A.current.getModel()?.uri;if(b&&a.find(a=>a.path===b.path)){let a=z.current.editor.getModelMarkers({resource:b});u?.(a)}});return()=>{a?.dispose()}}return()=>{}},[v,u]),F.default.createElement(L,{width:n,height:o,isEditorReady:v,loading:i,_ref:B,className:p,wrapperProps:q})});a.s(["Editor",()=>T],77928)},5151,a=>{"use strict";let b=(0,a.i(70106).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);a.s(["Copy",()=>b],5151)}];

//# sourceMappingURL=_f647c98b._.js.map