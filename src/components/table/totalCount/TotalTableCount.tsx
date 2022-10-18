import Bold from "../../typography/Bold";

const TotalTableCount = ({ transactions, total_wording }) => {
  return (
    <div>
      <Bold>
        {total_wording} : {transactions?.length}
      </Bold>
    </div>
  );
};

export default TotalTableCount;
