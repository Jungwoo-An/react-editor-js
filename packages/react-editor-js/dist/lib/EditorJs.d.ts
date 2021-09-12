import * as React from 'react';
import EditorJS, { OutputData, BlockToolData, API } from '@editorjs/editorjs';
export interface EditorJsProps {
    enableReInitialize?: boolean;
    instanceRef?: (instance: EditorJS) => void;
    onChange?: (api: API, data?: OutputData) => void;
    onReady?: (instance?: EditorJS) => void;
    onCompareBlocks?: (newBlocks: BlockToolData | undefined, oldBlocks: BlockToolData | undefined) => boolean;
}
export declare type Props = Readonly<EditorJS.EditorConfig> & Readonly<EditorJsProps>;
declare class EditorJsContainer extends React.PureComponent<Props> {
    instance?: EditorJS;
    holder: string;
    componentDidMount(): void;
    componentDidUpdate({ readOnly: prevReadOnly }: Props): Promise<void>;
    componentWillUnmount(): void;
    handleChange: (api: API) => Promise<void>;
    handleReady: () => void;
    initEditor(): void;
    destroyEditor(): Promise<void>;
    changeData(data: OutputData): void;
    render(): {};
}
export default EditorJsContainer;
