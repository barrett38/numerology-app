export default function BirthdayPrompt({ onSubmit }) {
  const [birthday, setBirthday] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthday) onSubmit(birthday);
  };

  // const getResults = "Get Results";

  return (
    <form onSubmit={handleSubmit}>
      <h2>What's your birthday?</h2>
      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        required
      />
      <button type="submit">Get Results</button>
    </form>
  );
}
