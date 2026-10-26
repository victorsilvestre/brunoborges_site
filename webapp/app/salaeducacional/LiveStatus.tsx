"use client";

import { useEffect, useState } from "react";
import { SESSAO } from "./config";

type Estado = "live" | "soon" | "closed" | "static";

interface Leitura {
  estado: Estado;
  titulo: string;
  detalhe: string;
  relogio: string;
  linha: number;
}

const ESTATICO: Leitura = {
  estado: "static",
  titulo: "Sala ao vivo",
  detalhe: `Segunda a sexta, ${SESSAO.inicio} às ${SESSAO.fim}`,
  relogio: "--:--",
  linha: -1,
};

// Lê dia da semana e hora em Brasília, independente do fuso do visitante.
function ler(agora: Date): Leitura {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(agora);

  const pega = (tipo: string) =>
    partes.find((p) => p.type === tipo)?.value ?? "";
  const dia = pega("weekday");
  const relogio = `${pega("hour")}:${pega("minute")}`;
  const minutos = Number(pega("hour")) * 60 + Number(pega("minute"));
  const util = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(dia);

  if (util && minutos >= SESSAO.inicioMin && minutos < SESSAO.fimMin) {
    return {
      estado: "live",
      titulo: "Ao vivo agora",
      detalhe: `Sessão aberta até ${SESSAO.fim}`,
      relogio,
      linha: 1,
    };
  }
  if (util && minutos < SESSAO.inicioMin) {
    return {
      estado: "soon",
      titulo: "Abre hoje",
      detalhe: `Pré-abertura às ${SESSAO.inicio}`,
      relogio,
      linha: 0,
    };
  }
  const proximo =
    dia === "Fri" || dia === "Sat" || dia === "Sun" ? "segunda" : "amanhã";
  return {
    estado: "closed",
    titulo: "Sessão encerrada",
    detalhe: `Próxima: ${proximo}, ${SESSAO.inicio}`,
    relogio,
    linha: util ? 2 : -1,
  };
}

const LINHAS = [
  { hora: SESSAO.inicio, nome: "Pré-abertura" },
  { hora: "Pregão", nome: "Análise ao vivo" },
  { hora: SESSAO.fim, nome: "Encerramento" },
];

export function LiveStatus({ variant = "panel" }: { variant?: "panel" | "chip" }) {
  const [leitura, setLeitura] = useState<Leitura>(ESTATICO);

  useEffect(() => {
    const atualizar = () => setLeitura(ler(new Date()));
    atualizar();
    const id = window.setInterval(atualizar, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const texto = (
    <span className="live-text" role="status">
      <strong>{leitura.titulo}</strong>
      <span>{leitura.detalhe}</span>
    </span>
  );

  if (variant === "chip") {
    return (
      <div className="live live-chip" data-state={leitura.estado}>
        <span className="live-dot" aria-hidden="true" />
        {texto}
      </div>
    );
  }

  return (
    <div className="live live-panel" data-state={leitura.estado}>
      <div className="live-head">
        <span className="live-dot" aria-hidden="true" />
        {texto}
        <span className="live-clock" aria-hidden="true">
          {leitura.relogio}
          <small>Brasília</small>
        </span>
      </div>
      <ol className="live-rows">
        {LINHAS.map((l, i) => (
          <li key={l.nome} data-lit={i === leitura.linha}>
            <span className="live-time">{l.hora}</span>
            <span>{l.nome}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
