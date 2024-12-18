// import React from 'react'

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-white sticky top-0 left-0">
      <div className="border-r border-gray-200 p-4">

        <div className="space-y-2">
          <div className="font-medium text-gray-700 mb-4">Document tabs</div>
          <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Tab 1
            </div>
            <button className="p-1 hover:bg-blue-100 rounded">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
          <div className="text-sm text-gray-500 italic px-2">
            Headings you add to the document will appear here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
