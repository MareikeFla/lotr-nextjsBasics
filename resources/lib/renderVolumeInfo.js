import { volumes } from "@/resources/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Buttons } from "../Components/Buttons";

export default function renderVolumeInfo(volume, cover) {
  const volumeInfo = volumes.find(({ slug }) => slug === volume);
  const currentIndex = volumes.findIndex(({ slug }) => slug === volume);
  const allPages = volumes.map((volume) => volume.slug);
  const paginationInfo = {
    current: volumeInfo.slug,
    next: allPages[currentIndex + 1],
    previous: allPages[currentIndex - 1],
  };

  return (
    <>
      <h1>{volumeInfo.title}</h1>
      <Image src={cover} height={230} width={140} alt="" />
      <p>{volumeInfo.description}</p>
      <ul>
        {volumeInfo.books.map((book) => {
          return (
            <li key={book.ordinal}>
              <p>
                {book.ordinal}: {book.title}
              </p>
            </li>
          );
        })}
      </ul>
      <Link href="/volumes">All Volumes</Link>
      <br></br>
      <Buttons pagination={paginationInfo}></Buttons>
    </>
  );
}
