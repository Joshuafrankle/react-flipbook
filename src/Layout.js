import FlipBook from "./FlipBook";
import ElevateHead from "./elevate_now.png";

export default function Layout() {
  return (
    <>
      <div className="bg-dark">
        <div className="container d-flex justify-content-center">
          <img className="" src={ElevateHead} height={100} alt="" />
        </div>
        <section
          className="container fliphead p-2 d-flex flex-column justify-content-center align-items-center mt-1"
          style={{ overflow: "hidden" }}
        >
          <FlipBook />
        </section>
      </div>
    </>
  );
}
