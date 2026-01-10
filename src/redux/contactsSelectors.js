import { createSelector } from "reselect";

export const selectEntities = (state) => state.contacts.entities;
export const selectIds = (state) => state.contacts.ids;
export const selectFilter = (state) => state.filter;

export const selectContactsArray = createSelector(
  [selectIds, selectEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const selectVisibleContacts = createSelector(
  [selectContactsArray, selectFilter],
  (contacts, filter) => {
    const norm = filter.toLowerCase();
    return contacts.filter((c) => c.name.toLowerCase().includes(norm));
  }
);
