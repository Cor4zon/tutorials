## what's i learned

1. Outlet

An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.


2. Link
чтобы работал client-side routing без обновления страницы


3. There are two APIs we'll be using to load data, loader and useLoaderData.

	to make it working:
	 a.  Create loader
	 b.  Configure the loader on the route
	 c.  Access and render the data with help of useLoaderData

4. how react router works

HTML forms actually cause a navigation in the browser, just like clicking a link. The only difference is in the request: links can only change the URL while forms can also change the request method (GET vs POST) and the request body (POST form data).

Without client side routing, the browser will serialize the form's data automatically and send it to the server as the request body for POST, and as URLSearchParams for GET. React Router does the same thing, except instead of sending the request to the server, it uses client side routing and sends it to a route action.


5. NavLink

Link on steroids

для красивой навигацонной меню

6. useNavigation has "state" field

useNavigation returns the current navigation state: it can be one of "idle" | "submitting" | "loading".

7. Чем клик по кнопке на html форме отличается от клика по Form react-router?

When the user clicks the submit button:

<Form> prevents the default browser behavior of sending a new POST request to the server, but instead emulates the browser by creating a POST request with client side routing
The <Form action="destroy"> matches the new route at "contacts/:contactId/destroy" and sends it the request

After the action redirects, React Router calls all of the loaders for the data on the page to get the latest values (this is "revalidation"). useLoaderData returns new values and causes the components to update!
Add a form, add an action, React Router does the rest.


8. Contextual errors

9. Index routes

10. 🧐 Why is there no event.preventDefault on the button?

A <button type="button">, while seemingly redundant, is the HTML way of preventing a button from submitting its form.

11. There is a difference between useNavigation and useNavigate

12. URLSearchParams


https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

https://doka.guide/js/urlsearchparams/

We can use it for searching

13. useSubmit

14. How to use search spinner

15. How to avoid big history stack in browser (replace field in submit)

16. useFetcher hook

 It allows us to communicate with loaders and actions without causing a navigation.

 how it works:

 Check that out, both stars automatically update. Our new <fetcher.Form method="post"> works almost exactly like a the <Form> we've been using: it calls the action and then all data is revalidated automatically--even your errors will be caught the same way.

There is one key difference though, it's not a navigation--the URL doesn't change, the history stack is unaffected.


17. Pathless Routes

18. JSX Routes




## what's i plan to do:

1. repeat all tutorial step by step without looking on hints

2. create similar project with similar features 

3. improve existing project by adding new advanced features 
