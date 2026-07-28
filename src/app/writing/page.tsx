import { redirect } from "next/navigation";

export default function LegacyWritingRedirect() {
  redirect("/notes");
}
