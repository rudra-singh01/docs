import {
  History,
  Video,
  Share2,
  ChevronDown,
  Download,
  PrinterIcon,
  Twitter,
  MessageCircle,
} from 'lucide-react';
import Sidebar from '../pages/Sidebar';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useEffect, useRef, useState } from 'react';

const BlankDocument = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [documentTitle, setDocumentTitle] = useState('Untitled document');
  const [isSaving, setIsSaving] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Type kuch bhi...',
        modules: {
          toolbar: [
            [{ font: [] }, { size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: [] }],
            ['link', 'image', 'video'],
            ['blockquote', 'code-block'],
            ['clean'],
          ],
        },
      });

      // Auto save functionality
      quillRef.current.on('text-change', () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1000); // Simulate save delay
      });
    }
  }, []);

  const handlePrint = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        .ql-toolbar {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    window.print();
    document.head.removeChild(style);
  };

  const handleDownload = () => {
    const content = quillRef.current.root.innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${documentTitle}.html`;
    a.click();
  };

  const handleShare = (platform) => {
    const documentUrl = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=Check out my document: ${documentUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=Check out my document&url=${documentUrl}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink-0 border-b border-gray-200">
        {/* Top Navigation */}
        <div className="flex items-center px-4 py-2 gap-4">
          <div className="flex items-center gap-2 flex-1">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                className="w-8 h-8"
                src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                value={documentTitle}
                onChange={(e) => setDocumentTitle(e.target.value)}
                className="bg-transparent border-b border-transparent hover:border-gray-300 focus:border-gray-400 focus:outline-none px-1"
              />
              <div className="flex gap-4 text-sm">
                {['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Extensions', 'Help'].map(
                  (item) => (
                    <button
                      key={item}
                      className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isSaving ? (
              <span className="text-sm text-gray-500">Saving...</span>
            ) : (
              <span className="text-sm text-gray-500">All changes saved</span>
            )}
            <History className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Video className="w-5 h-5 text-gray-600 cursor-pointer" />
            <PrinterIcon onClick={handlePrint} className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Download onClick={handleDownload} className="w-5 h-5 text-gray-600 cursor-pointer" />
            <div className="relative">
              <button
                onClick={() => setShowShareOptions((prev) => !prev)}
                className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200"
              >
                <Share2 className="w-4 h-4" />
                Share
                <ChevronDown className="w-4 h-4" />
              </button>
              {showShareOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <span>Share on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <Twitter className="w-5 h-5 text-blue-400" />
                    <span>Share on Twitter</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex overflow-hidden">
        <div className="w-64 flex-shrink-0 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="flex-grow overflow-y-auto bg-white p-12 relative">
          <div ref={editorRef} className="h-full sticky top-0 left-0"></div>
        </div>
      </div>
    </div>
  );
};

export default BlankDocument;
