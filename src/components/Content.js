import "../static/Content.css";
export default function Content({ title, intro }) {
  return (
    <div
      className="container bg-white w-60 text-center"
      style={{ padding: "5% 0 0 0" }}
    >
      <div className="text-center">
        <h3>
          <strong>{title}</strong>
        </h3>
      </div>
      <div className="section text-center" style={{ padding: "0 12%" }}>
        <p>{intro}</p>
      </div>
    </div>
  );
}
