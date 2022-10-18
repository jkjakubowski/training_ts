const TotalTableCount = ({ transactions }) => {
  return (
    <div>
      <p>Total: {transactions?.length}</p>
    </div>
  );
};

export default TotalTableCount;
