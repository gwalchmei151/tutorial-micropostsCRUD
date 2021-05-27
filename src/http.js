/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 *
 * @version 3.0.0
 * @author Tushar Ismail
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make HTTP GET Request
  async get(url) {
    // await response of fetch call
    const response = await fetch(url);
    // only proceed if resolved
    const responseData = await response.json();

    // only proceed if second promise resolved
    return responseData;
  }

  // Make HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    // only proceed if resolved
    const responseData = await response.json();

    // only proceed if second promise resolved
    return responseData;
  }

  // Make HTTP Put Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    // only proceed if resolved
    const responseData = await response.json();

    // only proceed if second promise resolved
    return responseData;
  }

  // Make HTTP Delete Request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    // only proceed if resolved
    const responseData = await 'Resource Deleted';

    // only proceed if second promise resolved
    return responseData;
  }
}

export const http = new EasyHTTP();
