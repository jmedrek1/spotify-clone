// this is to save on API calls - we only call 500ms after the user stops typing

import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;