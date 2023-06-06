import { Error } from './types/global';
import { Options } from './types/run-tests';
export declare const runTests: (options: Options, check: (projectPath: string, lang: string) => Promise<Error[]>) => Promise<void>;
