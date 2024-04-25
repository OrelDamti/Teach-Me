import { useEffect } from "react";
export const useOutsideDetectForHeaderIconMenu = (
  ref1,
  ref2,
  handleClick,
  active
) => {
  const handleClickOutside = (event) => {
    if (
      active &&
      ref1.current &&
      !ref1.current.contains(event.target) &&
      ref2.current &&
      !ref2.current.contains(event.target)
    ) {
      handleClick(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};
