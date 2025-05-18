export function useClickManager() {
  function handleClick(id: string) {
      const section = document.getElementById(id);
      if (section)
        section.scrollIntoView({ behavior: "smooth" });
  }

  return handleClick;
}
