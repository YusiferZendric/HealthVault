import React, { useState } from 'react';
import { 
  FaFileAlt, 
  FaSearch, 
  FaFilter, 
  FaDownload, 
  FaShare,
  FaEye,
  FaTrash,
  FaPlus
} from 'react-icons/fa';
import { 
  MdFolderOpen, 
  MdDescription,
  MdLocalHospital,
  MdDateRange
} from 'react-icons/md';
import documents from '../data/documents';

function Documents() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date'); // date, name, category

  const categories = [
    { id: 'all', name: 'All Documents', icon: <MdFolderOpen /> },
    { id: 'blood-tests', name: 'Blood Tests', icon: <MdLocalHospital /> },
    { id: 'imaging', name: 'Imaging Reports', icon: <MdDescription /> },
    { id: 'prescriptions', name: 'Prescriptions', icon: <FaFileAlt /> },
    { id: 'medical-history', name: 'Medical History', icon: <MdDateRange /> }
  ];

  const filteredDocuments = documents
    .filter(doc => 
      (selectedCategory === 'all' || doc.category === selectedCategory) &&
      (doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       doc.category.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <FaFileAlt className="mr-2" />
                Document Management
              </h1>
              <p className="text-gray-600">Organize and access your medical records</p>
            </div>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
              <FaPlus className="mr-2" />
              Upload New Document
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="name">Sort by Name</option>
                    <option value="category">Sort by Category</option>
                  </select>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <FaFilter />
                  </button>
                </div>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDocuments.map((doc, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          <FaFileAlt className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{doc.name}</h3>
                          <p className="text-sm text-gray-500">{doc.category}</p>
                          <p className="text-xs text-gray-400">{doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-400 hover:text-blue-600" title="View">
                          <FaEye />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-green-600" title="Download">
                          <FaDownload />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-purple-600" title="Share">
                          <FaShare />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-600" title="Delete">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;