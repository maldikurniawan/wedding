import Welcome from "./pages/Welcome";
import Opening from "./pages/Opening";
import Wedding from "./pages/Wedding";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Welcome />
      <Opening />
      <Wedding />
    </div>
  )
}