import Link from "next/link";
import { introduction } from "../../resources/lib/data";
import { volumes } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the rings</h1>
      {introduction}
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={"/volumes/" + volume.slug}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
