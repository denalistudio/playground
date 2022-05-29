type typo = 'asd' | 'qwe';

interface abc {
    a: string;
    b: boolean;
    c: number;
}

interface Window {
    state: 0 | 1 | 2 | 'e'; // Our window state management system supports four states. 0: closed, 1: loading, 2: loaded, e: error
}