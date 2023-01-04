import { deleteContact } from "../contacts";
import { redirect } from "react-router-dom";

export async function action({params}) {
  const id = params.contactId;
  await deleteContact(id);
  return redirect('/');
}