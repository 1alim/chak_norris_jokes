import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const intervalRef = useRef();
  const click = useRef();
  console.log(click);
  console.log(intervalRef); 
  
  const addInterval = () => {
    if (!click.current) {
      callback()
      intervalRef.current = setInterval(callback, delay);
      click.current = true
    } else {
      intervalRef.current && clearInterval(intervalRef.current)
      click.current = false
    }
  }
  useEffect(() => {
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [])

  return { addInterval }
}