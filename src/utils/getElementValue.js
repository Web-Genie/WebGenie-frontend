function getElementValue(targetRef, targetProperty = null, target = null) {
  const currentElementWidth = targetRef.getBoundingClientRect().width;
  const currentElementHeight = targetRef.getBoundingClientRect().height;

  if (!target) {
    return [currentElementWidth, currentElementHeight];
  }

  const currentElementValue = Number(
    window
      .getComputedStyle(targetRef, null)
      .getPropertyValue(targetProperty)
      .split("")
      .filter((item) => !isNaN(Number(item)))
      .join("")
  );

  return currentElementValue;
}

export default getElementValue;
