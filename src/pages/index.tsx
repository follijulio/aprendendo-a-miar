import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  //* hooks
  const router = useRouter();

  //* lifecycle
  useEffect(() => {
    router.replace("/home");
  }, [router]);

  //* render
  return;
}
