console.log((0 && "salom") || (null ?? "hello") || false); // hello

console.log((false || 0 || undefined) ?? ("JS" && true)); // true

console.log((1 && true && "frontend") || (null ?? false)); // frontend

console.log(((null ?? 0) && 100) || ("AI" && 1 && true)); // true

console.log((undefined ?? null ?? false) || (1 && 2 && 3)); // 3

console.log(("" || null || undefined) ?? (true && "React")); // React

console.log((false && 100) || (true && null) || ("Node.js" && 1)); // 1

console.log(((1 ?? 0) && (0 || "Vue")) || (false && true)); // Vue

console.log((!0 && (null ?? "Backend")) || (1 && false)); // Backend

console.log(((0 && true) || (undefined ?? false)) || ("CSS" && 100)); // 100

console.log(((undefined ?? null) || (1 && 0)) && ("Frontend" || false)); // 0

console.log((true && (null ?? "React")) || (0 && "Vue")); // React

console.log(((0 || false || null) ?? "JavaScript") && (1 || undefined)); // 1

console.log((((null ?? 0) && "Node.js") || (true && "Backend")) && !0); // true

console.log((("CSS" && 0) || (null ?? "HTML")) && (false || 100)); // 100

console.log(((false && "AI") || (undefined ?? "Python")) && ("Django" || 0)); // Django

console.log((((1 && true) || null) && (undefined ?? "TypeScript")) || false); // TypeScript

console.log(((0 && "MongoDB") || (null ?? false) || ("Express" && 1)) && true); // true

console.log(((undefined ?? false) || (true && "Next.js")) && (0 || "SSR")); // SSR

console.log((((null ?? "Tailwind") && 0) || (false ?? "Bootstrap")) && !null); // false 