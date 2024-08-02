import { revalidatePath } from "next/cache";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
      />
      <p>
        Attempting to load. If page does not load, try{" "}
        <a
          href="localhost:3000"
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
        >
          refreshing
        </a>
        .
      </p>
    </div>
  );
};

export default Loader;
