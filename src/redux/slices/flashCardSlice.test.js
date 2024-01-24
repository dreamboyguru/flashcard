import { addflashCard, removeflashCard, flashCardSlice } from "../slices/flashCardSlice";

describe("Flash Card Reducer", () => {
  it("should add a new flash card", () => {
    const initialState = { flashCards: [] };
    const flashCardData = {
      groupName: "Test Group",
      description: "Test Description",
      cards: [{ term: "Test Term", defination: "Test Definition" }],
    };

    const newState = flashCardSlice.reducer(initialState, addflashCard(flashCardData));

    expect(newState.flashCards).toHaveLength(1);
    expect(newState.flashCards[0].text).toEqual(flashCardData);
  });

  it("should remove a flash card", () => {
    const flashCardIdToRemove = "123"; // Replace with an actual flash card id
    const initialState = {
      flashCards: [
        { id: "123", text: { groupName: "Test Group", description: "Test Description", cards: [] } },
        // Add other flash cards as needed
      ],
    };

    const newState = flashCardSlice.reducer(initialState, removeflashCard(flashCardIdToRemove));

    expect(newState.flashCards).toHaveLength(initialState.flashCards.length - 1);
    expect(newState.flashCards.map((card) => card.id)).not.toContain(flashCardIdToRemove);
  });
});
