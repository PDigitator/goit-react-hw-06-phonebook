import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import type { PayloadAction } from '@reduxjs/toolkit';

// export interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      console.log('state :>> ', state); //!
      return {
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer; //!
