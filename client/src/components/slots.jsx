import Monday from "../days/monday";
import Tuesday from "../days/tuesday";
import Wednesday from "../days/wednesday";
import Thursday from "../days/thursday";
import Friday from "../days/friday";
import Saturday from "../days/saturday";
import Sunday from "../days/sunday";

const Slots = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center gap-24 p-4 h-full w-full">
        <Monday />
        <Tuesday />
        <Wednesday />
        <Thursday />
        <Friday />
        <Saturday />
        <Sunday />
      </div>
    </main>
  );
};

export default Slots;
