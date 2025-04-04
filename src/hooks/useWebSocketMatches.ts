import { useEffect, useRef, useState } from 'react';
import { Match } from '../types/api-types';
import { UpdateMatchesMessage } from '../types/websocketTypes';

export function useWebSocketMatches() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [error, setError] = useState<string>('');
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://app.ftoyd.com/fronttemp-service/ws');
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('WebSocket connected.');
      // Если нужно, можно ws.send(...) что-то на сервер,
      // но, судя по всему, тут не требуется.
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as UpdateMatchesMessage;
        
        if (data.type === 'update_matches') {
          // Полный массив матчей приходит в data.data
          setMatches(data.data);
        } else {
          // Если прилетают другие типы — обработать или игнорировать.
          console.log('Unhandled WS message', data);
        }
      } catch (err) {
        console.error('Failed to parse WS message:', err);
        setError('Ошибка при парсинге данных из WebSocket.');
      }
    };

    ws.onerror = (err) => {
      console.error('WebSocket error:', err);
      setError('Произошла ошибка WebSocket.');
    };

    ws.onclose = (ev) => {
      console.log('WebSocket closed:', ev.reason);
      // Если нужно автопереподключение — можно здесь запланировать reconnect
    };

    return () => {
      // При размонтировании закрываем
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return { matches, error };
}
