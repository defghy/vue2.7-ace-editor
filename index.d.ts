import { type Ace } from 'ace-builds';
import type { VAceEditorInstance } from './types';
export declare const VAceEditor: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        required: true;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    options: ObjectConstructor;
    placeholder: StringConstructor;
    readonly: BooleanConstructor;
    wrap: BooleanConstructor;
    printMargin: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    minLines: NumberConstructor;
    maxLines: NumberConstructor;
}, {}, {}, {}, {
    focus(this: VAceEditorInstance): void;
    blur(this: VAceEditorInstance): void;
    selectAll(this: VAceEditorInstance): void;
    getAceInstance(this: VAceEditorInstance): Ace.Editor;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: StringConstructor;
        required: true;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: StringConstructor;
        default: string;
    };
    options: ObjectConstructor;
    placeholder: StringConstructor;
    readonly: BooleanConstructor;
    wrap: BooleanConstructor;
    printMargin: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    minLines: NumberConstructor;
    maxLines: NumberConstructor;
}>>, {
    theme: string;
    readonly: boolean;
    wrap: boolean;
    printMargin: number | boolean;
    lang: string;
}>;
