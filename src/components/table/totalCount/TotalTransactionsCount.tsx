import TotalTableCount from "./TotalTableCount";

const TotalTransactionsCount = ({ transactions }) => {
  console.log(transactions);
  // const
  return (
    <>
      <TotalTableCount transactions={transactions} />
      <TotalTableCount transactions={transactions} />
      <TotalTableCount transactions={transactions} />
    </>
  );
};

export default TotalTransactionsCount;
