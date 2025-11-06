import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function TaskModal({ task, onSave, onClose, loading }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        status: task.status
      });
    }
  }, [task]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title || formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title cannot exceed 100 characters';
    }
    
    if (!formData.description || formData.description.trim() === '') {
      newErrors.description = 'Description is required';
    } else if (formData.description.length > 500) {
      newErrors.description = 'Description cannot exceed 500 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      await onSave(formData);
      setErrors({});
    } catch (error) {
      setErrors({ general: error.response?.data?.message || 'Failed to save task' });
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          disabled={loading}
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-semibold mb-4">
          {task ? 'Edit Task' : 'New Task'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter task title"
              maxLength={100}
              disabled={loading}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            <p className="text-xs text-gray-500 mt-1">
              {formData.title.length}/100 characters
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows="4"
              placeholder="Enter task description"
              maxLength={500}
              disabled={loading}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            <p className="text-xs text-gray-500 mt-1">
              {formData.description.length}/500 characters
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={loading}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {errors.general}
            </div>
          )}
          
          <div className="flex gap-2 justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Saving...' : task ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
