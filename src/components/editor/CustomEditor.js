import Editor from "@monaco-editor/react";
import { useSelector } from 'react-redux'


const CustomEditor = (props) => {
    const content = useSelector((state) => state.fileContent.content);
    return (
        <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={content.payload}
      />
    );
}

export default CustomEditor;