import React, { useEffect, useState } from "react";

interface MaquinaProps {
  text: string;
  escrever: boolean;
  scale: number;
}

export function Maquina(props: MaquinaProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const escreverOuApagar = (i: number, escrever: boolean) => {
      if (escrever) {
        if (i <= props.text.length) {
          setText((prevText) => props.text.slice(0, i));
          timeoutId = setTimeout(() => escreverOuApagar(i + 1, true), 100 * props.scale);
        } else {
          timeoutId = setTimeout(() => escreverOuApagar(i - 1, false), 1000 * props.scale);
        }
      } else {
        if (i >= 0) {
          setText((prevText) => props.text.slice(0, i));
          timeoutId = setTimeout(() => escreverOuApagar(i - 1, false), 80 * props.scale);
        }
      }
    };

    const iniciarAnimacao = () => {
      if (props.escrever) {
        escreverOuApagar(0, true);
      } else {
        setText(props.text);
        timeoutId = setTimeout(() => escreverOuApagar(props.text.length, false), 50 * props.scale);
      }
    };
    
    iniciarAnimacao();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [props.text, props.escrever, props.scale]);

  return (
    <p className="font-bold text-white">
      {text}
    </p>
  );
}
