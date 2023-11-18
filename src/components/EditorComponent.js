import React, { useRef, useEffect } from 'react';
import FroalaEditor from 'froala-editor';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

const EditorComponent = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    FroalaEditor('#editor', {
      // Configuration options for Froala Editor
    });
  }, []);

  return <div id="editor" ref={editorRef}></div>;
};

export default EditorComponent;