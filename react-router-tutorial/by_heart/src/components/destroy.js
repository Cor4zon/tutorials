import { deleteContact } from "../contacts";

export const action = async ({params}) => {
    const id = params.contactId;
    await deleteContact(id);
}