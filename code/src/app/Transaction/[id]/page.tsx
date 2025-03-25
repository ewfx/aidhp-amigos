import Transaction from "@/components/Transaction";
import db from "@/db";
import { transaction, Similartransaction } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

// refresh cache every 24 hours
export const revalidate = 60 * 60 * 24;

async function transactionPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const transactions = db.collection("movie_reviews");

  const search = await transactions.find({ $and: [{ _id: id }] });

  if (!(await search.hasNext())) {
    return notFound();
  }

  const transaction = (await search.next()) as transaction;

  const similartransactions = (await transactions
    .find(
      {},
      {
        vector: transaction.$vector,
        limit: 6, // we will cut the first transaction and want to show 5 similar transactions
        includeSimilarity: true,
      }
    )
    .toArray()) as Similartransaction[];

  // cut the first transaction because it is the same as the transaction we are looking for
  similartransactions.shift();

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-y-10 p-10 pb-0">
        <Image
          src={transaction.name}
          alt={transaction.name}
          width={300}
          height={450}
          className="shrink-0 rounded-lg "
        />
        <div className="px-2 md:px-10 flex flex-col gap-y-2">
          <h1 className="text-6xl font-bold">{transaction.name}</h1>
          <p className="text-gray-600">{transaction.age}</p>
          <p className="font-light">{transaction.$vectorize}</p>

          <div className="mt-auto grid grid-cols-2">
            <div className="font-semibold">
              <p>Interests</p>
            </div>
            <div>
              <p>{transaction.interests}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-3xl pt-10 pl-10 font-bold ">
          Cards you may like
        </h2>
        <div className="flex justify-between items-center lg:flex-row gap-x-20 gap-y-10 pl-20 pr-10 py-10 overflow-x-scroll">
          {similartransactions.map((transaction, i) => (
            <Transaction
              key={transaction._id}
              index={i + 1}
              similarityRating={Number(transaction.$similarity.toFixed(2)) * 100}
              transaction={transaction}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default transactionPage;
