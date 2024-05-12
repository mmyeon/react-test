import AnchorTagComponent from "../AnchorTagComponent";

const StaticComponent = () => {
  return (
    <>
      <h1>Static Component</h1>

      <ul
        data-testid="ul"
        style={{
          listStyle: "square",
        }}
      >
        <li>
          <AnchorTagComponent
            targetBlank
            name="리액트"
            href="https://reactjs.org"
          />
        </li>
        <li>
          <AnchorTagComponent name="네이버" href="https://naver.com/" />
        </li>
      </ul>
    </>
  );
};

export default StaticComponent;
