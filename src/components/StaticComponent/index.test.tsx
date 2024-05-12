import { render, screen } from "@testing-library/react";

import StaticComponent from "./index";

const setup = () => render(<StaticComponent />);

describe("링크 확인", () => {
  it("링크가 2개 존재한다", () => {
    setup();
    const ui = screen.getByTestId("ul");
    expect(ui.childNodes.length).toBe(2);
  });

  it("링크 목록의 스타일이 sqaure이다", () => {
    setup();
    const ui = screen.getByTestId("ul");
    expect(ui).toHaveStyle("list-style:square");
  });
});

describe("리액트 링크 테스트", () => {
  it("리액트 링크가 존재한다.", () => {
    setup();
    const reactLink = screen.getByText("리액트");
    expect(reactLink).toBeVisible();
  });

  it("리액트 링크가 올바른 주소로 존재한다.", () => {
    setup();
    const reactLink = screen.getByText("리액트");

    expect(reactLink.tagName).toEqual("A");
    expect(reactLink).toHaveAttribute("href", "https://reactjs.org");
  });
});

describe("네이버 링크 테스트", () => {
  it("네이버 링크가 존재한다.", () => {
    setup();
    const naverLink = screen.getByText("네이버");
    expect(naverLink).toBeVisible();
  });

  it("네이버 링크가 올바른 주소로 존재한다.", () => {
    setup();
    const naverLink = screen.getByText("네이버");

    expect(naverLink.tagName).toEqual("A");
    expect(naverLink).toHaveAttribute("href", "https://naver.com/");
  });

  it("네이버는 같은 창에서 열려야 한다.", () => {
    setup();
    const naverLink = screen.getByText("네이버");
    expect(naverLink).not.toHaveAttribute("target");
  });
});
