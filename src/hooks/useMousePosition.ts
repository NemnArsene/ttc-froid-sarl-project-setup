import { useEffect, useRef } from "react";

export function useMousePosition() {
  const ref = useRef({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      ref.current.nx = (e.clientX / window.innerWidth) * 2 - 1;
      ref.current.ny = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return ref;
}
