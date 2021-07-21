export default function InitiateButton({ number }) {
  return (
    <div className="text-center" style={{ paddingBottom: "50px" }}>
      <a
        className="btn btn-success"
        style={{ borderRadius: "200px" }}
        href="block"
      >
        Iniciar Bloque {number}
      </a>
    </div>
  );
}
