import { HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { redirect } from "next/navigation";

function SearchInput() {
  async function searchAction(formData: FormData) {
    "use server";

    const searchTerm = formData.get("searchTerm") as string;

    redirect(`/search/${searchTerm}`);
  }

  return (
    <form
      action={searchAction}
      className="w-full flex items-center px-5 rounded-full border-white bg-white border shadow-lg"
    >
      <Link href="/">
        <HomeIcon className="h-10 w-10 text-gray-300" />
      </Link>
      <input
        type="text"
        className="flex-1 p-5 outline-none"
        name="searchTerm"
        placeholder="What are your interests? e.g. Luxury Shopping, Gaming..."
      />
    </form>
  );
}

export default SearchInput;
