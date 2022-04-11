/// <reference types="svelte" />

// This stops Typescript from throwing errors when .md file is imported.
declare module "*.md";

// Suppress errors caused by missing type definitions
// (there is nothing I can do about them).
declare module "@sveltech/routify";
declare module "@sveltech/routify/tmp/routes";
declare module "pdfobject";