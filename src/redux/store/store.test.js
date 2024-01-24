import { configureStore } from "@reduxjs/toolkit";
import flashCardReducer, { addflashCard, removeflashCard } from "../slices/flashCardSlice";

describe("Redux Store", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: flashCardReducer,
    });
  });

  it("should add a flash card to the store", () => {
    const flashCardData = {
      groupName: "Test Group",
      description: "Test Description",
      cards: [{ term: "Test Term", defination: "Test Definition" }],
    };

    store.dispatch(addflashCard(flashCardData));

    const state = store.getState();
    const flashCards = state.flashCards;

    expect(flashCards).toHaveLength(1);
    expect(flashCards[0].text).toEqual(flashCardData);
  });

  it("should remove a flash card from the store", () => {
    // Add a flash card
    const flashCardData = {
      groupName: "Test Group",
      description: "Test Description",
      cards: [{ term: "Test Term", defination: "Test Definition" }],
    };
    store.dispatch(addflashCard(flashCardData));

    // Remove the added flash card
    const stateBeforeRemove = store.getState();
    const addedFlashCardId = stateBeforeRemove.flashCards[0].id;
    store.dispatch(removeflashCard(addedFlashCardId));

    const stateAfterRemove = store.getState();
    const flashCardsAfterRemove = stateAfterRemove.flashCards;

    expect(flashCardsAfterRemove).toHaveLength(0);
  });
});
