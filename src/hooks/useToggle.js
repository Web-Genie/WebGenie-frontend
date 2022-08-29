import { useCallback, useState } from "react";

const useToggle = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const handleToggleClick = useCallback(
    () => setShouldDisplay((state) => !state),
    []
  );

  return { shouldDisplay, handleToggleClick };
};

export default useToggle;
