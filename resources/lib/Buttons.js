import Link from "next/link";

export function Buttons({ pagination }) {
  return (
    <>
      {pagination.previous ? (
        <Link href={pagination.previous}>
          <button>Previous</button>
        </Link>
      ) : (
        <button disabled>Previous</button>
      )}
      {pagination.next ? (
        <Link href={pagination.next}>
          <button>Next</button>
        </Link>
      ) : (
        <button disabled>Next</button>
      )}
    </>
  );
}
