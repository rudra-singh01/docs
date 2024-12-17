import { History, Video, Share2, ChevronDown, Undo, Redo, Printer, SpellCheck, PaintBucket, Link, ImageIcon, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Minus, Plus, Edit3 } from 'lucide-react';
import Sidebar from "../pages/Sidebar";
import Board from "../pages/Board";

const BlankDocument = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink-0 border-b border-gray-200">
        {/* Top Navigation */}
        <div className="flex items-center px-4 py-2 gap-4">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-10 h-10 flex items-center justify-center">
              <img className="w-8 h-8" src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="" />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                defaultValue="Untitled document"
                className="bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-400 focus:outline-none px-1"
              />
              <div className="flex gap-4 text-sm">
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  File
                </button>
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  Edit
                </button>
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  View
                </button>
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  Insert
                </button>
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  Format
                </button>
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  Tools
                </button>
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  Extensions
                </button>
                <button className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                  Help
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <History className="w-5 h-5 text-gray-600" />
            <Video className="w-5 h-5 text-gray-600" />
            <button className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200">
              <Share2 className="w-4 h-4" />
              Share
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center px-2 py-1 gap-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Undo className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Redo className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Printer className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <SpellCheck className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-2">
            <select className="bg-transparent hover:bg-gray-100 px-2 py-1 rounded outline-none">
              <option>100%</option>
            </select>
            <select className="bg-transparent hover:bg-gray-100 px-2 py-1 rounded outline-none">
              <option>Normal text</option>
            </select>
            <select className="bg-transparent hover:bg-gray-100 px-2 py-1 rounded outline-none">
              <option>Arial</option>
            </select>
          </div>

          <div className="h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="text-sm">11</span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-1">
            <button className="font-bold p-2 hover:bg-gray-100 rounded">
              B
            </button>
            <button className="italic p-2 hover:bg-gray-100 rounded">I</button>
            <button className="underline p-2 hover:bg-gray-100 rounded">
              U
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <PaintBucket className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Edit3 className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Link className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ImageIcon className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded">
              <AlignLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <AlignCenter className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <AlignRight className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <AlignJustify className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="h-4 w-px bg-gray-300" />

          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded">
              <List className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ListOrdered className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-grow flex overflow-hidden">
        <div className="w-64 flex-shrink-0 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-grow overflow-y-auto">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default BlankDocument;

