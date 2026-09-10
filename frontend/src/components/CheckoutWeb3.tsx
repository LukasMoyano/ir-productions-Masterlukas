import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Wallet, CheckCircle, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CheckoutWeb3 = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', celular: '', correo: '', ciudad: '' });
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulamos la creación inicial de la orden
    setTimeout(() => {
      setLoading(false);
      setStep(2); // Pasar a pantalla de pago directo
    }, 1200);
  };

  const handleConfirmPayment = () => {
    setLoading(true);
    // Aquí el backend enviaría la notificación a tu base de datos y a tu WhatsApp
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Éxito
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-gray-200 py-12 px-4 flex items-center justify-center font-['Inter']">
      <div className="max-w-lg w-full bg-[#131518] border border-[#23262E] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.1)] relative">
        
        {/* Header Producto - PROPUESTA BI */}
        <div className="bg-gradient-to-b from-gray-900 to-[#131518] p-8 text-center border-b border-gray-800">
          <div className="inline-block px-4 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-black uppercase tracking-widest mb-4 border border-green-900/50">
            Contrato Inteligente BI
          </div>
          <h2 className="text-2xl font-bold mb-2">Unidad de Trabajo Activa (UTA)</h2>
          <p className="text-sm text-gray-400 mb-4">100 Minutos de Transformación Operativa</p>
          <div className="text-5xl font-black text-white mb-2 tracking-tighter">
            $200.000 <span className="text-xl text-gray-500 font-normal">COP</span>
          </div>
          <p className="text-xs text-green-500 flex items-center justify-center gap-1 font-mono uppercase tracking-widest mt-4">
            <ShieldCheck size={14} /> Trazabilidad Web3 Activa
          </p>
        </div>

        {/* STEP 1: Datos */}
        {step === 1 && (
          <div className="p-8">
            <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Registro de Identidad (Hash)</h3>
            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <input 
                  type="text" required placeholder="Nombre completo / Empresa"
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition text-white"
                  onChange={e => setFormData({...formData, nombre: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="tel" required placeholder="WhatsApp"
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition text-white"
                  onChange={e => setFormData({...formData, celular: e.target.value})}
                />
                <input 
                  type="text" required placeholder="Ciudad"
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition text-white"
                  onChange={e => setFormData({...formData, ciudad: e.target.value})}
                />
              </div>
              <div>
                <input 
                  type="email" required placeholder="Correo electrónico"
                  className="w-full bg-black/40 border border-gray-700 rounded-xl px-4 py-4 focus:border-green-500 outline-none transition text-white"
                  onChange={e => setFormData({...formData, correo: e.target.value})}
                />
              </div>
              <button disabled={loading} className="w-full bg-tech-green text-black font-black py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-green-400 transition mt-4 uppercase tracking-wider">
                {loading ? 'Generando Identidad...' : 'Continuar al Pago'} <ArrowRight size={20} />
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: Pago Directo @plata */}
        {step === 2 && (
          <div className="p-8 text-center animate-in fade-in duration-500">
            <QrCode size={48} className="text-tech-green mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Transfiere el Valor Exacto</h3>
            <p className="text-gray-400 text-sm mb-6">Envía $200.000 COP para liberar el diagnóstico y agendar la sesión.</p>
            
            <div className="bg-black/50 border border-gray-700 rounded-2xl p-6 mb-8 relative flex flex-col items-center">
              <span className="text-xs uppercase text-gray-500 font-bold block mb-4">Tag de Pago DaviPlata/Nequi</span>
              
              {/* Espacio para el QR real del cliente (se puede reemplazar la imagen) */}
              <div className="w-32 h-32 bg-white rounded-xl mb-4 flex items-center justify-center p-2">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent('Transferencia @plata3197919742')}`} alt="QR Code" className="w-full h-full opacity-80" />
              </div>

              <span className="text-2xl font-black text-tech-green font-mono tracking-wider select-all">@plata3197919742</span>
            </div>

            <button onClick={handleConfirmPayment} disabled={loading} className="w-full bg-white text-black font-black py-4 rounded-xl flex justify-center items-center shadow-lg hover:bg-gray-200 transition">
              {loading ? 'Verificando Nodo...' : 'Pago Realizado'}
            </button>
            <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500 hover:text-white transition">Volver atrás</button>
          </div>
        )}

        {/* STEP 3: Éxito y Trazabilidad */}
        {step === 3 && (
          <div className="p-10 text-center animate-in zoom-in duration-300">
            <CheckCircle size={64} className="text-tech-green mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-2">¡Soberanía Lograda!</h3>
            <p className="text-gray-400 text-sm mb-6">Pago notificado a IR Productions. Tu orden y agendamiento están encriptados.</p>
            
            <div className="bg-black/40 border border-gray-800 rounded-xl p-4 text-left mb-6">
              <div className="text-xs text-gray-500 uppercase mb-1">Hash del Contrato (Tx)</div>
              <div className="text-sm font-mono text-green-400 truncate break-all">
                0x9a8f...b7e4 (Enviado a tu correo)
              </div>
            </div>

            <button onClick={() => navigate('/')} className="w-full bg-gray-800 text-white font-bold py-4 rounded-xl hover:bg-gray-700 transition">
              Volver al inicio
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default CheckoutWeb3;
