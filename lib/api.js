// Fetch the API, fetching the Graph QL endpoint
async function fetchAPI(query, { variables } = {}) {
  // get the graph QL endpoint
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // save the query and variables to the body of the res (res.body)
    body: JSON.stringify({
      query,
      variables
    })
  });

  // check for errors in the APIs response
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    // if there are errors, throw an error
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

// GET all articles
export async function getArticles() {
  const data = await fetchAPI(`query Articles {
    articles {
      id
      title
      content
      category {
        id
        name
      }
      image {
        url
        alternativeText
      }
    }
  }`);
  return data.articles;
}

// GET a single article
export async function getArticle(id) {
  const data = await fetchAPI(
    `query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      image {
        url
        alternativeText
      }
      category {
        id
        name
      }
      published_at
    }
  }`,
    { variables: { id } }
  );
  return data.article;
}

// GET all categories
export async function getCategories() {
  const data = await fetchAPI(`query Categories {
    categories {
      id
      name
    }
  }`);
  return data.categories;
}

// GET a single category
export async function getCategory(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
        id
        title
        content
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
      }
    }
  }
`,
    { variables: { id } }
  );
  return data.category;
}
