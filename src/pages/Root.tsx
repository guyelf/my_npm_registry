import { Outlet } from "react-router-dom"; // Uses the React-Router system to determine which page should be present now and shows it
import Header from "../components/Header";

export default function Root() {
  return (
    <div className='container mx-auto px-20'>
      <Header />
      <Outlet />
    </div>
  );
}
