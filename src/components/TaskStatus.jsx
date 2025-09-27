// src/components/TaskStatus.jsx
import React from "react";

export default function TaskStatus({ tasks, onCompleteTask }) {
  return (
    <div className="space-y-6 mt-2">
      <h3 className=" font-semibold text-gray-800 mb-4">Task Status</h3>
      {/* Task Status Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        
        
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-sm">No tasks in progress</p>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{task.title}</h4>
                  <p className="text-xs text-gray-500">{task.customer}</p>
                  <div className="w-full h-full">
                      <button 
                  onClick={() => onCompleteTask(task.id)}
                  className="px-3 py-1 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors"
                >
                  Complete
                </button>

                  </div>
                
                </div>
                
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Resolved Task Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold text-gray-800 mb-4">Resolved Task</h3>
        
        {/* solving Text show here */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-800">Incorrect Billing Address</h4>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}