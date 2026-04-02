"use client";

import { createContext, useContext, useState } from "react";
import { Modal } from "../components/Modal";

const ModalContext = createContext<{ openModal: () => void }>({ openModal: () => {} });

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
            {children}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
