export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = ({ contacts }) => contacts.isLoading;