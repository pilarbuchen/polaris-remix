/// <reference types="react" />

declare namespace JSX {
    interface IntrinsicElements {
        div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        input: React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >;
    }
}
