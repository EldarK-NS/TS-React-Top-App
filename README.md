1. npx create-next-app top-app --use-npm 
2. npm i -D typescript @types/react @types/node
3. npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
4. npm i -D stylelint stylelint-config-standard stylelint-order stylelint-order-config-standard

create flexible tags components:

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>