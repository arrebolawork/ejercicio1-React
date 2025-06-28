import Header from "./Header";

export default function Home() {
  const username = "Lucía";
  return (
    <div>
      <Header userName={username} />
    </div>
  );
}
