import "isomorphic-fetch";

const server = "http://localhost:3000";

export const generateNumbers = limit =>
  fetch(`${server}/telecomms`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ limit })
  }).then(response => {
    return response.json().catch(error => {
      console.error(error);
    });
  });

export const listNumbers = (offset, limit) =>
  fetch(
    `${server}/telecomms/phone-numbers?limit=${limit}&offset=${offset}`
  ).then(response => {
    return response.json().catch(error => {
      console.error(error);
    });
  });

export const sortNumbers = (order, offset, limit) =>
  fetch(
    `${server}/telecomms/phone-numbers/sort/${order}?limit=${limit}&offset=${offset}`
  ).then(response => {
    return response.json().catch(error => {
      console.error(error);
    });
  });

export const clearNumbersStorage = () =>
  fetch(`${server}/telecomms/phone-numbers`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json().catch(error => {
      console.error(error);
    });
  });
