import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
export interface EditorJsProps {
    enableReInitialize?: boolean;
    instanceRef?: (instance: EditorJS) => void;
}
export declare type Props = Readonly<EditorJS.EditorConfig> & Readonly<EditorJsProps>;
declare class EditorJsContainer extends React.PureComponent<Props> {
    instance?: EditorJS;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    initEditor(): void;
    destroyEditor(): void;
    render(): {};
}
export default EditorJsContainer;
