import {
  Welcome,
  Opening,
  Wedding,
  Story,
  Gallery,
  Location,
  Thanks,
  Footer,
} from "@/pages/";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Welcome />
      <Opening />
      <Wedding />
      <Story />
      <Gallery />
      <Location />
      <Thanks />
      <Footer />
    </div>
  )
}