'use client';

import { useState, useEffect, Suspense } from "react";
import Loading from "../components/Loading";

interface Chore {
  id: number;
  text: string;
  completed: boolean;
}

interface ChoreListProps {
  toDoList: Chore[];
  toggleComplete: (id: number) => void;
  removeChore: (id: number) => void;
}

const ChoreList: React.FC<ChoreListProps> = ({ toDoList, toggleComplete, removeChore }) => {
  return (
    <div className="max-w-sm flex flex-col items-start justify-start w-full">
      {toDoList.map(chore => (
        <div key={chore.id} className="text-pretty flex">
          <input type='textarea' className={`flex flex-wrap ${chore.completed ? 'line-through text-gray-500' : ''}`}>
          </input>
          <div className="flex gap-x-4 ml-3">
          <input
            className="w-6 aspect-square bg-slate-50 text-white rounded"
            type="checkbox"
            checked={chore.completed}
            onChange={() => toggleComplete(chore.id)}
          />
          <button 
            onClick={() => removeChore(chore.id)} 
            className="aspect-square w-6 bg-red-500 text-white rounded"
            >
            ×
          </button>
            </div>
        </div> 
      ))}
    </div>
  );
};

export default function Page() {
  const [toDoList, setToDoList] = useState<Chore[]>([]);
  const [newChoreText, setNewChoreText] = useState<string>('');

  useEffect(() => {
    const storedChores = localStorage.getItem('localChores');
    if (storedChores) {
      setToDoList(JSON.parse(storedChores));
    }
  }, []);

  const updateChores = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (newChoreText) {
      const newChore: Chore = {
        id: Date.now(),
        text: newChoreText,
        completed: false,
      };

      setToDoList(prevList => {
        const updatedList = [...prevList, newChore];
        updateLocalChores(updatedList); 
        return updatedList; 
      });

      setNewChoreText('');
    }
  };

  const removeChore = (id: number) => {
    setToDoList(prevList => {
      const updatedList = prevList.filter(chore => chore.id !== id);
      updateLocalChores(updatedList);
      return updatedList;
    });
  };

  const toggleComplete = (id: number) => {
    setToDoList(prevList => {
      const updatedList = prevList.map(chore =>
        chore.id === id ? { ...chore, completed: !chore.completed } : chore
      );
      updateLocalChores(updatedList);
      return updatedList;
    });
  };

  const updateLocalChores = (choreList: Chore[]) => {
    localStorage.setItem('localChores', JSON.stringify(choreList));
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col relative">
      <form onSubmit={updateChores} className="w-full max-w-sm mb-4">
        <div className="flex items-center">
          <input
            type="text"
            value={newChoreText}
            onChange={(e) => setNewChoreText(e.target.value)}
            placeholder="Enter a new chore"
            className="border border-gray-300 rounded px-2 py-1 flex-1 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add chore
          </button>
        </div>
      </form>
      <Suspense fallback={<Loading />}>
          <ChoreList toDoList={toDoList} toggleComplete={toggleComplete} removeChore={removeChore} />
      </Suspense>
    </div>
  );
}

