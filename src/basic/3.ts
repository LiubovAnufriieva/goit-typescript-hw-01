// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let a: string | number;

a = "Welcome to TypeScript";

a = 20;

let b: "enable" | "disable";

b = "enable";

b = "disable";