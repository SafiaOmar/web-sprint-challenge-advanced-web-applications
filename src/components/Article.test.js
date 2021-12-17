import React from "react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";
import { render, screen } from "@testing-library/react";

test('renders component without errors', ()=> {
    render(
        <Article
          article={{
            id: "",
            headline: "",
            createdOn: "",
            author: "",
            image: "",
            summary: "",
            body: "",
          }}
        />
      );
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

test("renders headline, author from the article when passed in through props", () => {
    render(
      <Article
        article={{
          id: "",
          headline: "This Is The Headline",
          createdOn: "",
          author: "This Is The Author",
          image: "",
          summary: "",
          body: "",
        }}
      />
    );

// test('renders "Associated Press" when no author is given', ()=> {
// });

const headline = screen.queryByText(/this is the headline/i);
  const author = screen.queryByText(/this is the author/i);

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(
    <Article
      article={{
        id: "",
        headline: "",
        createdOn: "",
        author: "",
        image: "",
        summary: "",
        body: "",
      }}
    />
  );

  const press = screen.queryByText(/associated press/i);

  expect(press).toBeInTheDocument();
});

test("executes handleDelete when the delete button is pressed", async () => {
  const mockDelete = jest.fn();

  render(
    <Article
      article={{
        id: "",
        headline: "",
        createdOn: "",
        author: "",
        image: "",
        summary: "",
        body: "",
      }}
      handleDelete={mockDelete}
    />
  );

  const button = screen.queryByTestId("deleteButton");
  userEvent.click(button);

  await expect(mockDelete).toBeCalled();
});


//Task List:
//1. Complete all above tests. Create test article data when needed.