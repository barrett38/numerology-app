// src/pages/ResultPage.js
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const { name, birthday } = location.state || {};

  return (
    <div>
      <h1>Results</h1>
      <p>Name: {name}</p>
      <p>Birthday: {birthday}</p>
      {/* Calculations here later */}
    </div>
  );
}
