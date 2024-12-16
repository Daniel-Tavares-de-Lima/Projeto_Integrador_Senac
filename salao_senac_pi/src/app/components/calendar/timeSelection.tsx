import React, { useState } from 'react';
import { MdWatchLater } from "react-icons/md";
import Calendar from './calendarService';

export default function timeSelection() {
  const morningTimes = ['8:00', '8:30', '9:00', '10:00', '10:30', '11:30'];
  const afternoonTimes = ['13:00', '13:30', '14:00', '15:00', '15:30', '16:00', '16:30', '17:00'];
  const [showCalendar, setShowCalendar] = useState(false);

  if (showCalendar) {
    return <Calendar onBack={() => setShowCalendar(false)} />;
}

  return (
    <div className="ml-1 p-6 max-w-md mx-auto rounded-lg shadow-md  border border-gray-100">
      <div className="flex items-center mb-6">
        <button className="text-orange-500 flex items-center text-sm" onClick={() => setShowCalendar(true)}>
          ↩ Voltar
        </button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <MdWatchLater className="text-xl"/>
          <h1 className="text-xl font-extrabold">Horário de Atendimento</h1>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm mb-3 font-bold text-center">MANHÃ</h2>
        <div className="grid grid-cols-3 gap-2">
          {morningTimes.map((time) => (
            <button
              key={time}
              className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg text-sm hover:bg-orange-50"
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm mb-3 font-bold text-center">TARDE</h2>
        <div className="grid grid-cols-3 gap-2">
          {afternoonTimes.map((time) => (
            <button
              key={time}
              className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg text-sm hover:bg-orange-50"
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-start">
        <button className="px-6 py-2 mt-4 text-center border-2 border-orange-500 text-black rounded-lg hover:bg-orange-50">
          Confirmar horário
        </button>
      </div>
    </div>
  );
}