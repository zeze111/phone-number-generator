import fetch from "isomorphic-unfetch";

export const generateNumbers = limit =>
  fetch("http://localhost:3000/telecomms/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ limit })
  }).then(response => response.json());

export const listNumbers = (offset, limit) =>
  fetch(
    `http://localhost:3000/telecomms/phone-numbers?limit=${limit}&offset=${offset}`
  ).then(response => response.json());

export const sortNumbers = (order, offset, limit)  =>
  fetch(
    `http://localhost:3000/telecomms/phone-numbers/sort/${order}?limit=${limit}&offset=${offset}`
  ).then(response => response.json());

export const clearNumbersStorage = () =>
  fetch("http://localhost:3000/telecomms/phone-numbers", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
