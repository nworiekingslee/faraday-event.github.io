import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Event from "./routes/Event";
import { useEffect, useState } from "react";
import base from "./util";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    base("events")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setEvents(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage events={events} />} />
          <Route path="event" element={<Event />}>
            <Route path=":eventId" element={<Event />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
