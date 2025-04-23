export default function NamePrompt({ onSubmit }) {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) onSubmit(name.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>What's your full name?</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
}
