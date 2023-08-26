function Button({ title,onClick }) {
  return (
    <button
    onClick={onClick}
      type="button"
      className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
    >
      {title}
    </button>
  );
}

export { Button };
