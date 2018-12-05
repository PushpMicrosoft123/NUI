// Type definitions for Compare Tool

// Definitions by: Pushpdeep Gupta



declare namespace NUI {

    interface ICompareTool {

        compare(): string;

        clear(): any;

        options: IOptions;
    }

    interface IOptions {

        oldHtml: string;

        newHtml: string;

        target?: string;
    }

    class Options implements IOptions {
        oldHtml: string;

        newHtml: string;

        target?: string;

        constructor(oldHtml: string, newHtml: string, target?: string);
    }

    class CompareTool implements ICompareTool {
        compare(): string;
        clear(): void;
        options: IOptions;

        constructor(compareOptions?: Options);
    }
}
