import { transaction, Similartransaction } from "@/types";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

function Transaction({
  index,
  similarityRating,
  transaction,
}: {
  index?: number;
  similarityRating?: number;
  transaction: transaction | Similartransaction;
}) {
  return (
    <Link key={transaction._id} href={`/transaction/${transaction._id}`} className="">
      <div className="relative">
        <ImageWithFallback
          className="min-w-64 max-w-64 h-96 object-cover rounded-lg shadow-lg"
          src={transaction.name}
          alt={transaction.name}
        />

        {similarityRating && (
          <div className="absolute w-14 h-14 flex items-center justify-center bottom-0 right-0 bg-orange-300 bg-opacity-90 p-2 rounded-full m-5 font-bold">
            {similarityRating}%
          </div>
        )}

        {index && (
          <div className="absolute text-gray-100 top-32 -left-10 text-9xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {index}
          </div>
        )}
      </div>

      <div className="py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg shadow-lg p-4 w-64 h-40 flex flex-col items-center justify-center">
        <div
          className="w-16 h-16 flex items-center justify-center bg-gray-800 text-white text-lg font-bold rounded-full mb-2"
          title={transaction.card}
        >
          {transaction.card
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 3)}
        </div>
        <p className="text-lg font-semibold text-center">{transaction.card}</p>
      </div>
    </Link>
  );
}

export default Transaction;
