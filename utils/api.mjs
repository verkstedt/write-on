const API_BASE = 'https://api.sheety.co/3ff2e3defad16a8a1f24436b1efd8c76/consequence/'

const unwrapJsonResponse = async (response) => {
  // TODO Handle HTTP errors
  const data = await response.json()
  // TODO Handle data.errors
  return Object.values(data)[0]
}

export const getAll = async (name, filter = {}) => {
  const url = new URL(name, API_BASE)
  Object.entries(filter).forEach(([name, value]) => {
    url.searchParams.append(`filter[${name}]`, value)
  })

  const response = await fetch(
    url,
    {
      method: 'GET',
    }
  )

  return unwrapJsonResponse(response)
}

export const getOne = async (name, id) => {
  const url = new URL(name + '/' + id, API_BASE)

  const response = await fetch(
    url,
    {
      method: 'GET',
    }
  )

  return unwrapJsonResponse(response)
}

export const add = async (name, data) => {
  const url = new URL(name, API_BASE)

  // FIXME This is stupid
  const dataKey = name.replace(/s$/, '')
  const body = {
    [dataKey]: {
      ...data,
      createdAt: Date.now(),
    }
  };

  const response = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  )

  return unwrapJsonResponse(response)
}
