import React, { useState, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon, Strikethrough, List, ListOrdered, Quote, Paperclip } from "lucide-react";

const EmailBodyEditor = () => {
    const [files, setFiles] = useState<File[]>([]);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Italic,
            Underline,
            Strike,
            BulletList,
            OrderedList,
            Blockquote,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Link,
        ],
        content: "",
    });
    const handleOnSend=()=>{
        const data = editor?.getJSON()
        console.log(data?.content[0].content[0].text,files);
        
    }
    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }, []);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="border border-gray-300 rounded-md p-2 min-h-[200px]">
                <EditorContent editor={editor} className="w-full min-h-[180px] outline-none" />
            </div>
    
            <div className="flex space-x-2 mb-3 border-b pb-2">
                <button onClick={() => editor?.chain().focus().toggleBold().run()} className="btn-icon">
                    <BoldIcon size={18} />
                </button>
                <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="btn-icon">
                    <ItalicIcon size={18} />
                </button>
                <button onClick={() => editor?.chain().focus().toggleUnderline().run()} className="btn-icon">
                    <UnderlineIcon size={18} />
                </button>
                <button onClick={() => editor?.chain().focus().toggleStrike().run()} className="btn-icon">
                    <Strikethrough size={18} />
                </button>
                <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className="btn-icon">
                    <List size={18} />
                </button>
                <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} className="btn-icon">
                    <ListOrdered size={18} />
                </button>
                <button onClick={() => editor?.chain().focus().toggleBlockquote().run()} className="btn-icon">
                    <Quote size={18} />
                </button>
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-1">Attachments</label>
                <div className="relative flex items-center border rounded-md p-2 bg-gray-100 cursor-pointer">
                    <Paperclip size={18} className="text-gray-600 mr-2" />
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <span className="text-gray-700 text-sm">Upload Files</span>
                </div>
                <ul className="mt-2 text-sm text-gray-600">
                    {files.map((file, index) => (
                        <li key={index} className="mt-1 flex items-center">
                            📄 {file.name}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleOnSend}>Send</button>
        </div>
    );
};

export default EmailBodyEditor;
