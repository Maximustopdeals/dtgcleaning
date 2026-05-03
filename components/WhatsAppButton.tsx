"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">D.T.G. Cleaning</p>
                <p className="text-xs text-green-500">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">Hallo! Hoe kan ik u helpen?</p>
          <a
            href="https://api.whatsapp.com/send/?phone=31634683019"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-center py-3 rounded-xl font-semibold"
          >
            Start chat
          </a>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="whatsapp-btn w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  );
}
