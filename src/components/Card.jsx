import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot
} from 'firebase/firestore';

const MAX_TASKS = 5;

const Card = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));

      fetchedTasks.sort((a, b) => a.timestamp - b.timestamp);

      setTasks(fetchedTasks);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async () => {
    if (tasks.length < MAX_TASKS) {
      await addDoc(collection(db, 'tasks'), {
        text: '',
        completed: false,
        timestamp: Date.now()
      });
    }
  };

  const updateTaskText = async (id, newText) => {
    await updateDoc(doc(db, 'tasks', id), {
      text: newText
    });
  };

  const toggleTaskComplete = async (id, currentStatus) => {
    await updateDoc(doc(db, 'tasks', id), {
      completed: !currentStatus
    });
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  return (
    <div className="bg-grey shadow-lg rounded-xl p-6 sm:p-10 w-full max-w-xl flex flex-col items-center gap-6">
      <div className="flex flex-col gap-4 w-full h-auto items-center">
        {!isLoading && tasks.map((task, index) => (
          <div
            key={task.id}
            className="text-lg sm:text-2xl flex items-center gap-2 border p-3 rounded-md bg-lgrey w-full max-w-[500px]"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskComplete(task.id, task.completed)}
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder={`Task ${index + 1}`}
              value={task.text}
              onChange={(e) => updateTaskText(task.id, e.target.value)}
              className="flex-grow outline-none px-2 text-base sm:text-2xl font-inter bg-transparent"
            />
            <button
              onClick={() => deleteTask(task.id)}
              className="text-grey hover:text-red-700 ml-2"
            >
              <Trash2 className="w-6 h-6 sm:w-10 sm:h-10"" />
            </button>
          </div>
        ))}
      </div>

      {tasks.length < MAX_TASKS && (
        <button
          onClick={addTask}
          className="bg-slate text-lgrey py-2 px-4 rounded-2xl w-full sm:w-1/2 flex items-center justify-center font-inter mt-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-pink-500 hover:text-white"
        >
          <Plus size={28} className="mr-2 sm:size-10" /> Add Task
        </button>
      )}
    </div>
  );
};

export default Card;
