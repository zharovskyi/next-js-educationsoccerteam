async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'GET',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getPrimaryMenu() {
  // const response = await fetch(`${process.env.API_HOST}/menu`);
  const response = await fetch(`http://education-soccerteam.local/wp-json/api/soccerteam/menu`);
  const data = await response.json();
  if(!data) {
    return {
      notFound: true,
    }
  }
  // console.log('data',data);

  return data;
}