// import React from 'react'

const Board = () => {
  return (
    <div className="h-full bg-white flex justify-center overflow-y-auto">
      <div className="w-[8.5in] min-h-[11in] bg-white shadow-md my-8 p-8">
        {/* Placeholder content */}
        <h1 className="text-3xl font-bold mb-4">Untitled document</h1>
        <p className="mb-4">Start typing or use formatting tools from the toolbar to begin your document.</p>
        <p className="mb-4">You can add headings, lists, images, and more to create a rich document.</p>
        <p>Use the sidebar on the left to navigate through your document or add comments.</p>
      </div>
    </div>
  );
};

export default Board;

