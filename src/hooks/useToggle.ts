import { useState, useCallback } from 'react';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setValue((v) => !v);
    }, []);

    return [value, toggle];
};

export default useToggle;
