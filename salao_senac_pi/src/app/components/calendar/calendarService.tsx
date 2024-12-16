import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ptBR } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "../calendar/calendar.css";
import TimeSelection from "./timeSelection";

interface CalendarProps {
    onTimeSelectionShow: () => void;
    onCalendarShow: () => void;
}

export default function Calendar({ onTimeSelectionShow, onCalendarShow }: CalendarProps) {
    const [startDate, setStartDate] = useState<Date | null>(null); // Inicialize com null
    const [showTimeSelection, setShowTimeSelection] = useState(false);

    const isWeekday = (date: any) => {
        const day = new Date(date).getDay();
        return day !== 0;
    };

    const handleTimeSelectionShow = () => {
        setShowTimeSelection(true);
        onTimeSelectionShow();
    };

    // Verificar se uma data foi selecionada (diferente de null)
    const isDateSelected = startDate !== null;

    if (showTimeSelection) {
        return <TimeSelection 
            onBack={() => {
                setShowTimeSelection(false);
                onCalendarShow();
            }} 
        />;
    }

    return (
        <div className="custom-calendar-container">
            <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)} // Atualiza startDate
                dateFormat="dd/MM/yyyy"
                inline
                locale={ptBR}
                filterDate={isWeekday}
                id="datepicker"
                calendarClassName="custom-datepicker"
                dayClassName={() => "custom-day"}
            />
            <button
                onClick={handleTimeSelectionShow}
                className="confirm-button"
                disabled={!isDateSelected} // Desabilita se startDate for null
            >
                Confirmar data
            </button>
        </div>
    );
}
