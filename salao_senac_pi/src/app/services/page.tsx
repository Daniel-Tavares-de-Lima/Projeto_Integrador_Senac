'use client';
import { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Calendar from "../components/calendar/calendarService";

export default function PageService() {
    const [selectedService, setSelectedService] = useState("");
    const [currentStep, setCurrentStep] = useState<'service' | 'calendar' | 'time'>('service');

    const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedService(event.target.value);
        if (event.target.value) {
            setCurrentStep('calendar');
        }
    };

    const handleNextStep = () => {
        if (currentStep === 'calendar') {
            setCurrentStep('time');
        }
    };

    const handlePrevStep = () => {
        if (currentStep === 'time') {
            setCurrentStep('calendar');
        } else if (currentStep === 'calendar') {
            setCurrentStep('service');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header/>
            <div className="w-full px-8 py-4 flex items-center justify-between">
                <button 
                    className="text-black text-3xl font-bold cursor-not-allowed opacity-50"
                    disabled={true}
                >
                    &larr;
                </button>
                <div className="flex-1 mx-4">
                    <div className="h-2 flex">
                        <div className="w-1/2 bg-orange-400 mr-2 rounded"></div>
                        <div className={`w-1/2 ${currentStep === 'time' ? 'bg-orange-400' : 'bg-gray-300'} rounded`}></div>
                    </div>
                </div>
                <button 
                    className={`text-black text-3xl font-bold ${
                        currentStep === 'calendar' ? '' : 'cursor-not-allowed opacity-50'
                    }`}
                    onClick={handleNextStep}
                    disabled={currentStep !== 'calendar'}
                >
                    &rarr;
                </button>
            </div>
            
            <main className="flex-grow container mx-auto px-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-24 max-w-7xl mx-auto">
                    <div className="lg:w-1/2">
                        <h1 className="text-6xl font-bold text-gray-500 mb-8">
                            Agendar serviço
                        </h1>
                        
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="service" className="block text-sm font-normal text-gray-600 mb-2">
                                    Escolha o serviço:
                                </label>
                                <div className="relative w-96">
                                    <select 
                                        id="service" 
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 text-lg text-center focus:outline-none focus:border-gray-400 bg-white pr-10 appearance-none"
                                        onChange={handleServiceChange}
                                        value={selectedService}
                                    >
                                        <option value="">Selecione o serviço</option>
                                        <option value="Penteado básico">Penteado básico</option>
                                        <option value="Corte de cabelo">Corte de cabelo</option>
                                        <option value="Manicure">Manicure</option>
                                    </select>
                                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg pb-6">
                                <Calendar 
                                    onTimeSelectionShow={() => setCurrentStep('time')}
                                    onCalendarShow={() => setCurrentStep('calendar')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 self-start">
                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg">Confira todos os dados antes de pagar</p>
                            
                            <div>
                                <p className="font-bold text-black text-lg mb-1">Informações do serviço</p>
                                <p className="text-black text-lg">Curto (C), Médio (M), Longo(L) e Extra Longo (EL)</p>
                            </div>

                            <div>
                                <p className="font-bold text-black text-lg mb-1">Comprovante de agendamento:</p>
                                <p className="font-bold text-black text-2xl">
                                    {selectedService || "Nenhum serviço selecionado"}
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-black text-lg mb-4">Qual o tamanho do seu cabelo?</p>
                                <div className="flex flex-wrap gap-6">
                                    {["Curto", "Médio", "Longo", "Extra Longo"].map((length) => (
                                        <label key={length} className="flex items-center gap-2 cursor-pointer">
                                            <input 
                                                type="radio" 
                                                name="hairLength" 
                                                value={length.toLowerCase()}
                                                className="w-4 h-4 text-orange-400 border-gray-300 focus:ring-orange-200"
                                            />
                                            <span className="text-black text-lg">{length}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
