import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { createContact, getContacts } from "../contacts";

export const loader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

export const action = async () => {
  return await createContact();
}

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => {
                return (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <p>
                          {" "}
                          {contact.first} {contact.last}{" "}
                        </p>
                      ) : (
                        <p>No name</p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No contacts</p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
