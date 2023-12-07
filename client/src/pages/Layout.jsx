import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{backgroundColor: "red" }}>
        hello world
        <Outlet /> 
    </div>
  );
}