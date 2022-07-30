import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [shouldDisplay, setShouldDisplay] = useState(initialState);

  const handleToggleClick = useCallback(
    () => setShouldDisplay((state) => !state),
    []
  );

  return { shouldDisplay, handleToggleClick };
};

export default useToggle;
