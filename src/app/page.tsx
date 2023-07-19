import Link from "next/link";
export default function Home() {
  return (
    <Link href={"/home"}>
      <div className="h-screen w-screen flex justify-center items-center">
        <button className="border rounded-xl p-9">
          APERTE PARA ENTRAR NO SITE DO JUJU
        </button>
      </div>
    </Link>
  );
}
