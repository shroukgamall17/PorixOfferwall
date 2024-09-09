export function reduceStringLength(str, maxLength) {
  return str.substring(0, maxLength);
}

export function handlImgOnError(event) {
  const defalutImg = "https://via.placeholder.com/60";
  event.target.onerror = null;
  event.target.src = defalutImg;
}


export const toggleShowActivity = () => {
  const activity = document.getElementById("activity");
  activity.classList.toggle("hide-activity");
  activity.classList.toggle("show-activity");
};