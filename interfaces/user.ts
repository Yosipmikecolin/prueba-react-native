export interface User {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
  phone: string;
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
}
