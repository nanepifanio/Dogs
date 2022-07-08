type ErrorProps = {
  error: string | null;
};

const ShowError = ({ error }: ErrorProps) => {
  return (
    <>
      {error && (
        <p style={{ color: "#f00", fontSize: "0.875rem", margin: ".625rem 0" }}>
          {error}
        </p>
      )}
    </>
  );
};

export default ShowError;
