import ContributionsChart from "./components/ContributionsChart";
import HabitsList from "./components/HabitsList";
import LogWorkHistory from "./components/LogWorkHistory";

const App = () => {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto border p-10 gap-8">
      <section>
        <ContributionsChart />
      </section>
      <section className="flex flex-row gap-10 w-full">
        <HabitsList />
        <LogWorkHistory />
      </section>
    </div>
  );
};

export default App;
