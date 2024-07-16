import { useState } from 'react';

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(prevState => !prevState);

  return [state, toggleState];
}

export default useToggle;
