const TotalTableCount = ({ transactions, total_wording }) => {
  return (
    <div>
      <p>
        {total_wording} : {transactions?.length}
      </p>
    </div>
  );
};

export default TotalTableCount;
