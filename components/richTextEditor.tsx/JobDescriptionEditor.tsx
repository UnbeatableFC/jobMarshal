import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./MenuBar";
import TextAlign from "@tiptap/extension-text-align"


export function JobDescriptionEditor() {
  const editor = useEditor({
    extensions: [StarterKit , TextAlign , ],
    immediatelyRender: false,
  });

  return (
    <div className="w-full border rounded-lg overflow-hidden bg-card">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
    </div>
  );
}
